# Feedlet

Feedlet, a Feedly clone, is a news aggregator powered by the third-party NewsAPI platfrom allowing users to organize
their favorite news  sources into feeds and keep up to date with all of them in one place.

[Link to Heroku-hosted site](https://feedlet.herokuapp.com/#/)

![screenshot_real](https://github.com/musicpulpite/Feedlet/blob/master/app/assets/images/screenshot_real.png)

## Features
Feedlet includes all of the basic functionality of any modern news aggregator with news source organization under topical *Feeds* and the option to save articles in a *Read Later* page. Feedlet has search functionality and highlighting to indicate articles that have already been read during that session. Feedlet also has infinite scroll so that users can continuously scan through new articles without refreshing the current page.  

Feedlet is now _mobile-friendly_. The webpage was refactored to be responsive and now supports touch events for smartphones (pull up sidepanel and autoscroll to top).

## A few design features to note are:
1. Feedlet has a demo user system that generates a new account for anyone who wants to demo the website for up to 12 hours.


Every user that selects "Demo website without creating account" is generated random user credentials and logged in.
```javascript
export const createDemoUser = () => (dispatch) => {
  const user = {
    username:  Math.random().toString(36).substring(2, 15),
    password: Math.random().toString(36).substring(2, 15),
    demo: true
  }
  SessionApiUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  );
};
```

In the Rails backend there is a scope defined to select demo-users in the database with accounts older than 12 hours.
```javascript
scope :expired, -> { where('created_at <= ? AND demo = true', 12.hours.ago) }
```

And a task that destroys all expired users along with all of their associated data (feeds created, sources subscribed and articles favorited).
```javascript
namespace :api do
  desc "Delete demo users after 12 hours"

  task :delete_demo_users => :environment do
    User.expired.destroy_all
  end
end
```

2. Read data is not stored in the database.

Since read data (highlighting on the articles page showing articles that have already been clicked on) is only necessary for the immediate user experience and doesn't carry over from session to session it is stored as session cookies instead.

Every time an article is clicked (bringing up the article popup page with links to the news website) an event is triggered.
```javascript
componentDidMount() {
  if (this.props.saved === false) {
    sessionStorage.setItem(this.props.article.url, true);
    window.dispatchEvent( new Event('storage') );
  }
}
```
Note that a synthetic event ('storage') is triggered. This is necessary for the individual article elements rendered on the articles page to immediately rerender once their 'read' state is changed (either from 'unread' to 'read' or vice versa). This signalling is accomplished through a window event listener.

```javascript
window.addEventListener('storage', () => {
  this.forceUpdate();
})
```

In similar fashion articles can marked as unread after they have been selected by removing them from the session storage.
```javascript
markUnread() {
  sessionStorage.removeItem(this.props.article.url);
  this.setState({unreadbuttonDisabled: true})
  window.dispatchEvent( new Event('storage') );
}
```

3. All article pages have infinite scroll functionality

Upon initial mounting of the ArticlesPage React Component 20 articles are queried from the third-party NewsAPI given the relevant article criteria for the current page (fed to the articles page by its various container components).

An event listener is added to the articles page to be triggered by the 'onscroll' event
```javascript
window.onscroll = () => {
  if (window.innerHeight + document.documentElement.scrollTop
    === document.getElementById('main').offsetHeight) {
      this.updatePage();
  }
};
```

Once the condition is met, a method is called that queries 20 more articles from NewsAPI given the same criteria and updates the 'articles' slice of Redux State accordingly. At that point the react component automatically rerenders and updates the actual DOM with 20 more articles.
```javascript
updatePage() {
  this.setState({page: this.state.page + 1});
  this.props.updateRelevantArticles(this.props.sourceList,
    this.props.searchQuery, this.state.page);
}
```
This process can repeat indefinitely.
(Note that the API queries are organized by the 'page' local state variable in the component which is incremented every time the API needs to be hit again)

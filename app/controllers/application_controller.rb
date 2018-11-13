class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    current_session = Session.find_by(session_token: session[:session_token])
    @current_user = current_session ? current_session.user : nil
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.new_session!
  end

  def logout
    current_user.delete_session!(session[:session_token])
  end

end

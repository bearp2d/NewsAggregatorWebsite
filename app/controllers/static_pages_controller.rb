class StaticPagesController < ApplicationController
  def root
    render 'static_pages/root.html.erb'
  end
end

class PagesController < ApplicationController
  def home
  end
  def about
  end
  def ajax
  	render partial: 'ajax'
  end
end

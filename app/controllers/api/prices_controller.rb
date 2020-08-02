class Api::PricesController < ApplicationController
  def index
    return nil if params[:keyword] == ""
    @prices = Price.where(['name LIKE ?', "%#{params[:keyword]}%"] ).limit(10)
    respond_to do |format|
      format.html
      format.json
    end
  end
end
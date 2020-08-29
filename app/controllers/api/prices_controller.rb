class Api::PricesController < ApplicationController
  def index
    return nil if params[:keyword] == ""
    @prices = Price.where(['name LIKE ?', "%#{params[:keyword]}%"]).where(group_id: current_user.groups.ids).limit(8)
    respond_to do |format|
      format.html
      format.json
    end
  end
end



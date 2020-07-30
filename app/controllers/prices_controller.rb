class PricesController < ApplicationController
  before_action :get_group

  def new
    @price = Price.new
  end

  def create
    @price = @group.prices.new(price_params)
    if @price.save
      redirect_to new_group_price_path(@group), notice: "登録しました"
    else
      @prices = @group.prices
      flash.now[:alert] = "内容を入力してください"
      render :index
    end
  end
  
  private
  def price_params
    params.require(:price).permit(:name, :number)
  end

  def get_group
    @group = Group.find(params[:group_id])
  end
end

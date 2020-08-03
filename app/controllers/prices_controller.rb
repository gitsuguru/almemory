class PricesController < ApplicationController
  before_action :set_group

  def index
  end

  def new
    @price = Price.new
  end

  def create
    @price = @group.prices.new(price_params)
    if @price.save
      redirect_to new_group_price_path, notice: "登録しました"
    else
      @prices = @group.prices
      flash.now[:alert] = "内容を入力してください"
      render :new
    end
  end
  
  private
  def price_params
    params.require(:price).permit(:name, :number)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end

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
      flash.now[:alert] = "入力されていない箇所があります"
      render :new
    end
  end

  def edit
    @price = Price.find(params[:id])
  end

  def update
    @price = Price.find(params[:id])
    if @price.update(price_params)
      redirect_to new_group_price_path, notice: "最安値を編集しました"
    else
      flash.now[:alert] = "入力されていない箇所があります"
      render :edit
    end
  end

  def destroy
    @price = Price.find(params[:id])
    if @price.destroy
      redirect_to new_group_price_path, notice: "削除しました"
    else
      flash.now[:alert] = "通信エラーです"
      render :index 
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

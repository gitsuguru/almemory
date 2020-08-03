class MemosController < ApplicationController
  before_action :set_group
  
  def index
    @memos = @group.memos
  end

  def new
    @memo = Memo.new
  end

  def create
    @memo = @group.memos.new(memo_params)
    if @memo.save
      redirect_to group_memos_path, notice: "メモを作成しました"
    else
      flash.now[:alert] = "内容を入力してください"
      render :new
    end
  end

  def destroy
    memo = Memo.find(params[:id])
    if memo.destroy
      redirect_to group_memos_path, notice: "削除しました"
    else
      flash.now[:alert] = "通信エラーです"
      render :index 
    end
  end

  def edit
    @memo = Memo.find(params[:id])
  end

  def update
    memo = Memo.find(params[:id])
    if memo.update(memo_params)
      redirect_to group_memos_path, notice: "更新しました"
    else
      flash.now[:alert] = "通信エラーです"
      render :index 
    end
  end
  
  private

  def memo_params
    params.require(:memo).permit(:text)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

end

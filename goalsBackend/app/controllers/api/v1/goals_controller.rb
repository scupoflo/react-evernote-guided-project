class Api::V1::GoalsController < ApplicationController

  def index
    @goals = Goal.all
    render json: @goals
  end

  def show
    render json: Goal.find(params[:id])
  end

  def create
    goal = Goal.create(goal_params)
    render json: goal, status: 201
  end

  def update
    @goal.update(goal_params)
    render json: @goal, status: 200
  end

  def destroy
    goal = Goal.find(params[:id])
    goal.destroy
    render json: {message:"Zap! Goal deleted", goal:goal}
  end

  def show
    render json: @goal, status: 200
  end

  private
  def goal_params
    params.permit(:body, :title, :user_id, :picture, :deadline, :priority)
  end

  def set_note
    @goal = Goal.find(params[:id])
  end
end




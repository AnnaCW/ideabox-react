class Api::V1::IdeasController < ApiBaseController

  def create
    render json: Idea.create(idea_params), location: nil
  end

  def update
    render json: Idea.update(params[:id], idea_params)
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end

end

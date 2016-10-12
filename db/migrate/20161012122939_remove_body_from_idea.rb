class RemoveBodyFromIdea < ActiveRecord::Migration[5.0]
  def change
    remove_column :ideas, :body, :text
  end
end

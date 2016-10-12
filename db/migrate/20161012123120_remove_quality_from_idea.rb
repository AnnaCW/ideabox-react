class RemoveQualityFromIdea < ActiveRecord::Migration[5.0]
  def change
    remove_column :ideas, :quality, :integer
  end
end

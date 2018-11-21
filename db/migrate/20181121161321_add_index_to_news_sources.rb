class AddIndexToNewsSources < ActiveRecord::Migration[5.2]
  def change
    add_index :news_sources, :source_id, unique: true
  end
end

class AddSourceIdToNewsSources < ActiveRecord::Migration[5.2]
  def change
    add_column :news_sources, :source_id, :string
  end
end

class RenameSources < ActiveRecord::Migration[5.2]
  def change
    rename_table :sources, :news_sources
  end
end

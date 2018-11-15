class CreateFeedSources < ActiveRecord::Migration[5.2]
  def change
    create_table :feed_sources do |t|
      t.integer :feed_id, null: false
      t.integer :source_id, null: false
      t.timestamps
    end

    add_index :feed_sources, [:feed_id, :source_id], unique: true
  end
end

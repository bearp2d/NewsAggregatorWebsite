class CreateFeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :feeds do |t|
      t.integer :user_id, null: false
      t.string :feed_name, null: false
    end

    add_index :feeds, [:user_id, :feed_name], unique: true
  end
end

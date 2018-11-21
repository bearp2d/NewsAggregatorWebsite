class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :source_id, null: false
      t.string :url, null: false
      t.string :urlToImage
      t.string :title, null: false
      t.string :author
      t.string :publishedAt
      t.text :description
      t.text :content
    end

    add_index :articles, :source_id
    add_index :articles, :url, unique: true
  end
end

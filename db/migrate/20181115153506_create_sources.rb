class CreateSources < ActiveRecord::Migration[5.2]
  def change
    create_table :sources do |t|
      t.string :source_name, null: false
      t.string :source_logo_url
      t.text :source_description
      t.string :source_url, null: false
    end

    add_index :sources, :source_name, unique: true
  end
end

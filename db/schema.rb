# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_22_214431) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "source_id", null: false
    t.string "url", null: false
    t.string "urlToImage"
    t.string "title", null: false
    t.string "author"
    t.string "publishedAt"
    t.text "description"
    t.text "content"
    t.index ["source_id"], name: "index_articles_on_source_id"
    t.index ["url"], name: "index_articles_on_url", unique: true
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "article_id", null: false
    t.index ["user_id", "article_id"], name: "index_favorites_on_user_id_and_article_id", unique: true
  end

  create_table "feed_sources", force: :cascade do |t|
    t.integer "feed_id", null: false
    t.integer "source_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feed_id", "source_id"], name: "index_feed_sources_on_feed_id_and_source_id", unique: true
  end

  create_table "feeds", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "feed_name", null: false
    t.index ["user_id", "feed_name"], name: "index_feeds_on_user_id_and_feed_name", unique: true
  end

  create_table "news_sources", force: :cascade do |t|
    t.string "source_name", null: false
    t.string "source_logo_url"
    t.text "source_description"
    t.string "source_url", null: false
    t.string "source_id"
    t.index ["source_id"], name: "index_news_sources_on_source_id", unique: true
    t.index ["source_name"], name: "index_news_sources_on_source_name", unique: true
  end

  create_table "sessions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_sessions_on_session_token"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "demo"
    t.index ["username"], name: "index_users_on_username"
  end

end

json.array!(@articles) do |article|
  json.partial! 'api/articles/article', article: article
end

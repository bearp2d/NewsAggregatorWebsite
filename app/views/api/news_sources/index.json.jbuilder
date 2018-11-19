json.array!(@sources) do |source|
  json.id source.id
  json.name source.source_name
  json.description source.source_description
  json.url source.source_url
end

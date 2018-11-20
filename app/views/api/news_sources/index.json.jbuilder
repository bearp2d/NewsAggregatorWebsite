# json.array!(@sources) do |source|
#   json.id source.id
#   json.name source.source_name
#   json.description source.source_description
#   json.url source.source_url
# end

@sources.each do |source|
  json.set! source.id do
    json.extract! source, :id, :source_name, :source_description, :source_url
  end
end

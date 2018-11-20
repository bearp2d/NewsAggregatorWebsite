@sources.each do |source|
  json.set! source.id do
    json.extract! source, :id, :source_name, :source_id,
      :source_description, :source_url
  end
end

json.array! @prices do |price|
  json.name price.name
  json.number price.number
end
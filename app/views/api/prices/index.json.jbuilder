json.array! @prices do |price|
  json.name price.name
  json.number price.number
  json.id price.id
  json.group_id price.group_id
end


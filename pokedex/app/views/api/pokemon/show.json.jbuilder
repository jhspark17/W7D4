json.pokemon do 
    json.id @poke.id
    json.name @poke.name 
    json.attack @poke.attack 
    json.defense  @poke.defense 
    json.moves @poke.moves 
    json.poke_type @poke.poke_type 
    json.image_url  asset_path(@poke.image_url) 
    json.item_ids @poke.item_ids
end

json.items do 
  @poke.items.each do |item|
    json.set! item.id do
      json.id item.id
      json.name item.name
      json.pokemon_id item.pokemon_id
      json.price item.price
      json.happiness item.happiness
      json.image_url asset_path(item.image_url) 
    end
  end
end
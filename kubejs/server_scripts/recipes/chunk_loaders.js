ServerEvents.recipes(event => {


	event.remove({id: 'chunkloaders:basic_chunk_loader'})
	event.shaped(
	  Item.of('chunkloaders:basic_chunk_loader'), 
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		A: 'mekanism:alloy_infused',
		B: '#chipped:obsidian',
		C: 'minecraft:iron_ingot'
	  }
	)

	
})
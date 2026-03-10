ServerEvents.recipes(event => {


	event.remove({output: 'productivebees:centrifuge'})
	event.shaped(
	  Item.of('productivebees:centrifuge'), 
	  [
	    'S S',
		'SGS',
		'SSS'
	  ], 
	  {
		S: 'assemblylinemachines:pure_steel_ingot',
		G: 'minecraft:grindstone'
	  }
	)
	
	
	event.remove({output: 'productivebees:honey_generator'})
	event.shaped(
	  Item.of('productivebees:honey_generator'), 
	  [
	    'SHS',
		'SFS',
		'SSS'
	  ], 
	  {
		S: 'assemblylinemachines:pure_steel_ingot',
		H: 'productivebees:honey_bucket',
		F: '#forge:furnaces'
	  }
	)
	
	
	event.remove({output: 'productivebees:bottler'})
	event.shaped(
	  Item.of('productivebees:bottler'), 
	  [
	    'STS',
		'SGS',
		'SSS'
	  ], 
	  {
		S: 'assemblylinemachines:pure_steel_ingot',
		G: '#forge:glass',
		T: 'minecraft:smooth_stone_slab'
	  }
	)
	
	
	event.remove({output: 'productivebees:incubator'})
	event.shaped(
	  Item.of('productivebees:incubator'), 
	  [
	    'SDS',
		'SHS',
		'SSS'
	  ], 
	  {
		S: 'assemblylinemachines:pure_steel_ingot',
		D: 'minecraft:daylight_detector',
		H: 'minecraft:hay_block'
	  }
	)
	
	
	event.remove({output: 'productivebees:gene_indexer'})
	event.shaped(
	  Item.of('productivebees:gene_indexer'), 
	  [
	    'SCS',
		'SWS',
		'SSS'
	  ], 
	  {
		S: 'assemblylinemachines:pure_steel_ingot',
		W: 'minecraft:crafting_table',
		C: 'minecraft:comparator'
	  }
	)
	
	
	event.remove({id: 'productivebees:stone_chip'})
	
	
})
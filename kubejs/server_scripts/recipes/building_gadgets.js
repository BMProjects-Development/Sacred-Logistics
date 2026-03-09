ServerEvents.recipes(event => {


	event.remove({output: 'buildinggadgets:gadget_building'})
	event.shaped(
	  Item.of('buildinggadgets:gadget_building'), 
	  [
	    'DAD',
		'BAB',
		'DCD'
	  ], 
	  {
		A: 'mekanism:alloy_infused',
		B: 'minecraft:diamond',
		C: 'minecraft:lapis_lazuli',
		D: 'minecraft:iron_ingot'
	  }
	)

	
})
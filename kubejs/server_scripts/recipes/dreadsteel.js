ServerEvents.recipes(event => {


	event.remove({output: 'dreadsteel:dreadsteel_ingot'})
	event.shaped(
	  Item.of('2x dreadsteel:dreadsteel_ingot'), 
	  [
	    'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		A: 'kubejs:dragon_ingot',
		B: 'iceandfire:dread_shard',
		C: 'allthemodium:unobtainium_nugget'
	  }
	)

	
})
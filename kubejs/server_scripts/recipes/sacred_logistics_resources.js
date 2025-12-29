ServerEvents.recipes(event => {


	event.remove({output: 'kubejs:photocell'})
	event.shaped(
	  Item.of('kubejs:photocell'), 
	  [
	    'GGG',
		'RBR',
		'OOO'
	  ], 
	  {
		G: '#forge:glass_panes',
		R: 'minecraft:redstone',
		B: 'mekanism:basic_control_circuit',
		O: 'mekanism:ingot_osmium'
	  }
	)
	
	
	event.remove({output: 'kubejs:quantum_processor'})
	event.shaped(
	  Item.of('kubejs:quantum_processor'), 
	  [
	    'TLT',
		'MEM',
		'TCT'
	  ], 
	  {
		T: 'assemblylinemachines:attuned_titanium_plate',
		M: 'assemblylinemachines:mystium_blend',
		L: 'ae2:logic_processor',
		E: 'ae2:engineering_processor',
		C: 'ae2:calculation_processor'
	  }
	)
	
	
	event.remove({output: 'kubejs:dragon_ingot'})
	event.shaped(
	  Item.of('2x kubejs:dragon_ingot'), 
	  [
	    'MFM',
		'ELE',
		'MIM'
	  ], 
	  {
		M: 'assemblylinemachines:mystium_plate',
		E: 'assemblylinemachines:energized_gold_plate',
		F: 'iceandfire:dragonsteel_fire_ingot',
		L: 'iceandfire:dragonsteel_lightning_ingot',
		I: 'iceandfire:dragonsteel_ice_ingot'
	  }
	)
	
	
	event.remove({output: 'kubejs:almighty_cog'})
	event.shaped(
	  Item.of('kubejs:almighty_cog'), 
	  [
	    'LUL',
		'USU',
		'LUL'
	  ], 
	  {
		S: 'ae2:singularity',
		U: 'allthemodium:unobtainium_gear',
		L: 'sacred_logistics:luminite_ingot'
	  }
	)
	
	
	event.remove({output: 'sacred_logistics:meteorite_charm'})
	event.shaped(
	  Item.of('sacred_logistics:meteorite_charm'), 
	  [
	    'GMG',
		'MDM',
		'GMG'
	  ], 
	  {
		D: 'minecraft:diamond',
		G: 'minecraft:gold_ingot',
		M: 'sacred_logistics:meteorite_ingot'
	  }
	)
	
	
})
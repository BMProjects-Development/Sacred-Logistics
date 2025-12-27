ServerEvents.recipes(event => {


	event.remove({output: 'minecraft:stone_sword'})
	event.shaped(
	  Item.of('minecraft:stone_sword'), 
	  [
	    ' S ',
		' S ',
		' P '
	  ], 
	  {
		S: '#forge:stone',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:stone_pickaxe'})
	event.shaped(
	  Item.of('minecraft:stone_pickaxe'), 
	  [
	    'SSS',
		' P ',
		' P '
	  ], 
	  {
		S: '#forge:stone',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:stone_axe'})
	event.shaped(
	  Item.of('minecraft:stone_axe'), 
	  [
	    'SS ',
		'SP ',
		' P '
	  ], 
	  {
		S: '#forge:stone',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:stone_shovel'})
	event.shaped(
	  Item.of('minecraft:stone_shovel'), 
	  [
	    ' S ',
		' P ',
		' P '
	  ], 
	  {
		S: '#forge:stone',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:stone_hoe'})
	event.shaped(
	  Item.of('minecraft:stone_hoe'), 
	  [
	    'SS ',
		' P ',
		' P '
	  ], 
	  {
		S: '#forge:stone',
		P: '#forge:rods/wooden'
	  }
	)


	event.remove({output: 'minecraft:iron_sword'})
	event.shaped(
	  Item.of('minecraft:iron_sword'), 
	  [
	    ' I ',
		' I ',
		' P '
	  ], 
	  {
		I: '#forge:plates/iron',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:iron_pickaxe'})
	event.shaped(
	  Item.of('minecraft:iron_pickaxe'), 
	  [
	    'III',
		' P ',
		' P '
	  ], 
	  {
		I: '#forge:plates/iron',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:iron_axe'})
	event.shaped(
	  Item.of('minecraft:iron_axe'), 
	  [
	    'II ',
		'IP ',
		' P '
	  ], 
	  {
		I: '#forge:plates/iron',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:iron_shovel'})
	event.shaped(
	  Item.of('minecraft:iron_shovel'), 
	  [
	    ' I ',
		' P ',
		' P '
	  ], 
	  {
		I: '#forge:plates/iron',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:iron_hoe'})
	event.shaped(
	  Item.of('minecraft:iron_hoe'), 
	  [
	    'II ',
		' P ',
		' P '
	  ], 
	  {
		I: '#forge:plates/iron',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:iron_helmet'})
	event.shaped(
	  Item.of('minecraft:iron_helmet'), 
	  [
	    '   ',
		'III',
		'I I'
	  ], 
	  {
		I: '#forge:plates/iron'
	  }
	)
	
	
	event.remove({output: 'minecraft:iron_chestplate'})
	event.shaped(
	  Item.of('minecraft:iron_chestplate'), 
	  [
	    'I I',
		'III',
		'III'
	  ], 
	  {
		I: '#forge:plates/iron'
	  }
	)
	
	
	event.remove({output: 'minecraft:iron_leggings'})
	event.shaped(
	  Item.of('minecraft:iron_leggings'), 
	  [
	    'III',
		'I I',
		'I I'
	  ], 
	  {
		I: '#forge:plates/iron'
	  }
	)
	
	
	event.remove({output: 'minecraft:iron_boots'})
	event.shaped(
	  Item.of('minecraft:iron_boots'), 
	  [
	    '   ',
		'I I',
		'I I'
	  ], 
	  {
		I: '#forge:plates/iron'
	  }
	)
	
	
	event.remove({output: 'minecraft:golden_sword'})
	event.shaped(
	  Item.of('minecraft:golden_sword'), 
	  [
	    ' G ',
		' G ',
		' P '
	  ], 
	  {
		G: '#forge:plates/gold',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:golden_pickaxe'})
	event.shaped(
	  Item.of('minecraft:golden_pickaxe'), 
	  [
	    'GGG',
		' P ',
		' P '
	  ], 
	  {
		G: '#forge:plates/gold',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:golden_axe'})
	event.shaped(
	  Item.of('minecraft:golden_axe'), 
	  [
	    'GG ',
		'GP ',
		' P '
	  ], 
	  {
		G: '#forge:plates/gold',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:golden_shovel'})
	event.shaped(
	  Item.of('minecraft:golden_shovel'), 
	  [
	    ' G ',
		' P ',
		' P '
	  ], 
	  {
		G: '#forge:plates/gold',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:golden_hoe'})
	event.shaped(
	  Item.of('minecraft:golden_hoe'), 
	  [
	    'GG ',
		' P ',
		' P '
	  ], 
	  {
		G: '#forge:plates/gold',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:golden_helmet'})
	event.shaped(
	  Item.of('minecraft:golden_helmet'), 
	  [
	    '   ',
		'GGG',
		'G G'
	  ], 
	  {
		G: '#forge:plates/gold'
	  }
	)
	
	
	event.remove({output: 'minecraft:golden_chestplate'})
	event.shaped(
	  Item.of('minecraft:golden_chestplate'), 
	  [
	    'G G',
		'GGG',
		'GGG'
	  ], 
	  {
		G: '#forge:plates/gold'
	  }
	)
	
	
	event.remove({output: 'minecraft:golden_leggings'})
	event.shaped(
	  Item.of('minecraft:golden_leggings'), 
	  [
	    'GGG',
		'G G',
		'G G'
	  ], 
	  {
		G: '#forge:plates/gold'
	  }
	)
	
	
	event.remove({output: 'minecraft:golden_boots'})
	event.shaped(
	  Item.of('minecraft:golden_boots'), 
	  [
	    '   ',
		'G G',
		'G G'
	  ], 
	  {
		G: '#forge:plates/gold'
	  }
	)
	
	
	event.remove({output: 'minecraft:diamond_sword'})
	event.shaped(
	  Item.of('minecraft:diamond_sword'), 
	  [
	    ' D ',
		' D ',
		' P '
	  ], 
	  {
		D: '#forge:plates/diamond',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:diamond_pickaxe'})
	event.shaped(
	  Item.of('minecraft:diamond_pickaxe'), 
	  [
	    'DDD',
		' P ',
		' P '
	  ], 
	  {
		D: '#forge:plates/diamond',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:diamond_axe'})
	event.shaped(
	  Item.of('minecraft:diamond_axe'), 
	  [
	    'DD ',
		'DP ',
		' P '
	  ], 
	  {
		D: '#forge:plates/diamond',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:diamond_shovel'})
	event.shaped(
	  Item.of('minecraft:diamond_shovel'), 
	  [
	    ' D ',
		' P ',
		' P '
	  ], 
	  {
		D: '#forge:plates/diamond',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:diamond_hoe'})
	event.shaped(
	  Item.of('minecraft:diamond_hoe'), 
	  [
	    'DD ',
		' P ',
		' P '
	  ], 
	  {
		D: '#forge:plates/diamond',
		P: '#forge:rods/wooden'
	  }
	)
	
	
	event.remove({output: 'minecraft:diamond_helmet'})
	event.shaped(
	  Item.of('minecraft:diamond_helmet'), 
	  [
	    '   ',
		'DDD',
		'D D'
	  ], 
	  {
		D: '#forge:plates/diamond'
	  }
	)
	
	
	event.remove({output: 'minecraft:diamond_chestplate'})
	event.shaped(
	  Item.of('minecraft:diamond_chestplate'), 
	  [
	    'D D',
		'DDD',
		'DDD'
	  ], 
	  {
		D: '#forge:plates/diamond'
	  }
	)
	
	
	event.remove({output: 'minecraft:diamond_leggings'})
	event.shaped(
	  Item.of('minecraft:diamond_leggings'), 
	  [
	    'DDD',
		'D D',
		'D D'
	  ], 
	  {
		D: '#forge:plates/diamond'
	  }
	)
	
	
	event.remove({output: 'minecraft:diamond_boots'})
	event.shaped(
	  Item.of('minecraft:diamond_boots'), 
	  [
	    '   ',
		'D D',
		'D D'
	  ], 
	  {
		D: '#forge:plates/diamond'
	  }
	)
	
	
	event.remove({output: 'minecraft:chainmail_helmet'})
	event.shaped(
	  Item.of('minecraft:chainmail_helmet'), 
	  [
	    '   ',
		'CCC',
		'C C'
	  ], 
	  {
		C: 'byg:chain_plating'
	  }
	)
	
	
	event.remove({output: 'minecraft:chainmail_chestplate'})
	event.shaped(
	  Item.of('minecraft:chainmail_chestplate'), 
	  [
	    'C C',
		'CCC',
		'CCC'
	  ], 
	  {
		C: 'byg:chain_plating'
	  }
	)
	
	
	event.remove({output: 'minecraft:chainmail_leggings'})
	event.shaped(
	  Item.of('minecraft:chainmail_leggings'), 
	  [
	    'CCC',
		'C C',
		'C C'
	  ], 
	  {
		C: 'byg:chain_plating'
	  }
	)
	
	
	event.remove({output: 'minecraft:chainmail_boots'})
	event.shaped(
	  Item.of('minecraft:chainmail_boots'), 
	  [
	    '   ',
		'C C',
		'C C'
	  ], 
	  {
		C: 'byg:chain_plating'
	  }
	)
	
	
	event.remove({output: 'minecraft:smithing_table'})
	event.shaped(
	  Item.of('minecraft:smithing_table'), 
	  [
	    'SSS',
		'PCP',
		'PPP'
	  ], 
	  {
		S: 'assemblylinemachines:pure_steel_ingot',
		C: 'sacred_logistics:chlorophyte_ingot',
		P: '#minecraft:planks'
	  }
	)
	
	
})
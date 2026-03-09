ServerEvents.recipes(event => {


	event.remove({id: 'experienceobelisk:cognitive_alloy'})
	event.shaped(
	  Item.of('experienceobelisk:cognitive_alloy'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'sacred_logistics:meteorite_ingot',
		B: 'experienceobelisk:cognitive_amalgam'
	  }
	)

	
})
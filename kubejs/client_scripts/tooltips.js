ItemEvents.tooltip(event => {


  event.addAdvanced('artifacts:flippers', (item, advanced, text) => {	  
    if (!event.ctrl) {
      text.add(1, [Text.translate('tooltip.kubejs.short_description0').gray(), Text.translate('tooltip.kubejs.short_description1').gold(), Text.translate('tooltip.kubejs.short_description2').gray()])
    } else {
      text.add(1, Text.translate('tooltip.kubejs.flippers.description0').gray())
    }
  })
  
  
  event.addAdvanced('relics:spatial_sign', (item, advanced, text) => {	  
    if (!event.ctrl) {
      text.add(1, [Text.translate('tooltip.kubejs.short_description0').gray(), Text.translate('tooltip.kubejs.short_description1').gold(), Text.translate('tooltip.kubejs.short_description2').gray()])
    } else {
      text.add(1, Text.translate('tooltip.kubejs.spatial_sign.description0').gray())
    }
  })


})
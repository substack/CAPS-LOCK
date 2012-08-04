require('capslockscript')
  .ADDSIMPLETOKEN('ENGAGED', 'DISENGAGE', 'ENGAGE')
  .INIT(require('path').join(__dirname, './INDEX.CS'), [ 'exports' ], [ module.exports ])

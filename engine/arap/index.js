var ffi = require('ffi');
var ref = require('ref');
var _ = require('lodash');
var ArrayType = require('ref-array');
var StructType = require('ref-struct');

var arap = {}
arap.getDeformation = getDeformation

var lib = ffi.Library(__dirname + '/compute', {
  'getDeformation':   ['void', ['string', 'pointer']],
  'getMapping':   ['void', ['string', 'pointer']],
  // 'getLaplacian': ['void', ['string', 'pointer', 'pointer', 'pointer', 'pointer']],
});

var int = ref.types.int;
var double = ref.types.double;
var DoubleArray = ArrayType(double);
var Result = {};
Result.vertices = StructType({
  'positions': DoubleArray
})

var repl = require('repl');

function getDeformation (json) {
  console.log('Start getDeformation');
  var size = json.size
  var result = new Result.vertices({
    positions: new DoubleArray(3*size),
  });
  lib.getDeformation(JSON.stringify(json), result.ref());
  var  = new Array(n);
  for (var i=0; i<n; i++) {
    positions[i] = result.positions[i];
  }
  return { positions: positions }
}

module.exports = arap




let presets = {
	value: "item_3_old",

	transcodeMap() {
	    return transcodeMap = [
	      {"old_key": "item_1_old", "new_key": "item_1_new"},
	      {"old_key": "item_2_old", "new_key": "item_2_new"},  
	      {"old_key": "item_3_old", "new_key": "item_3_new"},
	      {"old_key": "item_4_old", "new_key": "item_4_new"},
	    ]
	},

	test( val, testArr ) {
		if ( val in testArr ) {
			console.log( "value already exists" );
		} else {
			console.log( "value not in array ");
		}
	}
}

//var checkValues = function( getMapping ) {
//	console.log( getMapping() );
//}

/*
const filtered = getMapping.reduce((acc, t) => {
    let { old_key, new_key } = t

    if (!(new_key in acc) || new_key == old_key) {
        acc[new_key] = t
    }

    return acc
}, {})
*/
var testArr = {}
testArr[ "item_2_new" ] = "item_2_new"

console.log( presets.transcodeMap() );
console.log( presets.value );
var x = presets.test( "item_2_new", testArr );

console.log( testArr )


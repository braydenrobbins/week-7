// var table = [
//     [1,2,3,4],
//     [1,2,3,4],
//     [1,2,3,4],
//     [1,2,3,4]
// ]

// for (var i = 0; i < table.length; i++) {
//     for (var j = 0; j < table[i].length; j++) {
//         console.log(table[i][j]);
//     }
// }

var tmp = {
    repeat3: function(x){
        for(var i = 0; i <= 3 ; i++) {
            x();
        }
    },

    hello: function(){
        console.log("Goodbye");
    }
}

function hello(){
    console.log("hello");
}

tmp.repeat3(tmp.hello);
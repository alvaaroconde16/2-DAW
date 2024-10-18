/*Asegúrate de que la función se llama tripleAndFilter.
    function tripleAndFilter(arr){
    		return arr.map(function(value){
        			return value * 3;
     			}).filter(function(value){
       			return value % 5 === 0;
      		})
    }
*/

var tripleAndFilter = (arr) => {
    return arr
    .map((value) => value * 3)
    .filter((value) => value % 5 === 0)
}
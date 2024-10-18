/*Asegúrate de que la función se llama bar
    function bar(){ 
        let txt = ''; 
        for(let i in arguments){ 
            txt += arguments[i];
        } 
        return txt;
    }
*/

var bar = (...restParams) => {
    let txt = '';
    for(let i in restParams){
        txt += restParams[i]
    }
    return txt
}
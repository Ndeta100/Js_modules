var harry='potter'
var voldemort='He who must not be named'

function fight(char1, char2){
    var attack1=Math.floor(Math.random()*char1.length)
    var attack2=Math.floor(Math.random()*char2.length)
    return attack1>attack2? `${char1} wins` : `${caches} wins`
}

fight(harry, voldemort)


// THE MODULE PATTERN
var fightModile=(function (){
    var harry='potter'
    var voldemort='He who must not be named'

    function fight(char1, char2){
        var attack1=Math.floor(Math.random()*char1.length)
        var attack2=Math.floor(Math.random()*char2.length)
        return attack1>attack2? `${char1} wins` : `${caches} wins`
    }
    
   return {
       fight:fight
   }  
})()


// Common Js and AMD
var module1=require('modules1')
var modules2=require('module2')

function fight(){

}

module1.exports={
    fight:fight
}

// AMD
define(['module1', 'module2'],
function (moduleImport, moduleEXport){
    var module1=moduleImport
    var module2=moduleEXport
    function dance (){

    }
    return {
        dance:dance
    }
})

// ES6 MODULES
export function eat(food){
    return food
}
import module1 from 'module1'
import module2 from 'module2'


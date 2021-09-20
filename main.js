/* 
A Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. 
Gebruik de .push method
*/
const addTheWordCool = function(array){
    // add your code
    array.push('Cool');
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

/* B Schrijf een JavaScript functie die het aantal elementen in een array retourneert.*/
const amountOfElementsInArray = function(array) {
    return array.length;
}
// of: const amountOfElementsInArray = array => array.length;

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
// 3

/* C Schrijf een JavaScript functie om het éérste element uit een array te retourneren. 
   PS: Bij welk cijfer begint een array ook alweer met tellen?
*/
const selectBelgiumFromBenelux = array => array[0];
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie"

const selectBelgiumFromBeneluxFind = array => {
    return array.find(item => item === 'Belgie');
}
console.log(selectBelgiumFromBeneluxFind(["Belgie", "Nederland", "Luxemburg"]));


/* D Schrijf een JavaScript functie om het laatste element uit een array te retourneren. */
const lastElementInArray = array => array[array.length - 1];
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

/*
E Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . 
Gebruik .slice én de alternatieve optie .splice. 
Wat is het verschil tussen deze functies? Hint: mutability.
*/

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
// This leaves the original array (presidents) in tact  
const impeachTrumpSlice = function(array) {
    return array.slice(1, 4); // puts index [1,2,3] into new array (because: start 1, end 4, NOT INCLUDING END)
}
// This alters (mutates) original array
const impeachTrumpSplice = function(array) {
    return array.splice(1,3); // removes index [1,2,3] from presidents and returns new arra
}

console.log(impeachTrumpSlice(presidents));   // ["Obama", "Bush", "Clinton"] .slice return
console.log(presidents);                      // ["Trump", "Obama", "Bush", "Clinton"] original array after slice
console.log(impeachTrumpSplice(presidents));  // ["Obama", "Bush", "Clinton"] .splice return
console.log(presidents);                      // ["Trump"] original array after splice, it has been mutated!


/*
F Write a simple JavaScript program to join all elements of the following array into a string (with spaces). 
ps: deze opdracht hebben we in het Engels gelaten,
omdat er een dikke tip in zit over welke array method je gaat gebruiken.
*/

const stringsTogether = array => {
    return array.join(' ');
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

/*
G Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']
*/
const combineArrays = (array1, array2) => {
    return array1.concat(array2); // concatenate arrays
}
console.log(combineArrays([1,2,3], [4,5,6])); // resultaat: [1,2,3,4,5,6]

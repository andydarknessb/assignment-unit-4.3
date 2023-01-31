console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []

function addItem(item) {
    basket.push(item);
    console.log(basket);
    return true
}

let result = addItem('pizza')
addItem('hamburger')
addItem('steak')
addItem('oranges')

console.log(result);


function listItems() {
    for(item in basket) {   
        console.log(item) ;
}
}

console.log(`Basket is ${basket}`);
console.log( addItem('apples'));
console.log(`Basket is now ${basket}`);

function empty() {
    basket = " " ;
}





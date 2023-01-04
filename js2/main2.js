// let myLists = {
// homeTasks: [],
// workTasks: [],
// shoppingList: [],
// createItem: function() {},
// addItem: function() {},

// };

// let homeForm = document.querySelector('#homeTasks .form');



let homeTasksList = new List ('homeTasks', '#homeTasks');
let workTasksList = new List ('workTasks', '#workTasks');
let shoppingList = new List ('shoppingList', '#shoppingList');

homeTasksList.init();
workTasksList.init();
shoppingList.init();


// ---------------localStorage sessionStorage-----------------------



function checkStotage (type) {
try {
var storage = window[type];
let x = 'storage test';
storage.setItem(x, x), storage.removeItem(x);
// console.log('working');
return true;
}catch (error) {
console.error(error);
return false;
}
}
// if(checkStotage('sessionStorage')) {

// } else {}


let counter = new Counter(document.querySelector('[name="counter_num"]').value);
counter.init();




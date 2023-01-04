class Counter {
constructor(num) {
    this.num = num
};

init () {
document.addEventListener('click', () => {
if(event.target.id === 'startCount'){
this.startCount();
}
if(event.target.id === 'pauseCount'){
this.pauseCount();
}
if(event.target.id === 'resetCount'){
this.resetCount();
}
});
}

startCount() {
    console.log(this.num);
let output = document.getElementById('counter_output');
let current = this.num;
let interval = setInterval(function () {
output.innerText = current--;
}, 1000);
}
resetCount() {}
pauseCount() {}

}
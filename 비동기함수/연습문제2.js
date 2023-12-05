

let promise = new Promise(function(resolve, reject){
    resolve();
});

promise
.then(function() {
    console.log('Success1');
})
.then(function() {
    console.log('Success2');
})
.catch(function() {
    console.log('Error1');
})
const mySet = new Set();
console.log('The set looks like :',mySet);

mySet.add('this');
mySet.add('my Name');
mySet.add('this');
mySet.add('that');
mySet.add('that');
mySet.add('rehan');
mySet.add('abid');
mySet.add('aish');

console.log('The set looks  like this now',mySet);


mySet.delete('that');

for(let item of mySet){
    console.log('Item is :',item);
}


mySet.forEach((item)=>{
    console.log('item is :',item);
})
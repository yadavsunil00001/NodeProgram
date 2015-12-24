var people=[
{
	name:'sunil',
	age:21
},
{
	name:'rakesh',
	age:45
},
{
	name:'sandeep',
	age:18
}
];

var result=map(people,function (person) {
	// body...
	return person.age;
})

console.log(people);
console.log(result);


function map(array,action){

   var newarray=[];
	for (var i = 0; i <array.length; i++) {
		var item=array[i];
		var result=action(item);
		newarray[i]=result;
	}
	return newarray;

}
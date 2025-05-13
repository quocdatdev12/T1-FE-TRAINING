function run(a) {
	let phandu = a % 5;
	console.log('remainder of a divided by 5 is ' + phandu);
	
	let phandu1 = a % 3;
	console.log('remainder of a divided by 3 is ' + phandu1);
	
	let phandu2 = a % 2;
	console.log('remainder of a divided by 2 is ' + phandu2);
}
run(18);


function run1(a, b) {
	console.log("a == b is " + (a == b ? true : false) );
    console.log("a !== b is " + (a !== b ? true : false) ); 
    console.log("a > b is " + (a > b ? true : false) ); 
    console.log("a < b is " + (a < b ? true : false) );
    console.log("b >= a is " + (b >= a ? true : false) ); 
    console.log("b <= a is " + (b <= a ? true : false) );  
}
run1(10,11)

function run2(a, b) {
	console.log("((a%2 == 0) && (b%2 == 0)) is " + (((a%2 == 0) && (b%2 == 0)) ? true : false) ); 
    console.log("((a%2 == 0) || (b%2 == 0)) is " + (((a%2 == 0) || (b%2 == 0)) ? true : false) );
    console.log("!(a > b) is " + !(a > b) ? true : false);
}
run2(20,11);

function run3(a) {
	a *=2; 
	console.log(a);

	a +=9; 
	console.log(a);

	a -=4;
	console.log(a);

	a /=3;
	console.log(a);

	a %=3;
	console.log(a);
}
run3(5);
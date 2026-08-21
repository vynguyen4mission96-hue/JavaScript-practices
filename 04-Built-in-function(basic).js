//read more: List of JavaScript Functions


/*
Hàm xây dựng sẵn (build-in function)
Giới thiệu một số hàn built-in:
1. alert
2. console
3. confirm
4. prompt
5. set timeout
6. set interval

*/
//note: function will run one by one (top to bottom of the code below)

//console
//The console object provides access to the browser's debugging console.
var fullName = 'NguyenThanh Vy';
console.log(fullName)//print notification in console in web

console.error(fullName)// errror

//confirm
/**
* The confirm() method displays a dialog box with a message, an OK button, and a Cancel button.
* The confirm() method returns true if the user clicked "OK", otherwise false.
*
*/
confirm('xac nhan ban duoc phep truy cap');

//promt
/**
* The prompt() method displays a dialog box that prompts the user for input.
* The prompt() method returns the input value if the user clicks "OK", otherwise it returns null.
*/
prompt('Nhap "du tuoi" de tiep tuc')

//set timeout// only once
/**
* The setTimeout() method calls a function after a number of milliseconds.
* 1 second = 1000 milliseconds.
*/
setTimeout(function(){
alert('test')// after 1s, notification "test" will be displayed
},1000)//1000ms=1s

//set interval. i.e: each 1s function will run again
/**
* The setInterval() method calls a function at specified intervals (in milliseconds).
* The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
* 1 second = 1000 milliseconds.
*/
setInterval (function(){
console.log('day la log' + Math.random())
},1000)//1000ms=1s

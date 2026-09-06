/**
 * Làm việc với Array
 * 1.To string
 * 2.Join
 * 3.Pop
 * 4.Push
 * 5.Shift
 * 6.Unshift
 * 7.Splicing 
 * 8.Contact
 * 9.Slicing 
 */
//kiến thức mở rộng: 
// google keyword= JavaScript Array method

var languages =[
    "Javascript",
    "PHP",
    "Ruby"];

//1.To string- araay to string
//output: giữa các chuỗi vẫn là dấu phẩy,
//Javascript,PHP,Ruby
console.log(languages.toString())

//2.Join
//output: giữa các chuỗi là dấu được truyền vào
//JavascriptPHPRuby
console.log(languages.join(''))
//Javascript-PHP-Ruby
console.log(languages.join('-'))
//Javascript, PHP, Ruby
console.log(languages.join(', '))

//4.Push
//thêm 1 hoặc nhiều phần tử ào cuối mảng
// in ra "5" vì 3+2=5
console.log(languages.push('hello', '123'))
//push xong thì hiện lần nữa để xem kết quả
//['Javascript', 'PHP', 'Ruby', 'hello', '123']
console.log("sau khi push:"+languages)

//6.Unshift
//thêm 1 hoặc nhiều phần tử vào ở đầu mảng
console.log(languages.unshift('abc', 'alo'))
console.log("sau khi unshift:"+languages)

//5.Shift
//xóa phần tử ở đầu mảng, output= phần tử đầu mảng
console.log("sau khi Shift:" +languages.shift())

//mảng lúc này:abc,alo,Javascript,PHP,Ruby,hello,123

//7.Splicing 
//slice(start, end)- bắt đầu từ đầu, xóa bao nhiêu phần tử
languages.splice(1, 3)
console.log("splice(1,3): "+languages)
//splice(1,3): alo,hello,123
languages.splice(1, 0)
console.log("splice(1,0): "+languages)
//splice(vị trí con trỏ, số lượng element muốn xóa, element muốn chèn vào)
languages.splice(1, 0, 'dark')
console.log("splice(1,0,'dark'): "+languages)

//8.Contact- hợp nhất
var languages2 =['1,2,3']
console.log('concat Array2 và Array1: '+languages2.concat(languages))

//9.Slicing (cắt)
//slice(start, end)- start lấy, end không lấy (chỉ lấy tới[1])
console.log(languages.slice(0,2))

//3.Pop
//xóa phần tự cuối mảng và trả về phần tử đã xóa
// Araay=...,alo,dark,hello,123
console.log("Pop:" +languages.pop())
//xóa thêm vài lần nữa
console.log("Pop:" +languages.pop())
console.log("Pop:" +languages.pop())
console.log("Pop:" +languages.pop())
//xóa hết thì kết quả= undifined




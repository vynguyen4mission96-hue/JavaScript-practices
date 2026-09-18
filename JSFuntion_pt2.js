/**
 * một số điều cần biết về function
 * 
 * 1/khi function đặt trùng tên?
 * 2/khai báo biến trong hàm?
 * 3/định nghĩa hàm trong hàm?
 * 
 * 
 */

//1/khi function đặt trùng tên?
function showMassage(){
    console.log('massage 1')
}

function showMassage(){
    console.log('massage 2')
}

//gọi function
//'massage 2' sẽ được in ra vì nó ghi đè
//không xảy ra trong thực tế
//chỉ để hiểu
showMassage()

//2/khai báo biến trong hàm?
function showMassage2(){
    var fullName = 'Vy Nguyen'
    console.log(fullName)
}
showMassage2()

//3/định nghĩa hàm trong hàm?
function showMassage3(){
    function showMassage4(){
    var fullName = 'Vy Nguyen abc'
    console.log(fullName)
}   // tính private- nó nằm trong hàm
    showMassage4()
}
showMassage3()



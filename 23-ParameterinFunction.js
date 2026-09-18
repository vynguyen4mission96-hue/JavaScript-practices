/**
 * Tham số hàm - Javascript cơ bản
 * 
 * -Parameter (Tham số): Biến được khai báo trong phần định nghĩa của hàm.
 * 
 * -Argument (Đối số): Giá trị thực tế được truyền vào hàm khi gọi hàm.
 * 
 * -Variable: biến là một đại diện cho một phân vùng bộ nhớ nhất định, 
 * giúp lưu trữ các giá trị cần thiết. Việc gọi ra một biến cũng tương đương với việc ta lấy ra giá trị của một vùng bộ nhớ nào đó.
 * 
 * -Local variable: biến cục bộ là biến chỉ có thể được sử dụng nội bộ bên 
 * trong một khối lệnh hay một hàm
 * 
 * -Global variable: biến toàn cục là biến mà có thể được sử dụng ở bất kì vị trí nào 
 * bên trong chương trình.
 * 
 * -Constant: hằng số là một giá trị được khởi tạo một lần trong 
 * chương trình và là bất biến (không thể thay đổi)
 * 
 * 1.Tham số?
 * -Định nghĩa?
 * -kiểu dữ liệu?
 * -tính private?
 * -1 tham số
 * -nhiều tham số
 * 
 * 2.Truyền tham số?
 * -1tham số
 * -nhiều tham số
 * 
 * 3.Argument?
 * -Đối tượng Arguments
 * -giới thiệu vòng for of
 * 
 * trong javascript có dấu ; cuối câu lệnh (statement) hay không 
 * cũng không sao
 * trừ khi viết nang hàng nhau mới cần ;
 * 
 */
    //Parameter
    //cách 1:
    function writelog(){
        console.log('cách: Đây là 1 dòng log')
    }
    writelog()

    //cách 2: massage là tham số
    //tính private
    function writelog2(massage, massage2){
        console.log(massage)
        console.log(massage2)
    }
    // 'cách 2: test massage' là đối số
    //kiểu dữ liệu: không giới hạn
    writelog2('cách 2: test massage','test2')

    //if
    function writelog3(massage3, massage4){
       
        if (massage4){
        console.log(massage4)
        }
    }
    //đoạn này phải nằm ngoài hàm
     writelog3('log 3','log 4')

     //Argument
     //'1,2,3,4,abc, test' là tham số
     //tham số 
     console.log('1,2,3,4,abc, test')

     function writelog4(){
        console.log(arguments)
     }
     writelog4('1','2','3','4','abc', 'test', 'hihi', 'haha', 'aa', 'bb')

     //vòng for of
     function writelog5(){
        //nó chạy hết phần tử trong array thì dừng
        for(var param of arguments){
            //mỗi lần chạy 1 vòng thì in lần lượt log ra
            console.log(param)

        }
     }
     writelog5('1','2','hihi', 'haha', 'aa', 'bb')

     function writelog6(){
        //đầu tiên khai báo chuổi rỗng
        var myString='';
         for(var param of arguments){
            //mỗi vòng sẽ lấy param nối lại 
            // với nhau bằng dấu - thành 1 chuỗi
            //${param}: Đây là cú pháp nhúng biến (String Interpolation). 
            // JavaScript sẽ tự động lấy giá trị của biến param 
            // và chuyển thành chuỗi để đưa vào vị trí này.
            myString += `${param}-`
         }
         console.log(myString)

     }
     writelog6('1','2',' abc12345','hihi', 'haha', 'aa', 'bb')

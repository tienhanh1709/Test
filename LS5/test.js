//a= 10, b = 5, c = ‘1’
// a + b = 15
// a - c = 9
// a + b + c = 151
// a + c + b = 1015
// (a + b) % 3 = 5

// a * b > 50 → False
// a ** b > 100 → true 
// a - (b++) == 5 → true
// a - (++b) == 5 → false


// isTall = true, isMuscle = false, isHandsome = true
// Hãy cho biết kết quả của các biểu thức sau:
// isTall && isMuscle → false
// !isHandsome → false
// !isTall || !isMuscle → true
// isTall || !(isMuscle && isHandsome) → true
// isMuscle && !(isTall || isHandsome) → false


// Hãy viết chương trình nhập vào một chuỗi s. 
// Nếu chuỗi s có độ dài >= 8, in ra màn hình console “Chuỗi này ok”. 
// Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.

// function enterString(string){
//     if(string.length >=8){
//         return 'Chưỗi này ok'
//     }else{
//         return 'Ngắn quá, dài thêm tí nữa'
//     }
// }
// console.log(enterString('dgdvdvdc'));

// 1. Hãy viết chương trình nhập vào một số a. 
// Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”. 
// Nếu a >= 16, in ra “Đợi thêm ít năm nữa”. 
// Ngược lại, in ra “Trẻ con không được ăn thịt chó”.
// function enterAge(age){
//     if(age >= 18){
//         return 'Đủ 18 thì quẩy tiếp'
//     }else if(age >=16){
//         return 'Đợi thêm ít năm nữa'
//     }else{
//         return 'Trẻ con không được ăn thịt chó'
//     }
// }
// console.log(enterAge(20));


// Hãy tính tổng các số từ 1 đến 50.
// let sum = 0;
// for(let i=0 ; i<=50 ; i++) {
//     sum += i;    
// }
// console.log(sum);

//Hãy tính tổng các số chẵn từ -10 đến 50.
// let sum = 0;
// for(let i = -10 ; i<=50 ; i++) {
//     if(i % 2 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);

//Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// for (let i = -100; i <= 100; i++) {
//     if(i % 9 == 0){
//         console.log(i);
//     }
// }
// Hãy dùng while để in ra dãy số từ 1 đến 200.
// let i = 1;
// while (i <= 200){
//     console.log(i);
//     i++;
// }
// Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
// function enter(string,number){
//     while(string.length < number){
//         string += 'a';
//     }
//     return string;
// }
//  console.log(enter('ss',3));
//Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và 
//in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
// function number(x,y){
//         while (x <= y){
//             console.log(x,y);
//             x++;
//             y--;
//         }
// }    
// console.log(number(2,8));







//Example
//1.In ra dãy số từ 1 đến 500.
// for (let i=1; i<=500; i++){
//     console.log(i);
// }

//2.In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for (let i=1; i<= 300; i++){
//     if(i % 2 == 0 && i % 3 == 0){
//         console.log(i);
//     }
// }

// 3.Tính tổng các số chẵn trong đoạn [-30, 50].
// let sum = 0;
// for (let i=-30; i<=50; i++) {
//     if(i % 2 == 0){
//         sum+= i;
//     }
// }
// console.log(sum);

//4.Nhập vào số n. Tính giai thừa của số n.
// function factorial(n){
//     if(n == 0){
//         return 1;
//     }else if(n < 0){
//         return false;
//     }else if(n > 0){
//         let sum = n * factorial(n-1);
//         return sum;
//     }
// }
// console.log(factorial(5));
//5.Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x. 
// function number(a,b,x){
//     if(a >= b){
//         return false;
//     }else if(a < b){
//         for(let i = a; i <= b; i++){
//             if(i % x == 0){
//                 return i;
//             }
//         }
//     }
// }
// console.log(number(5,20,9));
//6.Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau:
// function  expression(n){
//     let sum = 0;
//     if(n < 2){
//         return false;
//     }else if(n >= 2){
//         for(let i = 1; i <= n; i++){
//             sum += 1/(i*(i+1));
//         }
//         return sum;
//     }
// }
// console.log(expression(3));
//7.Nhập vào số n. Hãy in ra số ước của n.
// function uoc_so(n){
//     for(let i = 1; i<= n; i++){
//         if(n % i === 0){
//             console.log(i);
//         }

//     }
// }
// console.log(uoc_so(60));
// 8.Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
// function SNT(n){
//     if(n<=0){
//         return false;
//     }else if(n === 1){
//         return '1 Không phải số nguyên tố';
//     }else if(n === 2){
//         return '2 là số nguyên tố';
//     }else if(n >= 2){
//         if(n % 2 !== 0){
//             return n + ' là số nguyên tố';
//         }else if(n % 2 === 0){
//             return n + ' Không phải số nguyên tố'
//         }
//     }
    
// }
// console.log(SNT(3));
// 9.Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài 
// chuỗi s >= l.
// function enter(string,number){
//     while(string.length < number){
//         string += 'a';
//     }
//     return string;
// }
// console.log(enter('ss',3));
// 10.Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n.

// function UCLN(m,n){

//         let value = 1;
//         for(let i = 1; i <= m && i <=n ; i++){
//             if(m % i===0 && n % i=== 0){
//                 value = i;
//             }
//         }
//         return value;
//     }

// console.log(UCLN(30,18));
// 11.Nhập vào 2 số m, n (m > 0, n > 0). Tìm bội chung nhỏ nhất của m, n.
// function BCNN(m,n){

//         let value = 1;
//         for(let i = 1; i <=20; i++){
//             for(let j = 1; j <= 20; j++){
//                 if(m*i== n*j){
//                     value = m*i;
//                     return value;
//                 }
//             }
//         }
//     }
// console.log(BCNN(7,13));


// 12. Trò chơi đoán số:
// Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.
// function game(n){
//     let i= 5;
//         if(i <=5){
//             correct = Math.floor(Math.random() * 20);
//                 console.log(correct);      
//                 if(correct === n){
//                     i--;
//                     return 'Đoán đúng';
//                 }else if(correct !== n){
//                     i--;
//                     return 'Đoán sai';
//                 }
//             }else if(i == 0){
//                 correct = Math.floor(Math.random() * 20);
//                 console.log(correct);
//                 if(correct === n){
//                     i--;
//                     return 'Đoán đúng';
//                 }else if(correct !== n){
//                     i--;
//                     return 'Bạn đã thua cuộc';   
                    
//                 }         
//             }
// }                     
// console.log(game(14));                              
// 13. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
// function bang_cuu_chuong(n){
//     if(2<=n && n<=10){
//         for(let i=1 ; i<= 10; i++){
//             console.log(n + " x " + i + " = " + n*i);
//         }
//     }
// }
// console.log(bang_cuu_chuong(3));
// 14. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
// function hinh_vuong(n) {
//     if (n >= 2) {
//         for (let i = 1; i <= n; i++) {
//             for (let j = 1; j <= n; j++) {
//                 console.log('*');
//             }
//             console.log('\n');
//         }
//     }
// }
// console.log(hinh_vuong(5));
// 15. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
// function hinh_chu_nhat(m,n) {
//     if (n >= 2) {
//         for (let i = 1; i <= n; i++) {
//             for (let j = 1; j <= m; j++) {
//                 console.log('*');
//             }
//             console.log('\n');
//         }
//     }
// }
// console.log(hinh_chu_nhat(4,3));
// 16. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
// function hinh_tam_giac(n) {
//     if (n >= 3) {
//         for (let i = 1; i <= n; i++) {
//             for (let j = 1; j <= i; j++) {
//                 console.log('*');
//             }
//             console.log('\n');
//         }
//     }
// }
// console.log(hinh_tam_giac(4));
// Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả:
// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// Nếu BMI >= 25 → in ra “Béo phì”

// function BMI(w,h){
//     let bmi = w / (h/100)**2;
//     console.log(bmi);
//     if(bmi <18.5){
//         return 'Nhẹ cân';
//     }else if(18.5 <= bmi && bmi < 23){
//         return 'Bình thường';
//     }else if(23 <= bmi && bmi < 25){
//         return 'Thừa cân';
//     }else if(bmi > 25){
//         return 'Béo phì';
//     }
// }
// console.log(BMI(56 , 128));

// Bài 1: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0]. Hãy lọc ra một mảng mới chứa 2 
// phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )

// let arr1 = [1,2,4,5,6];
// let arr2 = [1, 6, 8, 9, 0];

// const result = arr1.filter(element =>{
//     for (let i of arr2) {
//      if (element === i) {
//         return element;
//      }   
//     }
// });
// console.log(result);
//Bài 2:  Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
// let arr = [1,54,6,7];
// const result = arr.map(e => {
//     return e + 5;
// });
// console.log(result);
// Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96].
// Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
let m = [1,2,4,5,6,7]; 
let n = [3,5,675,8,96];
let p = [1, 8,10,96,7];
function map_arr(m,n){
    let sum = m.concat(n);
    let new_arrm = sum.map(e => {
        for(let i of p){
            return e !== i;
        }
    });
    return new_arrm;
}
console.log(map_arr(m,n));
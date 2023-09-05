import users from './module/users.js';
import posts from './module/posts.js';
// 1. Xây dựng chức năng đăng nhập
// Nhập vào email, password từ bàn phím. Nếu không nhập đủ thông tin → In ra “Hãy nhập đầy đủ thông tin”. 
// Tìm trong dữ liệu users có user thỏa mãn email, password.
// Nếu có user, in ra màn hình “Xin chào” + <tên đầy đủ của user đó>
// Nếu không có user, in ra màn hình “Thông tin tài khoản không chính xác”

let email_select = document.getElementById('email_ipt');
let pass_select = document.getElementById('pass_ipt');
let login_action = document.getElementById('btn_login');

login_action.onclick = () => {
    let email = email_select.value;
    let pass = pass_select.value;
    if(email === '' && pass === '') {
        alert('Hãy nhập đầy đủ thông tin');
    }else{
        for(let user of users){
            if(email === user.email && pass === user.password){
                alert(`Xin chào ${user.first_name} ${user.last_name}`);
            }else if(email !== user.email && pass !== user.password){
                alert('Thông tin tài khoản không chính xác');
                break;
            }
        }
    }
    email_select.value = '';
    pass_select.value = '';
};

// 2. Xây dựng chức năng đăng ký
// Nhập vào first_name, last_name, email, password từ bàn phím. Nếu không nhập đủ thông tin
//  → In ra “Hãy nhập đầy đủ thông tin”. 
// Tìm trong dữ liệu users có user có email đã nhập.
// Nếu có user, in ra màn hình “Email này đã có tài khoản”.
// Nếu không có user, thêm vào dữ liệu user những thông tin đã nhập. 
// Id của user mới là số tự tăng và không trùng với user khác.

let first_name = document.getElementById('first_register');
let last_name = document.getElementById('last_register');
let email_new = document.getElementById('email_register');
let pass_new = document.getElementById('pass_register');
let register_action = document.getElementById('btn_register');

register_action.onclick = () => {
    let first_value = first_name.value;
    let last_value = last_name.value;
    let email_value = email_new.value;
    let pass_value = pass_new.value;
    if(first_value === '' || last_value === '' || email_value === '' || pass_value === '') {
        alert('Hãy nhập đầy đủ thông tin');
    }else{
        let new_user ={};
        let flag = true;
        for(let user_exit of users) {
            if(email_value === user_exit.email){
                flag = false;
            }
        }        
        if (flag === false){
            alert('Email này đã có tài khoản');
        }else{
            new_user ={
                "id": users.length + 1,
                "first_name": first_value,
                "last_name": last_value,
                "email": email_value,
                "password": pass_value
            };
            users.push(new_user);
        }
        console.log(users);
    }
};

// 3. Xây dựng chức năng xem danh sách users
// Nhập vào keyword. Hãy in ra những users có họ và tên hoặc email chứa keyword. Mỗi users hiển thị
//  id, họ và tên, email.
// Nếu keyword trống → In ra toàn bộ users
let search_select = document.getElementById('search_ipt');
let search_action = document.getElementById('search_btn');

search_action.onclick = () => {
    let string = ``;
    let search_value = search_select.value;
    for (let user_search of users){
        
            if((user_search.first_name + user_search.last_name).toLowerCase().includes(search_value) === true || user_search.email.toLowerCase().includes(search_value) === true){
                const listUsers= document.getElementById('data');
                const new_users =
                 `
                 <tr>
                 <th scope='row'>${user_search.id}</th>
                 <td>${user_search.first_name + ' '+ user_search.last_name}</td>
                 <td>${user_search.email}</td>
                <tr>
                `;
                string += new_users;
                listUsers.innerHTML = string;
            }
    }
}



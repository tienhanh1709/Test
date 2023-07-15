
const storage = {
  name: 'Fake Storage',
  address : 'HN',
  owner : 'Chinh Do',
  items : [
    {id : 1, name : 'Product 1', category :'Furniture', price : 20},
    {id : 2, name : 'Product 2', category :'Device', price : 110},
    {id : 3, name : 'Product 3', category :'Cloth', price : 2},
  ],  
};
function callback(){
    for(let key in storage) {
        if(key === 'items' && Array.isArray(storage[key]) === true) {
            for(let i = 0; i < storage[key].length; i++) {
                    document.writeln('<br />' + key + ': ' + '<br />');     
                for(let value in storage[key][i]) {
                    document.writeln( value + ': ' + storage[key][i][value] +'<br />');
                }
            }
        }else{
            document.writeln(key + ': ' + storage[key] + '<br>');
        }
    }
}
console.log(callback());
function getNum(){
    let num = Number(document.getElementById("number").value);
    Ex_5(num);
}
//  let num = Number(prompt('Nhập thao tác : \n 1. Sửa thông tin kho hàng\n 2. Tạo mặt hàng trong kho \n 3. Tìm kiếm mặt hàng \n 4. Xóa mặt hàng'));
function Ex_5(num){
    switch(num) {
        case 1:
            let name_storage = prompt('Nhập tên mới');
            let address_storage = prompt('Nhập địa chỉ  mới');
            let owner_storage = prompt('Nhập tên người sở hữu mới');                 
            update_storage(name_storage, address_storage, owner_storage);
            break;
        case 2:
            let id_item = prompt('Nhập id cần sửa');
            create_storage(id_item);
            break;
        case 3:
            search_storage();
            break;
        case 4:
            delete_storage();
            break;
    }
}
function update_storage(name_storage, address_storage, owner_storage){
   if(name_storage !== ''){
    storage.name = name_storage;
   }
   if(address_storage !== ''){
    storage.address = address_storage;
   }
   if(owner_storage !== ''){
    storage.owner = owner_storage;
   }
   callback();
};
function create_storage(id_item){
    
    for(let key in storage){
        if(key === 'items' && Array.isArray(storage[key]) === true) {
            for(let i=0;i< storage[key].length ; i++){
                for(let search_id in storage[key][i]){
                    if(storage[key][i][search_id].id === id_item){
                        console.log(storage[key][i][search_id]);
                    }
                }
            }
        }
    }
};
function search_storage(){

};
function delete_storage(){

};
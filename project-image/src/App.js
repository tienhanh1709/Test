
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Layouts from './layouts/index';
import UserDetail from './pages/UserDetail/UserDetail';
import ImageDetail from './pages/ImageDetail/ImageDetail';
import Homepage from './pages/Homepage/Homepage';
import Category from './pages/Category/Category';
import SignIn from './pages/SignIn/SignIn';
function App() {
  const images = [
    {
      link : 'https://cdn.sanity.io/images/n9brqo32/production/62037184f27fc9c8695dc73ded42371e082c29fa-3078x4496.jpg',
      nameImage: 'Iamge_1',
      category: 'food',
      author: 
      {
        name: 'A',
      },
      id : 1,
      linkExternal: '',
    },
    {
      link : 'https://picsum.photos/300/300?image=206',
      nameImage: 'Iamge_2',
      category: 'sports',
      author: 
      {
        name: 'B',
      },
      id : 2,
      linkExternal: '',
    },
    {
      link : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZ1f1JcGVTVbhLJewX-24zWuvFvAnBM7qxA&usqp=CAU',
      nameImage: 'Iamge_3',
      category: 'sports',
      author: 
      {
        name: 'C',
      },
      id : 3,
      linkExternal: '',
    },
    {
      
      link : 'https://cdn.sanity.io/images/n9brqo32/production/449dac07df3601c95ad9433ec026fa5cd1578ed6-1000x1777.png',
      nameImage: 'Iamge_4',
      category: 'car',
      author: 
      {
        name: 'D',
      },
      id : 4,
      linkExternal: '',
    },
    {
      link : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_P3z6mq60lUDnN6iVJ9YENrp2Ur424qIww&usqp=CAU',
      nameImage: 'Iamge_5',
      category: 'car',
      author: 
      {
        name: 'E',
      },
      id : 5,
      linkExternal: '',
    }
	];
  return (
   
    <Layouts>
			<Routes>
				<Route path='/' element={<Homepage images ={images} />} />
				<Route path='/category/:categoryName'  element={<Category images ={images}/>} />
				<Route path='/image-detail/:idImage' element={<ImageDetail images ={images}/>} />
				<Route path='/user-profile/:idUser' element={<UserDetail />} />
				<Route path='/sign-in' element={<SignIn />} />
			</Routes>
		</Layouts>
   
  );
}

export default App;

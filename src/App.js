import './App.css';
import Home from './component/Home';
import Images from './component/Images';
import Layout from './component/Layout';
import NotFound from './component/404';
import Login from './component/Login';
import Profile from './component/Profile';
import Protected from './Protected';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './component/Post';
import Product from './component/Product';
import Cart from './component/Cart';

// const router = createBrowserRouter(
//   [
//     {path:'/',
//       element: <Layout> <Home/></Layout> 
//     },
//     {
//       path:'/images',
//       element:<Layout> <Images/> </Layout> 
//     },
//     {
//       path:'*',
//       element:<Layout> <NotFound/> </Layout>
//     },
//     {
//       path:'/login',
//       element:<Layout> <Login/> </Layout>
//     },
//     {
//       path:'/profile',
//       element:<Layout> <Profile/> </Layout>
//     }

//   ]
// )



function App() {
 
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout><Home/></Layout>} />
    <Route path="*" element={<Layout><NotFound/></Layout>} />
    <Route path="/login" element={<Layout><Login/></Layout>} />
    <Route element={<Protected/>}>
    <Route path="/profile" element={<Layout><Profile/></Layout>} />
    <Route path="/images" element={<Layout><Images/></Layout>} />
    <Route path='/post' element={<Layout> <Post/> </Layout>} />
    <Route path='/cart' element={<Layout> <Cart/> </Layout>} />
    </Route>
    <Route path='/product' element={<Layout> <Product/> </Layout>} />

  </Routes>
  </BrowserRouter>
  </>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WareHouseHome from './Pages/Home/WareHouseHome/WareHouseHome';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddItem from './Pages/AddItem/AddItem';
import MyItems from './Pages/MyItems/MyItems';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<WareHouseHome></WareHouseHome>}></Route>
        <Route path='/inventory/:id' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

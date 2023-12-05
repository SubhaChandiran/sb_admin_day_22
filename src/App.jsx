import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Edit from "./components/Edit"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigate } from "react-router-dom"
import NestedExample from "./components/NestedExample"
import Receipts from "./components/NestedExample/Receipts"
import Accounts from "./components/NestedExample/Accounts"
import Products from "./components/NestedExample/Products"
import Staff from "./components/NestedExample/Staff"
import UseRef from "./components/Hooks/UseRef"

function App() {
  let [data,setData] = useState([
    {
      name:"Ajith",
      username:"ajith123",
      email:"ajith@gmail.com",
      mobile:"1234567890",
      batch:"B100",
    },
    {
      name:"Kumar",
      username:"kum2710",
      email:"kumar@gmail.com",
      mobile:"0987654310",
      batch:"B101",
    }
  ])
  return <>
    <div id='wrapper'>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
            <Route path='dashboard' element={<Dashboard data={data} setData={setData}/>}/>
            <Route path='create' element={<Create data={data} setData={setData}/>}/>
            <Route path='edit/:id' element={<Edit data={data} setData={setData}/>}/>
            <Route path='nested-example' element={<NestedExample/>}>
                <Route path='accounts' element={<Accounts/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='receipts' element={<Receipts/>}/>
                <Route path='staffs' element={<Staff/>}/>
            </Route>
            <Route path='/useref' element={<UseRef/>}/>
            <Route path='/*'  element={<Navigate to='/dashboard'/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  </>
}

export default App
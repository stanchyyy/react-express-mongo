import Container from "react-bootstrap/Container";
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import {default as Products} from "./components/Products/list-ingredients"
import Favourites from "./components/Favourites"
import Menu from "./components/Menu"
import Locations from "./components/Locations"
import SignUp from "./components/account/SignUp"
import SignIn from "./components/account/SignIn"
import Edit from "./components/Products/edit-ingredient"
import Create from "./components/Products/create-ingredient"

import {Route, Routes } from "react-router-dom"



function App (){

    return (
    <Container>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Products/edit/:id" element={<Edit/>} />
            <Route path="/Favourites" element={<Favourites />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Locations" element={<Locations />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Products/add" element={<Create/>}/>
         </Routes>
        <Footer/>
    </Container>
)
}



export default App;
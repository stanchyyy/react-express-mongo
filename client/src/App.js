import Container from "react-bootstrap/Container";
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Products from "./components/Products/list-ingredients"
import Favourites from "./components/Favourites"
import Menu from "./components/Menu"
import Locations from "./components/Locations"
import {Route, Routes } from "react-router-dom"



function App (){

    return (
    <Container>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Favourites" element={<Favourites />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Locations" element={<Locations />} />
         </Routes>
        <Footer/>
    </Container>

)
}



export default App;
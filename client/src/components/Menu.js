import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Menu(){
    const [menu,setMenu] = useState([]);

    useEffect(() => {
        const getMenu = async () => {
            const menu = await (
                await fetch("http://localhost:5001/api/menu")).json();
            setMenu(menu);
        }
        getMenu();
    }, []);

    function categorizeMenu(){
        let categorizedItems = [];
        menu.forEach((item)=>{
            if(item.type in categorizedItems){
                categorizedItems[item.type].push(item);
            }else{
                categorizedItems[item.type] = [item];
            }
        })
        return (
             Object.keys(categorizedItems).map((category)=>
             <>
                <h4>{category}</h4>
                <ul>
                {categorizedItems[category].map((item)=>{
                    return(
                <>
                <li>{item.name}</li>
                </>
                )}
                )}
                </ul>
            </>
        ))
    }


    return (
        <Container>
            {categorizeMenu()}
        </Container>
        );
}

export default Menu;
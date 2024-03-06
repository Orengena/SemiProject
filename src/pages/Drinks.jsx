import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar1 from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

export default function Drinks() {

    let [data, setData] = useState([]);
const {id} = useParams();


    let getData = async function () {
        let res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
        setData(res.data.drinks)
    }

    useEffect(() => {
        getData();
        
    }, [])

    return (
        <div>
            <Navbar1 />
           
            <Row style={{display:"flex", marginTop:"50px"}}> 
            {data.map(function (drinks, i) {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={drinks.strDrinkThumb} />
                        <Card.Body>
                            <Card.Title>{drinks.strDrink}</Card.Title>
                            <Button  variant="outline-dark">
                                <Link to={`/drink/${drinks.idDrink}`} >
                                    for recipe press here
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </Row>
        </div>
    )
}

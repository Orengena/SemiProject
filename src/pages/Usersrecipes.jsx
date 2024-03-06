import React, { useEffect, useState } from 'react'
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../firebase-config';
import Navbar1 from '../components/Navbar';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Usersrecipes() {

    let [recipesData, setrecipesData]= useState([]);
    let recipeCollection = collection(db, 'recipe')

    useEffect(()=>{
        const getReciprData = async ()=>{
            const data = await getDocs(recipeCollection)
            setrecipesData(data.docs.map((element)=>({...element.data(), id: element.id})))
        }
        console.log(recipesData)
        getReciprData()
    }, [])

  return (
    <>
    <Navbar1/>
    <Row style={{display:"flex"}}> 
      {recipesData.map(function(data, i){
        return(
            <Col sm={12} lg={4} md={6} >
          <Card style={{ width: '18rem', marginLeft:"10px" , marginTop:"60px"}}>
      <Card.Img variant="top" src={data.ImgRecipe} alt={data.Title} />
      <Card.Body>
        <Card.Title> {data.Title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> servings: {data.servings}</ListGroup.Item>
        <ListGroup.Item>Ingredient: {data.Ingredient} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
     <Card.Text>
     {data.Direction}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
      )
      })}
     
    </Row>
    </>
  )
}

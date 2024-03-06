import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar1 from '../components/Navbar';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DrinkRecipe() {

    let { id } = useParams();

    let [data, setData] = useState([]);
    let back = useHistory();

    let getData = async function () {
        let res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        setData(res.data.drinks)
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            <Navbar1 />
            {data.map(function (recipe) {
                console.log(recipe)
                return (
                    <Col sm={12} lg={4} md={6} >
                        <Card style={{ width: 'auto', marginLeft: "10px", marginTop: "60px", height: "auto" }}>
                            <Card.Img variant="top" src={recipe.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title> {recipe.strDrink}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Ingredient:</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient1} {recipe.strMeasure1}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient2} {recipe.strMeasure2}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient3} {recipe.strMeasure3}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient4} {recipe.strMeasure4}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient5} {recipe.strMeasure5}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient6} {recipe.strMeasure6}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient7} {recipe.strMeasure7}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient8} {recipe.strMeasure8}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient9} {recipe.strMeasure9}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient10} {recipe.strMeasure10}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient11} {recipe.strMeasure11}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient12} {recipe.strMeasure12}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient13} {recipe.strMeasure13}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient14} {recipe.strMeasure14}</ListGroup.Item>
                                <ListGroup.Item>{recipe.strIngredient15} {recipe.strMeasure15}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Text>
                                    {recipe.strInstructions}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )

            })}
            <button onClick={() => back.goBack()}>Back</button>
        </div>
    )
}

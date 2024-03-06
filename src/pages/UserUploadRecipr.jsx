import React, { useState, useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, storage } from '../firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Navbar1 from '../components/Navbar';

import '../pages/UserUploadRecipe.css'

export default function UserUploadRecipr() {

    let [recipeTitle, setrecipeTitle] = useState("");
    let [numberServing, setNumberServing] = useState("");
    let [ingredient, setingredient] = useState("");
    let [direction, setDirection] = useState("");
    let [imgRecipe, setImgRecipe] = useState(null);


    let recipeCollection = collection(db, 'recipe')
    const imgref = ref(storage, `userImg/${Math.floor(Math.random() * 1000)}`)

    let addRecipe = async function () {
        await getDownloadURL(imgref).then(async (url) => {
            await addDoc(recipeCollection, {
                Title: recipeTitle,
                servings: numberServing,
                Ingredient: ingredient,
                Direction: direction,
                ImgRecipe: url
            })
            console.log(url)
        })
    }

    let uploadImg = async function () {
        await uploadBytes(imgref, imgRecipe)
        console.log(imgRecipe)
    }

    let add = async () => {
        try {
            await uploadImg().then(addRecipe)
        }
        catch (err) {
            console.error(err);
        }
    }






    return (
        <>
            <Navbar1 />
            <Container style={{ marginTop: "40px" }}>
                <img src="Logo1.PNG" style={{ height: "200PX" }} />
                <h1 style={{ fontSize: "40px" }}>Upload your tasty recipe to RECIPEFORALL!</h1>
                <p style={{ fontSize: "20px" }}>
                    RECIPEFORALL is looking for your new yummy recipe and want to publish yours own recipe on our website.
                </p>
                <p style={{ fontSize: "20px" }}>
                    Got a tasty recipe we will be more then happy to publish it to all our community
                </p>
            </Container>

            <Container style={{ marginTop: "50px" }}>
                <Container>
                    <Row >
                        <h2>Recipe Details</h2>
                    </Row>
                </Container>


                <Container className='recipeDetails bg-body-tertiary'>
                    <Container>
                        <Row>
                            <p className='details'>Recipe Title</p>
                            <input className='title' type="text" onChange={(e) => setrecipeTitle(e.target.value)} />
                        </Row>


                        <Row>
                            <p className='details'>Number of servings</p>
                            <input className='num' type="number" onChange={(e) => setNumberServing(e.target.value)} />
                        </Row>

                        <Row>
                            <p className='details'>Ingredients</p>
                            <textarea className='write' onChange={(e) => setingredient(e.target.value)} />
                        </Row>

                        <Row>
                            <p className='details'>Directions</p>
                            <textarea className='write' onChange={(e) => setDirection(e.target.value)} />
                        </Row>
                        <Row>
                            <input type="file" onChange={(e) => setImgRecipe(e.target.files[0])} />
                        </Row>
                        <Row>
                            <button className='upload' onClick={add}>Upload your recipe </button>
                        </Row>
                    </Container>
                </Container>
            </Container>


        </>
    )
}

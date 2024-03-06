import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

export default function AboutUs() {
    let back = useHistory();

  return (
    <>
    <div style={{marginTop:"40PX"}}>
<img src='Logo1.PNG' style={{height:"200PX"}}/>
<p style={{fontSize:"30px"}}>your ultimate destination for culinary creativity and community-driven recipe sharing!</p>
At RECIPEFORALL, we believe that cooking is more than just a necessity—it's an art form, a means of expression, and a way to bring people together.
Our platform was born out of a passion for food and a desire to connect with fellow food enthusiasts from around the globe.
Whether you're a seasoned chef, a culinary novice, or somewhere in between, RECIPEFORALL is your go-to resource for discovering, sharing, and celebrating delicious recipes.
What sets RECIPEFORALL apart is our commitment to fostering a vibrant and inclusive community of food lovers.
 From comforting classics to innovative fusion dishes, our diverse collection of recipes reflects the rich tapestry of global cuisine. Whether you're craving a comforting bowl of homemade soup, a decadent dessert to satisfy your sweet tooth, or a vibrant salad bursting with fresh flavors, you'll find endless inspiration here.
But RECIPEFORALL is more than just a recipe repository—it's a place to connect, collaborate, and learn from one another. Our interactive platform allows users to share their own recipes, rate and review recipes posted by others, and engage in lively discussions about all things food-related. Whether you're seeking advice on ingredient substitutions, troubleshooting cooking techniques, or simply looking for culinary inspiration, our community is here to support you every step of the way.
At RECIPEFORALL, we believe that cooking should be fun, accessible, and above all, delicious. Whether you're cooking for yourself, your family, or a crowd of hungry guests, we're here to help you unleash your culinary creativity and make every meal a memorable experience.
Join us on our culinary journey and let's explore the world of flavor together. From our kitchen to yours, happy cooking!
</div>
<button onClick={()=> back.goBack()}>Back</button>
</>
  )
}

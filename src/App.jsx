import './App.css'
import { Signin } from './components/SIgnin'
import { SignUp } from './components/Signup'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import Welcome from './pages/Welcome'
import AboutUs from './pages/AboutUs'
import Homepage from './pages/Homepage'
import UserUploadRecipr from './pages/UserUploadRecipr'
import Usersrecipes from './pages/Usersrecipes'
import RandomRecipe from './pages/RandomRecipe'
import RandomRecipeSearch from './pages/RandomRecipeSearch'
import Drinks from './pages/Drinks'
import DrinkRecipe from './pages/DrinkRecipe'

function App() {
  return (
    <div>

      <Welcome />

      <Switch>
        <Route path={"/login"}>
          <Signin />
        </Route>

        <Route path={"/signup"}>
          <SignUp />
        </Route>

        <Route path={"/aboutus"}>
          <AboutUs />
        </Route>

        <Route path={"/upload"}>
          <UserUploadRecipr />
        </Route>

        <Route path={"/home"}>
          <Homepage />
        </Route>

        <Route path={"/users-recipe"}>
          <Usersrecipes />
        </Route >

        <Route path={"/random"}>
          <RandomRecipe />
        </Route>

        <Route path={"/search"}>
          <RandomRecipeSearch />
        </Route>


        <Route path={"/drinks"}>
          <Drinks />
        </Route>

        <Route exact path={"/drink/:id"} >
          <DrinkRecipe />
        </Route>



      </Switch>

    </div>
  )
}

export default App

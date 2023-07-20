// import painting from './painting.json';
// import { GalleryList } from './components/GalleryList';
import { Recipe } from "./components/Recipe"
import recipe from "./recipies.json"

export const App = () => {
  return (
     <>
       {/* <GalleryList items={painting}/> */}
       {recipe.map(({name, image, time, servings, calories}) => {
        return <Recipe
          key = {image}
          name = {name}
          image = {image}
          time = {time}
          servings = {servings}
          calories = {calories}
        />
       })}
     </>
    )
}
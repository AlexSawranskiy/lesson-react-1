// import painting from './painting.json';
// import { GalleryList } from './components/GalleryList';
// import { GalleryList } from "./components/GalleryList"
// import { Recipe } from "./components/Recipe"
// import recipe from "./recipies.json"
// import PropTypes from 'prop-types';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { colorPickerOptions } from './components/ColorPicker/colorpickerData';
import { Container } from './components/Container/Container';

export const App = () => {
  return (
     <>
       <Container>
          <ColorPicker options = {colorPickerOptions}/>
       </Container>
       {/* <GalleryList items={painting}/>
       {recipe.map(({name, image, time, servings, calories}) => {
        return <Recipe
          key = {image}
          name = {name}
          image = {image}
          time = {time}
          servings = {servings}
          calories = {calories}
        />
       })} */}
     </>
    )
}

import painting from './painting.json';
import { GalleryList } from './components/GalleryList';


export const App = () => {
  return (
     <>
      <GalleryList items={painting}/>
     </>
    )
}
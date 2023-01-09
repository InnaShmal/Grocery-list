import './App.css';
import image from './shoppingOne.webp';
import imageTwo from './manTwo.webp';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={image} width='200px' alt='shopping'/>
      </div>
      <h1 className='container'>Grocery List</h1>
      <GroceryList/>
      <div className='container'>
        <img src={imageTwo} width='200px' alt='man'/>
      </div>
    </div>
  );
}

export default App;

import axios from 'axios';
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {

 const [items,setItems] = useState([]);

 useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res => {
      setItems(res.data.meals);
    })
    .catch(err => {
      console.log(err);
    })
 });


const itemlist = items.map(({strMeal, strMealThumb, idMeal}) => {
  return (
    <section className="card">
      <img src={strMealThumb} alt='food-items' />
      <section className="content">
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </section>
    </section>
  );
});

return <div className="items-container">{itemlist}</div>
}

export default App;

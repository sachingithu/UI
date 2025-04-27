
import './App.css';
import Form from './components/Form';
import Items from './components/Items';
import Logo from './components/Logo';
import PackagingList from './components/PackagingList';
import Stats from './components/Stats';
import { useState } from 'react';
const initialization=[
  {id:1, description:"Passport", quantity:2,packed:false},
  {id:2, description:"Socks", quantity:12,packed:false},
  {id:3, description:"Charger", quantity:5,packed:false},
  {id:4, description:"Boarding Pass", quantity:1,packed:false},
  
]
function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item){
    setItems((items)=>[...items,item])
  }
  return (
    <>
      <Logo/>
      <Form onAddItems={handleAddItem}/>
       <PackagingList props={items}/>
      <Stats/>
      {/* <Items value={initialization}/> */}
      </>
  );
}

export default App;

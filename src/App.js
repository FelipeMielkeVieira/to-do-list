import React, { useEffect, useState } from 'react';
import './App.css';
import ItemList from './components/ItemList';

function App() {
  const [newItemName, setNewItemName] = useState('');

  const [items, setItems] = useState([
    { name: 'Learn React', checked: false }
  ]);

  useEffect(
    () => { console.log('useEffect'); },
    []
  )

  useEffect(
    () => { console.log('Mudou a Lista: ', items) },
    [items]
  )

  const checkItem = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  }

  const addItem = () => {
    const newItems = [...items];
    newItems.push({ name: newItemName, checked: false })
    setItems(newItems);
  }

  return (
    <div className="App">

      <input type='text' placeholder='Name new Item'
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button onClick={() => addItem()}></button>

      {
        items.map((item, index) => {
          return <ItemList key={`${item.name}${index}`} name={item.name} checked={item.checked} onChange={() => checkItem(index)

          } />
        })
      }

    </div>
  );
}

export default App;

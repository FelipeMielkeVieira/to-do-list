import './styles.css';

function ItemList(name, checked, onChange) {
  return (
    <div className="ItemList">
      <input type='checkbox' checked={checked} onChange={onChange}>{name}</input>
    </div>
  );
}

export default ItemList;

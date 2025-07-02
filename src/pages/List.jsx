import { use, useEffect, useState } from "react";
import Header from "../components/Header";
import { getItems, itemsStore } from "../store/useItemStore";
import Card from "../components/Card";

function List() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((res) => {
      setItems(res.data.products);
    });
  }, []);

  

  useEffect(() => {
    itemsStore.getState().setItemsGroup(items);
  }, [items]);

  if (items.length == 0) return null;

  console.log(itemsStore.getState())

  return (
    <>
      <Header></Header>
      <div className="container">
        <h1 className="text-center">List</h1>
        <ul>
          {items.map((item) => {
            return (
              <>
                <Card item={item}></Card>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default List;

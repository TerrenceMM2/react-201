import React, { useState } from "react";

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "5rem",
  },
  innerContainer: {
    display: "flex",
    textAlign: "center",
    flexWrap: "wrap",
  },
  item: {
    border: "1px solid gray",
    padding: ".5rem",
    margin: ".5rem",
  },
};

const list = [
  {
    item: "LED TV",
    price: 499,
    quantity: 10,
  },
  {
    item: "Nintendo Switch",
    price: 299,
    quantity: 40,
  },
  {
    item: "Laptop",
    price: 1299,
    quantity: 15,
  },
  {
    item: "Bluetooth Headset",
    price: 149,
    quantity: 22,
  },
  {
    item: "Smart Speaker",
    price: 179,
    quantity: 25,
  },
  {
    item: "Drone",
    price: 299,
    quantity: 7,
  },
  {
    item: "3D Printer",
    price: 559,
    quantity: 10,
  },
  {
    item: "Playstation 5",
    price: 499,
    quantity: 0,
  },
  {
    item: "DSLR Camera",
    price: 899,
    quantity: 16,
  },
  {
    item: "iPhone 13",
    price: 1199,
    quantity: 25,
  },
  {
    item: "Electric Scooter",
    price: 699,
    quantity: 9,
  },
];

/* LISTS & KEYS
- use map().
- Assign a unique key (provide or from array index).
- React uses key to track changes. (Reconciliation: React uses the key to match children in the original tree with children in the subsequent tree.)
- Keys should be locally unique.
- Can be embedded in JSX

*/

export default function ModuleSix() {
  const [data, setData] = useState(list);

  return (
    <div style={styles.container}>
      <h1>Lists & Keys</h1>
      <div style={styles.innerContainer}>
        {data.map((obj, index) => {
          console.log(obj.item, index);
          return (
            <div style={styles.item} key={index}>
              <p>Item: {obj.item}</p>
              <em>Price: ${obj.price}</em>
              <div>Quantity: {obj.quantity}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";
import { useState } from 'react';

const user = {
  name: "Harry Potter",
  imageUrl: "",
  age: 90,
};

const products = [
  {title: 'Order of Phoenix', id: 5},
  {title: 'Sorcerer\'s Stone', id: 1},
  {title: 'Halfblood Prince', id: 6},
];

const productsList = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
)

function Button() {
  const [count, setCount] = useState(0);

  function messageAlert() {
    setCount(count + 1);
  }

  return (
    <button onClick={messageAlert}>
      Click {count} times before!
    </button>
  );
}

function MyImage() {
  return (
    <img class="img" src="https://picsum.photos/200/200"/>
  );
}

function MyList() {
  return (
    <ul>
      {productsList}
    </ul>
  );
}

export default function HomePage() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <MyImage />
      <Button />
      <MyList />
      <Button />
    </>
    );
}

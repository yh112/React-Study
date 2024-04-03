import React from 'react';
import ReactBook from './ReactBook.';

function Book() {
  return (
    <div style={{display: "inline-flex"}}>
        <img src={bookSource}/>
        <span>이름: {name}</span>
        <span>가격: {cost}</span>
    </div>
  );
}

export default Book;

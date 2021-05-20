import React from 'react';

function Counter ({  number, isLogin,  onIncrement,  onDecrement}) {
  return (
    <div>
      <h1>{isLogin ? number : -9999}</h1>
      <h1>{isLogin}</h1>
      <button onClick={onIncrement}>증가 (+)</button>
      <button onClick={onDecrement}>감소 (-)</button>
    </div>
  );
};

export default Counter;
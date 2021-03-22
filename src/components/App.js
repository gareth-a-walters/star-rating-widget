import React from 'react';
import StarRating from './StarRating/StarRating';

function App() {
  return (
    <div>
      <StarRating label={'Rate below:'} starCount={3} />
      <StarRating label={'Rate below:'} starCount={5} />
      <StarRating label={'Rate below:'} starCount={10} />
    </div>
  );
}

export default App;

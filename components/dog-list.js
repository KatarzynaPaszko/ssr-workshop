import React from 'react';
import Dog from './dog';

const DogList = ({ dogs }) => {
  return (
    <div>
      {dogs.map((url, index) => (
        <Dog url={url} key={index}/>
      ))}
    </div>
  );
};

export default DogList;
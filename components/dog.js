import React from 'react';

const Dog = ({ url }) => (
    <img src={`https://random.dog/${url}`} height='300px' />
);

export default Dog;
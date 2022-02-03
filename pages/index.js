import React, { useEffect, useState } from 'react';
import DogList from '../components/dog-list';
import { getDogs } from '../helpers/get-dogs';

const IndexPage = ({dogs}) => {
  const [dogsList, setDogs] = useState(dogs);

  useEffect(() => {
    const fetchDogs = async () => {
      setDogs(await getDogs(0, 1));
    };
    fetchDogs();
  }, []);

  return (
    <div id="dog-list">
      <DogList dogs={dogsList} />
    </div>
  );
};

IndexPage.getInitialProps = async function () {
  return {
    dogs: await getDogs(1,7)
  }
};

export default IndexPage;
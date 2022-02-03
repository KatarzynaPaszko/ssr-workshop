import axios from 'axios';

export const getDogs = async (a = 9, b = 14) => {
  const dogs = await axios.get('https://random.dog/doggos');

  return dogs.data.slice(a, b);
};
import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgService } from '../utils/mockImages';

// ----------------------------------------------------------------------
const SERVICE_NAME = ['Formatação', 'Correção Ortografica', 'Tradução Inglês / Espanhol'];

// ----------------------------------------------------------------------

const services = [...Array(3)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgService(setIndex),
    name: SERVICE_NAME[index],
    price: faker.datatype.number({ min: 50, max: 100, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 50, max: 60, precision: 0.01 }),
    status: sample(['', '', '', ''])
  };
});

export default services;

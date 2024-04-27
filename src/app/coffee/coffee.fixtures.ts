import { faker } from '@faker-js/faker';
import { Coffee } from './coffee';

export const buildCoffee = (): Coffee => ({
  id: faker.number.int(),
  nombre: faker.lorem.words(),
  tipo: faker.color.human(),
  region: faker.location.city(),
  sabor: faker.lorem.words(),
  altura: faker.number.int({ max: 9999 }),
  imagen: faker.image.url(),
});

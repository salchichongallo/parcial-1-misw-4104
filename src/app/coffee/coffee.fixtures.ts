import { faker } from '@faker-js/faker';
import { Coffee, CoffeeType } from './coffee';

export const buildCoffee = ({ type }: { type?: CoffeeType } = {}): Coffee => ({
  id: faker.number.int(),
  nombre: faker.lorem.words(),
  tipo: type ?? faker.helpers.enumValue(CoffeeType),
  region: faker.location.city(),
  sabor: faker.lorem.words(),
  altura: faker.number.int({ max: 9999 }),
  imagen: faker.image.url(),
});

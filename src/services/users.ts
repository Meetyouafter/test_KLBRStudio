import { faker } from '@faker-js/faker';

export interface IUser {
  id: string,
  name: string,
  surname: string,
}

const users: IUser[] = [];

for (let i = 0; i < 100; i += 1) {
  const user = {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
  };
  users.push(user);
}

export default users;

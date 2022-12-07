import { postUser } from './user.prisma';

// eslint-disable-next-line no-use-before-define
export { createUser };

type User = {
    name: string;
    email: string;
}

function createUser(userData: User) {
  if (!userData) {
    throw new Error('Missing arguments');
  }
  return { result: makeSum({ a, b }) };
}

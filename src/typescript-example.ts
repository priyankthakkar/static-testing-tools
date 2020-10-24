/**
 * @function
 * @name add
 *
 * Takes two parameters as an argument and returns the sum of those two numbers.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} - sum of parameters a and b
 */
const add = (a: number, b: number) => a + b;

export interface User {
  name: {
    first: string;
    middle: string;
    last: string;
  };
}

/**
 * @function
 * @name getFullName
 *
 * For the given User object as a parameter, returns the string that constitutes the
 * full name for the user.
 *
 * @param {User} user - an object representing user
 * @returns {string} - fullname of the user derived from paramter of type User
 */
const getFullName = (user: User) => {
  const {
    name: {first, middle, last},
  } = user;
  return [first, middle, last].filter(Boolean).join('');
};

// if we call the functions in the below mentioned way, the typecheck will fail.
// add(1, 'two');
// getFullName({ name: {first: 'Json', midd1le: 'James', last: 'Roy'}})

add(1, 3);
getFullName({name: {first: 'Json', middle: 'James', last: 'Roy'}});

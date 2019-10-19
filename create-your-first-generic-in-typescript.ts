// https://egghead.io/lessons/typescript-create-your-first-generic-in-typescript

function fill<T>(array:any[], value:T):T[] {
  return array.map(() => value);
}

const result = fill([null, null, null], "");
const numbers = fill([null, null, null], 1);

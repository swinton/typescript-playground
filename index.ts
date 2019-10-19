// https://egghead.io/lessons/typescript-explore-typescript-by-writing-functions

// Define a type
type Salutation = {greeting:string, name:string};

// Destructure the salutation
function greet({greeting, name}:Salutation):string {
  return `${greeting}, ${name}`;
}

const message:string = greet({greeting:"Hello", name:"Steve"});

console.log(message);

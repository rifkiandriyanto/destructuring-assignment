const user = {
  name: "rifki",
  age: 24,
  links: {
    github: "github/rifkiandriyanto",
    portfolio: "localhost:3000",
  },
};

// const {name, links: { github, portfolio }} = user;

// console.log('namaku: ', name)
// console.log('github: ', github)

// function namaku({ name }) {
// return `welcome ${name}`;
// }

const { name, age, ...restUser } = user;

console.log("ini restUser", restUser);

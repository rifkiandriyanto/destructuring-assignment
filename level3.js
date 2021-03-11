const user = {
  name: "rifki",
  age: 24,
  links: [
    {
      github: "github/rifkiandriyanto",
      portfolio: "localhost:3000",
    },
  ],
};

const {
  links: [{ github, portfolio }]} = user;

console.log(github, portfolio)

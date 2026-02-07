const myArray = ["C", "Java", "Python", "C++", "PHP"];

//normal function
myArray.forEach(function (item) {
  console.log(item);
});

//arrow function
myArray.forEach((val) => {
  console.log(val);
});

//object within the array
const coding = [
  {
    langauge: "French",
    word: "Bonjour",
  },
  {
    langauge: "Spanish",
    word: "Hola",
  },
  {
    langauge: "German",
    word: "Hallo",
  },
  {
    langauge: "Korean",
    word: "Annyeonghaseyo",
  },
];
coding.forEach((val) => {
  //console.log(val);
  //console.log(val.langauge);
  console.log(val.word);
});

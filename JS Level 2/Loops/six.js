const lipbalms = {
  brand1: "vaseline",
  brand2: "nivea",
  brand3: "bioline",
  brand4: "himalaya",
};

//loops for objects using forin loop
// To get KEYS-forin loop
for (const key in lipbalms) {
  console.log(key);
}

// To get VALUES -forin loop
for (const key in lipbalms) {
  //console.log(lipbalms[key]);
  console.log(`${key} is:${lipbalms[key]}`);
}

const programming = ["cpp", "java", "c", "python", "swift", "javascript"];
for (const key in programming) {
  //console.log(key); //op 0 1 2 3 4 5
  console.log(programming[key]); //to get values
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("FR", "France");
map.set("IN", "India");
map.set("PH", "Phillipines");

for (const key in map) {
  console.log(map[key]); //no op as maps are not iterable thru forin or forof loops
}

//op maps are not iterable thru forin or forof loops

//objects-forin loop
//arrays- forof loop

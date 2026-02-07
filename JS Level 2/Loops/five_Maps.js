//Maps- UNIQUE key value pair

const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("FR", "France");
map.set("IN", "India");
map.set("PH", "Phillipines");
console.log(map);

/*
Map(4) {
  'IN' => 'India',  //india is 2times repeated but only entry gets accepted as its unique
  'USA' => 'United states of America',
  'FR' => 'France',
  'PH' => 'Phillipines'
}
*/

//for of loop
for (const key of map) {
  console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United states of America' ]
[ 'FR', 'France' ]
[ 'PH', 'Phillipines' ]
*/

// to get in key value pair form
//for of loop
for (const [key, value] of map) {
  console.log(key, `:--`, value);
}
/*
IN :-- India
USA :-- United states of America
FR :-- France
PH :-- Phillipines
*/

//using object
const lipbalms = {
  brand1: "vaseline",
  brand2: "nivea",
  brand3: "bioline",
  brand4: "himalaya",
};
//for of loop WONT work for OBJECTS    op-- lipbalms is not iterable
for (const [key, value] of lipbalms) {
  console.log(key, `:-`, value);
}

//objects-forin loop
//arrays- forof loop

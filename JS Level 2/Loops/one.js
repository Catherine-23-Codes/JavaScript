//for loop

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

// for loop example

for (let index = 0; index < 10; index++) {
  const element = index;
  console.log(element);
}

for (let index = 65; index <= 90; index++) {
  //using ASCII key codes CAPS
  console.log(String.fromCharCode(index));
}

for (let index = 97; index <= 122; index++) {
  //using ASCII key codes SMALL    //to change name of index we give ctrl+d
  console.log(String.fromCharCode(index));
}

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("I like 5");
  }
  console.log(element);
}

for (let i = 0; i <= 3; i++) {
  console.log(`Outer loop value:${i}`);
  for (let j = 0; j <= 5; j++) {
    //console.log(`Inner loop value:${j} and inner loop ${i}`);
    console.log(i + "*" + j + "=" + i * j);
  }
}

for (let i = 1; i <= 3; i++) {
  console.log(`Outer loop value:${i}`);
  for (let j = 1; j <= 5; j++) {
    //console.log(`Inner loop value:${j} and inner loop ${i}`);
    console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray = ["sunflower", "rose", "hibiscus", "marigold"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

//break and continue

for (let index = 1; index <= 20; index++) {
  //const element = index;
  if (index == 5) {
    console.log(`detected 5`);
    break; //stops execution after this
  }
  console.log(`value of index: ${index}`);
}

for (let index = 1; index <= 20; index++) {
  //const element = index;
  if (index == 5) {
    console.log(`detected 5`);
    continue; //continues execution after this
  }
  console.log(`value of index: ${index}`);
}

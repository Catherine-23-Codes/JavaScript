function one() {
  const username = "Catherine";

  function two() {
    const website = "google.com";
    console.log(username);
    console.log(website);
  }

  two();
}
one();

/*
child function can access parent functin but vice versa can't occur!
*/

if (true) {
  const username = "catherine";
  if (username === "catherine") {
    const website = " google.com";
    console.log(username + website);
  }
  //console.log(website); // we are calling it outside its scope, throws an error
}
//console.log(username); // we are calling it outside its scope, throws an error

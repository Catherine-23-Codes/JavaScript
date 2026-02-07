console.log("1. Start");

function syncTask() {
  for (let i = 0; i < 1000000000; i++) {} // heavy task
  console.log("2. Sync Task Done");
}

syncTask();

console.log("3. End");

console.log("1. Start");

setTimeout(() => {
  console.log("2. Async Task Done");
}, 2000);

console.log("3. End");

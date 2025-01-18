function createCounter() {
  let count = 0;

  return function () {
    
    console.log("Student Name: Yun Winner");

    count++;
    return count;
  };
}

// Create a counter instance
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

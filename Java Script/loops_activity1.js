// loop from 0 to 15
// we display the current value i and depending on whether i is divisible by 2 without remainder odd or even.
for (let i = 0; i < 16; i++) {
  console.log(`${i} is ${i % 2 !== 0 ? "odd" : "even"}`);
}

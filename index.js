const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];

function max(numbers) {
  let large = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > large) {
      large = numbers[i];
    }
  i++;
  }
  return large;
}

// console.log(max(numList1));



function min(numbers) {
  let small = numbers[0] ;
  let i = 0;
  while(i < numbers.length) {
    if (numbers[i] < small) {
      small = numbers[i]
    }
    i++;
  }
  return small;
}

console.log(min(numList1));
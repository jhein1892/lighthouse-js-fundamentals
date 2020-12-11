/*Write a while loop

num 1-20 
if num / 3 --> print "Julia"
if num / 5 --> print "James"
if num / 3 && 5 --> print "JuliaJames"
if num !/ 3 || 5 --> print num

var x = 1; 

while (x <= 20) {
      if ((x%3 === 0) && (x%5 === 0)){
      console.log("JuliaJames");
      x+= 1; 
      }
      else if (x%3 === 0){
        console.log("Julia"); 
        x += 1; 
      } 
      else if (x%5 === 0){
        console.log("James");
        x += 1; 

      } else {
        console.log(x);
        x+=1;
      }
}*/

/*Write a while loop that prints out the lyrics to 99 bottles of beer. 

var x = 99; 

while (x > 0) {
  if ( x === 1) {
    console.log(x + " bottle of juice on the wall! "
                    + x + " bottle of juice! Take one down, pass it around... "
                    + (x-1) + " bottles of juice on the wall!");
  }

  else if (x === 2) {
    console.log(x + " bottles of juice on the wall! "
    + x + " bottles of juice! Take one down, pass it around... "
    + (x-1) + " bottle of juice on the wall!");
}
  else {
  console.log(x + " bottles of juice on the wall! " + x + " bottles of juice! Take one down, pass it around... " + (x-1) + " bottles of juice on the wall!");
}
  x -= 1;
}*/


/*create a while loop that counts down from 60 seconds. 
There are 6 tasks that need to be completed within the last 60 seconds: 

  -Orbiter transfers from ground to internal power (T-50 seconds)
  -Ground launch sequencer is go for auto sequence start (T-31 seconds)
  -Activate launch pad sound suppression system (T-16 seconds)
  -Activate main engine hydrogen burnoff system (T-10 seconds)
  -Main engine start (T-6 seconds)
  -Solid rocket booster ignition and liftoff! (T-0 seconds)

  if there is no task the print out should read = T-x seconds
  if there is a task, then it should just read out the task. 

var x = 60; 

while (x >= 0){
  if (x === 50) {
    console.log("Orbiter transfers from ground to internal power");
  }
  else if (x === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } 
  else if (x === 16) {
    console.log("Activate launch pad sound suppression system");
  }
  else if (x === 10) {
    console.log("Activate main engine hydrogen burnoff system"):
  }
  else if (x === 6) {
    console.log("Main engine start")
  }
  else if (x === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  }
  else {
    console.log("T-" + x + " seconds");
  }
  x -= 1;
}*/

/* rewrite the following while loop as a for loop: 

var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

for (var x = 9; x >= 1; x -= 1) {
  console.log("hello " + x);
}*/



/*write for loop that saves the factoral of 12 to the var solution:

let solution = 1; 

for (let i = 1; i <= 12; i++) {
  solution *= i; 
}

console.log(solution);
*/


/*There ar 26 rows (0-25) and 100 seats (0-99) within each row. Write a nested for loop that prints out all the seat combinations. 

for ( let x = 0; x < 25; x++){
  for (let y = 0; y < 100; y++){
    console.log(x + "-" + y);
  }
}*/

/*Print numbers from 100 to 200. 

if the number is multiple of 3 print "Loopy"
if the number is multiple of 4 print "Lighthouse"
if the number is multiple of 3 & 4 print "LoopyLighthouse"

else print number. 

let num = 100; 

while (num <= 200) {
  if ((num % 3 === 0) && (num%4 === 0)) {
    console.log("LoopyLighthouse");
  } 
  else if (num%3 === 0) {
    console.log("Loopy");
  } 
  else if (num%4 === 0){
    console.log("Lighthouse");
  }
  else {
    console.log(num);
  }
  num++;
}*/

/*
const amounts = [61.00, 52.25, 112.99, 5.00]

let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

For..of loop

const total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);
*/

 
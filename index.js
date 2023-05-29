/*var rows = prompt("please enter a number");

function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(i + "");
    }
    document.write("<br>");
  }
}
printPattern(rows);*/


/*var rows = prompt("please enter a number");

function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(j + "");
    }
    document.write("<br>");
  }
}
printPattern(rows);*/

let count=1;
var rows = prompt("please enter a number");

function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(count + "");
      count++;
    }
    document.write("<br>");
  }
}
printPattern(rows);

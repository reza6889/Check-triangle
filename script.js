// Challenge 8 : Check triangle

const side1 = 3;
const side2 = 5;
const side3 = 2;

if (side1 == side2 && side2 == side3) {
  console.log("متساوی الاضلاع");
} else if (side1 == side2 || side2 == side3 || side1 == side3) {
  console.log("متساوی الساقین");
} else {
  console.log("Nothing");
}

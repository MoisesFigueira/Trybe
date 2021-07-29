// const myName = 'Moises Figueira';
// const birthCity = 'Belo Horizonte';
// let birthYear = 1991;
// console.log (myName);
// console.log (birthCity);
// console.log (birthYear);
// birthYear = 2030;
// console.log (birthYear);
// birthCity = 'Bellzonte';
// console.log (birthCity); it is not possible to change the value of a constant

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';
// console.log(typeof patientId)
// console.log(typeof patientAge)
// patientId = '50'
// console.log(typeof patientId)

// let base = 5;
// let height = 8;
// let area = base * height;
// console.log(base);
// console.log(height);
// console.log(area);
// let perimetro = (base + height) * 2;
// console.log(perimetro);

// let note = 98;
// if (note >= 80) {
//     console.log("Congratulations, you've been approved!");
// }
// else if (note < 80 && note >= 60) {
//     console.log ("You are on our waiting list");
// }
// else {
//     console.log("you failed");
// }

// let result = "list";
// switch (result) {
// 	case "approved":
// 		console.log("Congratulations, you've been approved!");
//     break;

// 	case "list":
// 		console.log ("You are on our waiting list");
// 		break;

// 	case "failed":
// 		console.log("you failed");
// 		break;
// }

// EXERCISES
// exercises-1
// let a = 5;
// let b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);


// exercises-2
// let num1 = 6;
// let num2 = 7;
// if (num1 > num2) {
// console.log(num1);
// }
// else {
// 	console.log(num2);
// }


// exercises-3
// let num1 = 6;
// let num2 = 1;
// let num3 = 3;
// if (num1 > num2 && num1 > num3) {
// 	console.log(num1);
// }
// else if (num2 > num1 && num2 > num3) {
// 	console.log(num2);
// }
// else {
// 	console.log(num3);
// }


// exercises-4
// let number = 0;
// if (number > 0) {
// 	console.log("positive");
// }
// else if (number < 0) {
// 	console.log("negative");
// }
// else {
// 	console.log("zero");
// }


// exercises-5
// let angles1 = -90;
// let angles2 = -45;
// let angles3 = 45;
// let erro;
// if (angles1 + angles2 + angles3 == 180) {
// 	console.log(true);
// }
// else if (angles1 + angles2 + angles3 < 0) {
// 	console.log(erro);
// }
// else {
// 	console.log(false);
// }


// exercises-6
// let chess_piece = "BIShoP";
// switch (chess_piece.toLowerCase()) {
// 	case "pawn":
// 		console.log("They can only move one house or two houses forward (during the first move), and they can also diagonally kill the opposing team's pieces.");
// 		break;

// 	case "horse":
// 		console.log("Se movimenta em L.");
// 		break;

// 	case "bishop":
// 		console.log("It only moves diagonally across the board.");
// 		break;

// 	case "tower":
// 		console.log("They move in a straight line or sideways through all the houses.");
// 		break;

// 	case "queen":
// 		console.log("It can move in any direction and direction.");
// 		break;

// 	case "king":
// 		console.log("It moves in any direction or direction, but only from house to house.");
// 		break;

// 	default:
// 		console.log("unidentified value")
// }


// exercises-7
// let note = "101";
// if (note < 0 || note > 100){
// 		console.log ("invalid number!")
// }
// else {
// if (note >= 90) {
// 	console.log("A");
// }
// else if (note >= 80) {
// 	console.log("B");
// }
// else if (note >= 70) {
// 	console.log("C");
// }
// else if (note >= 60) {
// 	console.log("D");
// }
// else if (note >= 50) {
// 	console.log("E");
// }
// else{
// 	console.log("F");
// }
// }


// exercises-8 & 9
let num1 = 1;
let num2 = 3;
let num3 = 4;
if (num1 %2 == 0 || num2 %2 == 0 || num3 %2 == 0) {
	console.log("true");
}
else {
	console.log("false");
}


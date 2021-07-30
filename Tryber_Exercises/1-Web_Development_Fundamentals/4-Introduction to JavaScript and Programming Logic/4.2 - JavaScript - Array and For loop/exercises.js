// // Aprofunde seus conhecimentos
// // Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
// // Copiar
// // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index of numbers) {
// 	console.log(index)
// }

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// for (let index = 0 ; index < numbers.length; index += 1) {
// 	sum += numbers[index];
// }
// console.log(sum)


// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//  . A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// let mean = 0;
// for (let index = 0 ; index < numbers.length; index += 1) {
// 	sum += numbers[index];
// }
// mean = sum / numbers.length
// console.log(mean)


// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// let mean = 0;
// for (let index = 0 ; index < numbers.length; index += 1) {
// 	sum += numbers[index];
// }
// mean = sum / numbers.length;
// if (mean > 20) {
// 	console.log("value greater than 20")
// }
// else{
// 	console.log("value less than or equal to 20")
// }


// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let larger = 0;
for (let index = 0; index < numbers.length; index += 1){
	if (numbers[index] > larger)
	larger = numbers[index]
	
}
console.log(larger)


// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let larger = 0;
// for (let index = 0; index < numbers.length; index += 1){
// 	if (numbers[index] < larger)
// 	larger = numbers[index]
	
// }
// console.log(larger)

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let num =[];
// for (let index = 1; index <= 25; index += 1){
// 	num.push(index);
// }
// console.log(num)


// 9 .Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// let num =[];
// for (let index = 1; index <= 25; index += 1){
// 	num.push(index);
// }
// for (let cont = 0; cont < num.length; cont += 1){
// 	console.log(num[cont] / 2);
// }

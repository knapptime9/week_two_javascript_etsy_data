// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);


// 1: Show me how to calculate the average price of all items.
function question1 () {
	let n=0;
	let nsum = 0;
	let avg=0;
		for (i=0; i < data.length ; i++){
			nsum = data[i].price + nsum;
		}
	avg = nsum / data.length;
	return avg;
}
console.log(question1());



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
	let n = 0;
	let answer = [];
	for (i=0; i < data.length; i++){
		n=data[i].price;
		item=data[i].title;
		if (n >= 14 && n<=18){
			answer.push(item)
		}
	}
	return answer
}
console.log(question2())


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
	let n = 0;
	let answer = [];

	for (i=0; i < data.length; i++){
		let conditional = data[i].currency_code;
		let title=data[i].title;
		let price=data[i].price;
		if (conditional == "GBP"){
			answer.push(title);
			answer.push(price);
		}
	}
	return answer[0] + " costs " + answer[1] + " pounds"
}
console.log(question3())


// 4: Display a list of all items who are made of wood.

function question4 () {
	let i=0;
 	let answer=[]
 		while (i < data.length){
	 		let match = data[i].title;
	 		let materials = data[i].materials;
			if (materials.includes("wood")=== true){
				answer.push(match);
			}
			i++
		}
	return answer;
}
console.log(question4());

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
	let i=0;
 	let answer=[];
 		while (i < data.length){
	 		let match = data[i].title;
	 		let materials = data[i].materials;
			let materialsLength = materials.length;
			if (materialsLength >= 8){
				answer.push(match, "This product is made of " + materialsLength + " different materials", "These Materials include: ", materials );
			}
			i++
}
	return answer;
}
console.log(question5())


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
	let i=0;
 	let answer=[];
 		while (i < data.length){
	 		let match = data[i].title;
	 		let whoMade = data[i].who_made;
			if (whoMade === "i_did"){
				answer.push(match);
			}
			i++
	}
	return answer.length + " " + "items were made by their seller";
}
console.log(question6());

// Exercise 1
 
const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(arr) {
    console.log(arr);
    let sum = 0;

for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
   }
   return sum;
 }

console.log(arraySum(numbers));


// Exercise 2

let favBook = {};

favBook.title = "The Hobbit";
favBook.author = "J.R.R Tolkien";
favBook.pageCount = 295;
favBook.readCount = 3;

console.log(favBook);
favBook.info = function () {
    return `${this.title} by ${this.author} is ${this.pageCount} pages and has been raed ${this.readCount} times.`;
};
console.log(favBook.info());

// Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

let words = sentence.split(" ");
console.log(words);
let result = [];

for (let i = 0; i < words.length; i++) {
   let letters = words[i].split("");
   console.log(letters);

   let lettersReversed = letters.reverse();
   console.log("reversed letters:", letters);

   let lettersJoined = lettersReversed.join("")
   console.log(lettersJoined);

   result.push(lettersJoined);
  
}

let finalSentence = result.join(" ");

console.log(finalSentence);


// Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
console.log(csvData);

const rows = csvData.split("\n");
console.log(rows);

const titles = rows[0].split(",");
console.log(titles);
const resultArray = [];

for (let i = 1; i < rows.length; i++) {
    const dataArray = rows[i].split(",");
    console.log(dataArray);

    const dataObject = {
        name: dataArray[0],
        age: dataArray[1],
    };
    resultArray.push(dataObject);
}










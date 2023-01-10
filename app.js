console.log("Hello World!\n==========\n");

// Exercise 1 Section

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    console.log(arr);
    let sum = 0
    
    for (let i = 0; i < arr.lengt; i++) {
        sum = sum + arr[i];
    }  
       
     return sum;
}

console.log(arraySum(numbers));



// Exercise 2 Section

let favBook = {};

favBook.title = "The Hobbit";
favBook.author = "J.R.R Tolkien";
favBook.pageCount = 295;
favBook.readCount = 3;

console.log(favBook);

favBook.info = function () {
    return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;
};
console.log(favBook.info()); 


// Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

const words = sentence.split(' ');
console.log(words);
let Result = [];

for (let i = 0; i < words.length; i++){
    let letters = words[i].split("");
       console.log(letters.slice());

    const lettersReversed = letters.reverse();
       console.log("reversed latters;", letters);

    const lettersJoined = lettersReversed.join("")
       console.log(lettersJoined);

    Result.push(lettersJoined);

}

const finalsentence = Result.join(" ");
console.log(finalsentence);


// Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
console.log(csvData);

  
const rows = csvData.split("/n");
console.log(rows);

const headers = rows[0].split(",");
console.log(headers);
const resultArray = [];

for (let i = 1; i < rows.length; i++) {
    const valueArray = rows[i].split(",");
    console.log(valueArray);

    const dataObject = {
        name: valueArray[0],
        age: valueArray[1],   
    };

    resultArray.push(valueObject);
}


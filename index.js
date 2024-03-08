
let words = ["Hello World", "Azerbaijan", "JavaScript", "HTML"]
let countLetters = words
    .map(a => a.length)
    .reduce((a, b) => a + b, 0)
console.log(countLetters);

let numbers=[10,1,34,24,15,36,46,324,54,343,666]
let sortedNum=numbers.sort((a,b)=>b-a) //kichikden boyuk regeme gore sort etmek uchun "a-b"
console.log(sortedNum);







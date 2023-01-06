let [a] = [10, 20, 30];
console.log(`A = ${a}`);

let[b, ,c] = [100, 150, 200];
console.log(`B = ${b} \nC = ${c}`);

let{d} = {a: 2, b: 4, c: 6, d: 8}
console.log(`D = ${d}`);

let{e: letraE} = {a: 2, b: 4, c: 6, d: 8, e: 10}
console.log(`E = ${letraE}`);

let{f: {g}} = {a: 2, b: 4, c: 6, d: 8, e: 10, f: {g: 12} }
console.log(`F = ${g}`);

let [,,,,,[,h]] = [1,2,3,4,5,[6,7]];
console.log(`H = ${h}`);
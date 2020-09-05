//Первый вариант(убирает отрицательные числа, но удаляут заполненый string)
let items = [ 10, -25, 'Hello world', null, true , '', false, 255, -7];
let fixer = items.filter(function(i){
    if (i >= 0){
        return items !== i 
    }
})
let explainer = fixer.map((arg) =>({[arg]:typeof arg}));

console.log(explainer);


//Второй вариант(переводит все значения внутри массива в объекты)

let items2 = [ 10, 'Hello world', null, true , '', false, 255, -7];
let explainer2 = items2.map((arg) =>({[arg]:typeof arg}));

console.log(explainer2);

//Третий вариант
let items3 = [ 10, 'Hello world', null, true , '', false, 255, -7];
let explainer3 = items.filter(e => {
return !!e; 
}).map(e => {
return {
type: typeof e, value: e
};
});

console.log(explainer3);

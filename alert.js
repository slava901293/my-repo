let hello = 'Hello world!';

let message;

// копируем значение 'Hello world' из переменной hello в переменную message
message = hello;
const alert = (s)=>{
    console.log(s)
}
// теперь две переменные содержат одинаковые данные
alert(hello); // Hello world!
alert(message); // Hello world!



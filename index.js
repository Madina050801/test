let color1 = 'white';
let color2 = 'black';
let color3;

color3 = color1; //white
color1 = color2; //black
color2 = color3; //white

console.log(color1);
console.log(color2);


//object
let user = {
    firstName: 'Ali',
    lastName: 'Valiyev',
    age: 25,
    group: 94,
    isMarried: false
};
user.lastName='Sobirov';
console.log(user.age);
console.log(user.lastName);
console.log(user['group']);


let phone = {
    model: 'Artel',
    price: '$90',
    color: 'black'
};
console.log(phone.model);
console.log(phone['color']);


//arrays
let numbers = [45, 56, 12, 89, 32, 74];
console.log(numbers);
console.log(numbers.length);
console.log(numbers[4]);

let colors = ['black', 'red', 'white', 'blue', 'green', 'yellow'];
colors[3]='orange';
console.log(colors[3]);

let students = [
    {
        firstName: 'Ali',
        lastName: 'Valiyev',
        age: 25,
        group: 94,
    },
    {
        firstName: 'Vali',
        lastName: 'Aliyev',
        age: 18,
        group: 91,
    },
    {
        firstName: 'Sobir',
        lastName: 'Qodirov',
        age: 22,
        group: 90,
    }

];

function getStudentList(){
    document.getElementById('firstName').innerHTML=students[1].firstName;
    document.getElementById('lastName').innerHTML=students[1].lastName;
    document.getElementById('age').innerHTML=students[1].age;
    document.getElementById('group').innerHTML=students[1].group;
}
getStudentList();

students[1].firstName='Qodir';
document.getElementById('userName').innerHTML=students[1].firstName
console.log(students);
console.log(students[1].firstName);
console.log(students[2].group);

//function

function greet(firstName) {
    console.log('hello ' + firstName)
}

greet('Azamat');

function yigindi(a, b) {
    console.log(a + b)
}

yigindi(45, 55);

function square(x) {
    return x * x
}

console.log(square(5));

console.log(5==='5'); //false

const pi=3.14;
console.log(pi);

console.log(6>6); //false

let hour=6;
let result=hour>8 ? 'open' : 'close';
console.log(result);

let ball=60;
let natija=ball>=60 ? "imtihondan o'tdingiz" : "Yiqildingiz";
console.log(natija);
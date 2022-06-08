//1. Переменные - let, const
let username = 'Dalida';

const adress = '15B Baker Street';
const shop_name = "Dalida's ECO shop";

console.log(`Welcome to ${shop_name} in ${adress}!`);

const seller = 'Dalida';

//2. Типы данных - string, number, boolean, null, undefined
let employees = 1;
let shopIsOpened = true;
shopIsClosed = false;

let customer;
customer = 'Tolganay';
let basket = null === null ? 'empty' : basket;
console.log('Now your basket: ' + basket)

// 3. Объекты - создание, добавление и удаление свойства (через прямые скобки тоже), добавление функции в объект

let product = {
    name: 'Produce Bag',
    price: 1000,
    colour: 'black',
    origin: 'UK',
    quantity: 10000,
};

product.size = 'M';

delete product.colour;
delete product['size'];

product['size'] = 'L';

product.inStock = (function () {
    if (product.quantity === 0) {'Out of stock';} 
    else {'In Stock';}
    });
product.inStock();

alert(product.name + '\nPrice: ' + product.price + '₸ \nStock: ' + inStock);

// 4. Массивы - использовать все методы, которые мы прошли. Не забывать про map, filter, rest и spread операторы. Еще slice ;)
let kitchen = ['Produce Bags','Shopping Bags','Bottle','Bamboo Spoon','Bamboo Fork'];
let bathroom = ['Soap','Shampoo','Hairbrush','Cleaning Bottle','Sponge'];

console.log(`Count of eco products: ${kitchen.length + bathroom.length}`);

kitchen.push('Thermos');
let lastKitchen = kitchen.pop();

bathroom.unshift('Toothbrush');
let firstBathroom = bathroom.shift();

let allEcoProducts = kitchen.concat(bathroom);

let bottles = allEcoProducts.filter((kitchen) => kitchen == 'Bottle');
console.log(bottles);
let splitted = allEcoProducts.map((bathroom) => marker(bathroom));
console.log(splitted);

function sumproducts(...args) {
    let sum = 0;
    for (let i of args) sum += i;
    return sum;
};
console.log(sumproducts(kitchen.length,bathroom.length));
console.log(sumproducts(kitchen.length,bathroom.length,allEcoProducts.length));

// 5. Сравнения - нестрогое и строгое, условный оператор, оператор нулевого слияния, преобразование к логическому типу, switch
alert(kitchen[0] < bathroom[0]);
alert(kitchen.length != '5');
alert(0 == false);
alert(0 === false);

let result = '5' === 5 ? true: false;
console.log(`Is '5' equal to 5: ${result}`);

let somEcoKitchenProduct;
let ecoKitchenProduct =  somEcoKitchenProduct ?? 'Bamboo Hairbrush';
console.log(ecoKitchenProduct);

let somEcoBathProduct;
if (somEcoBathProduct) {
    console.log(`Buy ${somEcoBathProduct}`);
 } else {
     console.log('Basket is empty');};

switch(allEcoProducts.length) {
    case 9:
        alert('few');
        break;
    case 10:
        alert('right!');
        break;
    case 11:
        alert('over');
        break;
    default:
        alert('no way');
};


// 6. Циклы - for, while, do while
let k = 0;
for (let i = 0; i < allEcoProducts.length; i++) {
    if (allEcoProducts[i] == 'Bottle') {
        k +=1;
    }
};
console.log(k);

let j = 0, join = '';
while (j < allEcoProducts.length) {
    join += allEcoProducts[j];
    j++;
};
console.log(join);

let p = 0, res = '';
do {
    p += 1;
    res += p + ' ';
} while (p > 0 && p < 6);
console.log(res);

//7. Функции - обычные, function expression, arrow functions, destructuring
function countProducts() {
    return allEcoProducts.length;
}
countProducts();

let x = function (y) {
    return y**2;
};
console.log(x(countProducts()));

let existProducts = (products) => {
    return allEcoProducts.includes(product)
};
console.log(`Is Furits in Eco Shop: ${existProducts('Fruits')}`);

function print({name: n, price: p}) {
    console.log(`${n} costs ${p}₸`)
};
print(product);

// 8. Импорт и экспорт - named export & import, export & import as, default export & import
import {countEcoProducts, buyEcoProducts} from './export.js';
countEcoProducts();
buyEcoProducts('Bottle');

import {countEcoProducts as cEP, buyEcoProducts as bEP} from './export.js';
cEP();
bEP('Bottle');

import * as ecoProducts from './export.js';
ecoProducts.countEcoProducts();
ecoProducts.buyEcoProducts('Bottle');

import ecoProducts from './exportDefault.js';
console.log(ecoProducts.length)
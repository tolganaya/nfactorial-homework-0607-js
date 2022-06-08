// 8. Импорт и экспорт - named export & import, export & import as, default export & import
let countEcoProducts = () => ecoProducts.length;
let buyEcoProducts = (product) => ecoProducts.includes(product);
export {countEcoProducts, buyEcoProducts};

export {countEcoProducts as cEP, buyEcoProducts as bEP};

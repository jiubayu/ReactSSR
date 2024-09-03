let p1 = Promise.reject(1);
let p2 = Promise.resolve(2);
Promise.all([p1, p2]).then((values) => console.log(values, 'values--'));
// console.log(p1, 'p1---')
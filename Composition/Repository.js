//const objs = [
//    { a: 'a', b: 'ab' },
//    { b: 'b' },
//    { c: 'c', b: 'cb' }
//  ];
//
//const collection = (a, e) => a.concat([e]);
//const a = objs.reduce(collection, []);
//console.log( 
//  'collection aggregation',
//  a,
//  a[1].b,
//  a[2].c,
//  `enumerable keys: ${ Object.keys(a) }`
//);

let data = ['Milka,4', 'Gosho,2', 'Penka,8']
data
    .map(item => item.split(','))
    .map(line => ({
        name: line[0],
        value: line[1]
    }))
    .filter(file => file.value > 2)
    .map(person => person.name)
    .forEach(el => console.log('each: ', el))

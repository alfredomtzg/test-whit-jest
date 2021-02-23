const text = "hello World";

const fruits = ['mango', 'pera', 'sandia', 'fresa', 'mandarina'];
const ten = 10;

test('Probar string', () => {
    expect(text).toMatch(/hello/);
})
test('Existe una fresa?', () => {
    expect(fruits).toContain('fresa');
})
test('El numero es mayor que: ', () => {
    expect(ten).toBeGreaterThan(7);
})
test('es un boleano', () => {
    expect(true).toBeTruthy();
})
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}
test('should be callback', () => {
    reverseString('porfirio', (str) => {
        expect(str).toBe('oirifrop')
    })
})

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Esto es un Error '))
        }
        resolve(str.split("").reverse().join(""))
    })
}

test('should promise', () => {
    return (reverseString2('Hola'))
        .then(str => {
            expect(str).toBe('aloH');
        })
})
test('should async/await', async () => {
    const string = await reverseString2('Hola'); 
    expect (string).toBe('aloH')
})

// correr código despues de cada prueba

// afterEach(()=>{
//     console.log('Después de cada prueba');
// })

// afterAll(() => { 
//     console.log('Después de todas las pruebas');
// })

// beforeEach(() => {
//     console.log('Antes de cada prueba');
// })

// beforeAll(() => {
//     console.log('Antes de todas las prueba');
// })
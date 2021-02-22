const text = "hello World";

const fruits = ['mango', 'pera', 'sandia', 'fresa', 'mandarina'];
const ten = 10;

test('Probar string', () => {
    expect(text).toMatch(/hello/);
})
test('Existe una fresa?', ()=> {
    expect(fruits).toContain('fresa');
})
test ('El numero es mayor que: ', () => {
    expect(ten).toBeGreaterThan(7);
})
test('es un boleano', () => {
    expect(true).toBeTruthy();
})
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}
test('should be callback', ()=>{
    reverseString('porfirio', (str)=>{
        expect(str).toBe('oirifrop')
    })
})

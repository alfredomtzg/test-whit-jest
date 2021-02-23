const randomString = require('../index');


describe('Probar las funcionalidades en bloque ', ()=> {
    test('should la función debe regresar un string', () => {
        expect(typeof(randomString())).toBe('string');
    });
    test('should not exist Luisiana', () => {
        expect(randomString()).not.toMatch(/Luisiana/);
    })

});



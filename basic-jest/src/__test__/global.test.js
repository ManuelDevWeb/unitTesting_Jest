/*
    Vamos a estar trabajando con la función “test”, esta recibe dos parametros:

    - Un string que describe lo que va a pasar.
    - Función anonima en la cual viene lo que se va a probar.
*/

// Pruebas para strings
const text = "I'm Ironman";

test('Debe contener un texto', () => {
    // Validando que la palabra recibida en toMatch() este contenida en la palabra de expect()
    expect(text).toMatch(/Ironman/)
});


// Pruebas para arrays
const fruits = ['manzana', 'banana', 'pera', 'lulo'];

test('Tenemos una banana?', () => {
    // Validando que la palabra banana este en el arreglo de fruits
    expect(fruits).toContain('banana');
});


// Pruebas para numbers
test('Mayor que', () => {
    // Validando que el número 10 es mayor que 9
    expect(10).toBeGreaterThan(9);
});


// Pruebas para booleans
test('Verdadero', () => {
    // Validando si el valor del expect es true
    expect(true).toBeTruthy();
});


// Pruebas para callbacks
const reverseString = (text, callback) => {
    // Callback para invertir una palabra
    callback(text.split('').reverse().join(''));
};

test('Probar un Callback', () => {
    // Enviando texto y función de callback a la función reverseString
    reverseString('Hola', textCallback => {
        // Validando que invertimos sea aloH
        expect(textCallback).toBe('aloH');
    })
});


// Pruebas para objetos
const personajes = {
    uno: "Homero",
    dos: "Marge",
    tres: "Lisa",
    cuatro: "Bart",
    cinco: "Maggie"
}

test('¿Existe el persona Bart en el objeto?', () => {
    // Validando que el personaje cuatro contiene Bart
    expect(personajes.cuatro).toContain('Bart')
});


// Pruebas para promesas .then
const reverseString2 = text => {
    return new Promise((resolve, reject) => {
        if (!text) {
            // Promesa rechazada
            reject(Error('Error'))
        }

        // Promesa resuelta
        resolve(text.split('').reverse().join(''));
    })
}

test('Probar una promesa ', () => {
    return reverseString2('Hola')
        .then(text => {
            // Validando que invertimos sea aloH
            expect(text).toBe('aloH');
        });
});


// Pruebas para promesas await
test('Probar async/await ', async() => {
    const string = await reverseString2('Hola');
    // Validando que invertimos sea aloH
    expect(string).toBe('aloH');
});


// // Funciones que se ejecutan despues de nuestras pruebas
// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'));


// // Funciones que se ejecutan antes de nuestras pruebas
// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las pruebas'));
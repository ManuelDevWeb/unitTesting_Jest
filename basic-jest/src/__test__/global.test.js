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
    reverseString('Hola', textCallback => {
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

// Pruebas para promesas
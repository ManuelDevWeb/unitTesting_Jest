/*
    Vamos a estar trabajando con la función “test”, esta recibe dos parametros:

    - Un string que describe lo que va a pasar.
    - Función anonima en la cual viene lo que se va a probar.
*/

/*
    Probar test de manera individual:
    -> npm run test src/__test__/index.test.js
    -> npx jest src/__test__/index.test.js
*/

// Importando función del index.js
const randomString = require('../index');

// Describir una serie de pruebas (dentro de un bloque) que utilizaremos en este proyecto
describe('Probar funcionalidades de randomString', () => {
    test('Probar la funcionalidad', () => {
        // Validando que la función retorne un string
        expect(typeof(randomString())).toBe('string');
    });
    test('Comprobar que no existe una ciudad ', () => {
        // Validando que no exista una ciudad en el arreglo de cities
        expect(randomString()).not.toMatch(/Bogota/);
    })
})
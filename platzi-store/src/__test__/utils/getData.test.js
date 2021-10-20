/* Tests a peticiones fetch */
import getData from '../../utils/getData';

// Describir una serie de pruebas (dentro de un bloque) que utilizaremos en este componente
describe('Fetch API', () => {
  // Utilizamos la estructura que nos provee jest-fetch-mock
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos ', () => {
    // Lo que hay en data es la respuesta que devuelve, la compararemos con la asiangada en la función toEqual()
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    return getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });
    // expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});

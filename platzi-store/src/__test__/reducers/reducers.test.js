import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

// Describir una serie de pruebas (dentro de un bloque) que utilizaremos en este componente
describe('Recuers', () => {
  // Validar que retornamos el estado inicial
  test('Retornar initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });

  // Validar cuando agregamos algo al carrito
  test('ADD_TO_CART ', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [
        ProductMock,
      ],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});

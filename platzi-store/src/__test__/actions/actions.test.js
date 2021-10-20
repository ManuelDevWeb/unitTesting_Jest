import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

// Describir una serie de pruebas (dentro de un bloque) que utilizaremos en este componente
describe('Actions', () => {
  const payload = ProductMock;
  // Validando el action addToCart
  test('addToCart Action ', () => {
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  // Validando el action removeFromCart
  test('removeFromCart Action', () => {
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});

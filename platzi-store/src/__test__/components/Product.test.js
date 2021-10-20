import React from 'react';
/* mount --> Cuando necesitas el DOM
   shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM
*/
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';

// Importando componente
import Product from '../../components/Product';

// Describir una serie de pruebas (dentro de un bloque) que utilizaremos en este componente
describe('<Product />', () => {
  // Validando si estamos montando Product
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });

  // Simulando funcionamiento del click en el boton comprar
  test('Comprobar el boton de comprar', () => {
    // Llamar función (No llamamos la real)
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});

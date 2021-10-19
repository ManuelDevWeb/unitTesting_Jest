import React from 'react';
/* mount --> Cuando necesitas el DOM
   shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM
*/
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';

// Importando componente
import Header from '../../components/Header';

// Describir una serie de pruebas (dentro de un bloque) que utilizaremos en este componente
describe('<Header />', () => {
  // Validando si se esta montando Header
  test('Render del componente Header ', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });

  // Validando que el elemento con clase Header-title tiene un texto igual a Platzi Store
  test('Render del título', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

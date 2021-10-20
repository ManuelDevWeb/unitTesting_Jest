import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
// Importando componente
import Footer from '../../components/Footer';

// Describir una serie de pruebas (dentro de un bloque) que utilizaremos en este componente
describe('<Footer />', () => {
  const footer = mount(<Footer />);

  // Validando que se monto nuestro componente Footer
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  // Validando que el elemento con clase Footer-title tiene un texto igual a Platzi Store
  test('Render del título ', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    // Footer no esta conectado con Redux, por eso se pasa asi
    const footer = create(<Footer />);
    // Convertimos el componente a un JSON, si no existe el snapshot lo crea y lo comprueba
    expect(footer.toJSON()).toMatchSnapshot();
  });
});

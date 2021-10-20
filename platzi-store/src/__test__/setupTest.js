/* eslint-disable import/no-extraneous-dependencies */
// Importando enzyme para facilitar el test a componentes en React.
import { configure } from 'enzyme';
// Importando adaptador para la versión de React que estemos utilizando.
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// Permite capturar peticiones y poderlas ejecutar sin necesidad de utilizar fetch
global.fetch = require('jest-fetch-mock');
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.window = window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;
global.open = open;
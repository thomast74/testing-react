import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });


// chai setup
global.expect = expect;

// enzyme setup
global.mount = mount;
global.render = render;
global.shallow = shallow;

// sinon setup
global.sinon = sinon;
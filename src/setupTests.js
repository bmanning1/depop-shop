// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import snapshotDiff from 'snapshot-diff';
import 'snapshot-diff/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import enzymeToJson from 'enzyme-to-json/serializer';

configure({ adapter: new Adapter() });

snapshotDiff.setSerializers([
    enzymeToJson
]);
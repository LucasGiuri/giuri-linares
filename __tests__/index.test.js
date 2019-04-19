import React from 'react';
import renderer from 'react-test-renderer';

import App from '../pages/index.js';
jest.mock('../components/Content/Content', () => 'Content');

describe('Index', () => {
  it('Index basic render snapshoot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})

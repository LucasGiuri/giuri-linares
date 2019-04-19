import React from 'react';
import renderer from 'react-test-renderer';

import Nation from '../pages/nation.js';
jest.mock('../components/Content/Content', () => 'Content');

describe('Nation', () => {
  it('Nation basic render', () => {
    const component = renderer.create(<Nation />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})

import React from 'react';
import Star from '../Star';
import renderer from 'react-test-renderer';

// it;//断言 -> if xxx 其有xx行为 
it('渲染正常', () => {
  const tree = renderer.create(<Star value={8} />).toJSON();
  expect(tree).toMatchSnapshot();
});

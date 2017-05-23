import React from 'react';
import TaskForm from '../pages/TaskForm';
import renderer from 'react-test-renderer';

test('TaskForm renders correctly empty categories', () => {
  const component = renderer.create(<TaskForm categories={ [] } />).toJSON();
  expect(component).toMatchSnapshot();
});

test('TaskForm renders correctly only featured appear', () => {
  const categories = [
    {
      id: 1,
      name: 'a',
      img: 'a',
      featured: true,
    },
    {
      id: 2,
      name: 'b',
      img: 'b',
      featured: true,
    }];
  const component = renderer.create(<TaskForm categories={ categories } />).toJSON();
  expect(component).toMatchSnapshot();

});

import React from 'react';
import { Text, StyleSheet } from 'react-vr';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import _Text from '../_Text';

test('_Text renders a _Text component', () => {
  const tree = renderer.create(<_Text />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('_Text renders a Text component', () => {
  const wrapper = shallow(<_Text text="Hello world!" styles={stylesheet.subtitle} />);
  console.log(wrapper.instance().props.text);
  expect(wrapper.instance().props.text).toBe('Hello world!');
});


const stylesheet = StyleSheet.create({
  subtitle: {
    fontSize: 0.2
  },
});


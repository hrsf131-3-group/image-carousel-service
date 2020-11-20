import React from 'react';
import {mount, shallow} from 'enzyme';
import Title from '../../client/src/components/Title.jsx';

describe('<Title />', () => {
  it('check if title renders', () => {
    const wrapper = mount(<Title title = 'titleText'/>);
    expect(wrapper.find('h2').text()).toBe('titleText');
  });
});
import React from 'react';
import renderer from 'react-test-renderer';

import AppCode from './AppCode';

const dictionary = [ { 'Русский текст': 'Russian text' } ];

describe('AppCode test   ', () => {
    it('test 1', () => {
        const component = renderer.create(<AppCode dictionary={dictionary} />);
        const result = component.toJSON();
        expect(result).toMatchSnapshot();
    });
});

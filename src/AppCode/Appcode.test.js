import React from 'react';
import renderer from 'react-test-renderer';

import AppCode from 'AppCode';

const dictionary = [ { 'Русский текст': 'Russian text' } ];

describe('AppCode test   ', () => {
    it('test 1 - Always fails because of random side effect', () => {
        const component = renderer.create(<AppCode />);
        const result = component.toJSON();
        expect(result).toMatchSnapshot();
    });
});

import React, { PureComponent } from 'react';

import dictionary from './data/dictionary';
import AppCode from './AppCode';

class App extends PureComponent {
    render() {
        return <AppCode dictionary={dictionary} />;
    }
}

export default App;

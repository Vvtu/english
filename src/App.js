import React, { PureComponent } from 'react';

import ThemeProvider from 'arui-feather/theme-provider';
import Label from 'arui-feather/label';
import Button from 'arui-feather/button';
import CheckBox from 'arui-feather/checkbox';

import { dictionary, settings } from './data/dictionary.json';

// import Header from './containers/Header/Header';
// import Sidebar from './containers/Sidebar/Sidebar';
// import EditArea from './containers/EditArea/EditArea';
// import Footer from './containers/Footer/Footer';

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 1, showEnglish: true };
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary');
    console.error(error, info);
  }

  render() {
    const { activeIndex, showEnglish } = this.state;
    const { theme, size } = settings || {};
    const activeObj = dictionary[activeIndex];
    const russian = Object.keys(activeObj || {})[0];
    const english = showEnglish && Object.values(activeObj || {})[0];

    return (
      <div className={'theme__backgroundcolor_' + theme }>
        <ThemeProvider theme={theme}>
          <div className="app__grid">
            <div className="app__info">
              <div className="app__info2">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>
            <div className="app__russian">
              <div className="app__center">
                <div className="overflow_y_scroll">
                  <Label size={size}>{russian}</Label>
                </div>
              </div>
            </div>
            <div className="app__english">
              <div className="app__center">
                <div className="overflow_y_scroll">
                  <Label className="color_green" size={size}>
                    {english}
                  </Label>
                </div>
              </div>
            </div>
            {/* <div className="app__left_button">
              <div className="app__center">L</div>
            </div>
            <div className="app__right_button">
              <div className="app__center">

              <Button
                size={'s'}
              />
              </div>
            </div> */}
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;

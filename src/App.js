import React, { PureComponent } from 'react';

import ThemeProvider from 'arui-feather/theme-provider';
import Label from 'arui-feather/label';
import Icon from 'arui-feather/icon';

import IconBack from './iconback.svg';

import { dictionary, settings } from './data/dictionary.json';
import './App.css';

import { getItemFormLocalStorage, arrayRandomOrder } from './lib/lib';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      forwardHistory: [],
      history: [],
      showEnglish: false,
      randomDictionary: arrayRandomOrder(dictionary),
    };
  }

  incrementLocalStorage = (int) => {
    const { activeIndex, randomDictionary, showEnglish } = this.state;
    if (showEnglish) {
      const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
      const russian = Object.keys(activeObj || {})[0];
      if (russian) {
        const item = getItemFormLocalStorage(russian);
        const { shown, failed } = item;
        const newItem = shown + 1 + '=' + (failed + (int || 0));
        localStorage.setItem(russian, newItem);
      }
    }
  };

  handleFailClicked = (e) => this.handleForwardClicked(e, 1);

  handleForwardClicked = (e, int) => {
    e.preventDefault();
    this.incrementLocalStorage(int);

    const { activeIndex, randomDictionary } = this.state;

    const len = randomDictionary.length;
    const newActiveIndex = activeIndex === len - 1 ? 0 : activeIndex + 1;
    console.log('handleForwardClicked newActiveIndex = ', newActiveIndex);
    this.setState({
      activeIndex: newActiveIndex,
      showEnglish: false,
    });
  };

  handleBackClicked = (e) => {
    e.preventDefault();
    this.incrementLocalStorage(1);

    const { activeIndex, randomDictionary } = this.state;
    const len = randomDictionary.length;
    const newActiveIndex = activeIndex === 0 ? len - 1 : activeIndex - 1;
    console.log('handleBackClicked newActiveIndex = ', newActiveIndex);
    this.setState({
      activeIndex: newActiveIndex,
      showEnglish: false,
    });
  };

  handleShowEnglishClicked = (e) => {
    e.preventDefault();
    this.setState({
      showEnglish: true,
    });
  };

  handleRemoveItemClicked = (e) => {
    e.preventDefault();
    const { activeIndex, randomDictionary } = this.state;
    if (activeIndex !== undefined && activeIndex < randomDictionary.length) {
      const newRandomDictionary = randomDictionary
        .slice(0, activeIndex)
        .concat(randomDictionary.slice(activeIndex + 1));
      const newActiveIndex = activeIndex >= newRandomDictionary.length ? 0 : activeIndex;
      this.setState({
        activeIndex: newActiveIndex,
        randomDictionary: newRandomDictionary,
        showEnglish: false,
      });
    }
  };

  render() {
    const { activeIndex, showEnglish, randomDictionary } = this.state;
    const { theme, size } = settings || {};
    const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
    const russian = Object.keys(activeObj || {})[0];
    const english = showEnglish && Object.values(activeObj || {})[0];

    const { shown, failed } = getItemFormLocalStorage(russian);

    return (
      <div className={'theme__backgroundcolor_' + theme}>
        <ThemeProvider theme={theme}>
          <div className="app__grid">
            <div className="app__info">
              <div className="app__info2">
                <img
                  alt={'back'}
                  height={32}
                  onClick={this.handleBackClicked}
                  onDoubleClick={this.handleBackClicked}
                  src={IconBack}
                  width={32}
                />

                {!showEnglish && (
                  <div>
                    <Label size={size}>{shown}</Label>
                    {failed > 0 && (
                      <Label size={size} className="red-color">
                        {'\u00A0/ ' + failed}
                      </Label>
                    )}
                  </div>
                )}

                {!showEnglish && (
                  <div
                    onClick={this.handleShowEnglishClicked}
                    onDoubleClick={this.handleShowEnglishClicked}
                  >
                    <Icon name="tool-calendar" colored={true} size={size} />
                  </div>
                )}
                {showEnglish && (
                  <div
                    onClick={this.handleRemoveItemClicked}
                    onDoubleClick={this.handleRemoveItemClicked}
                  >
                    <Icon name="action-error" colored={true} size={size} />
                  </div>
                )}
                {showEnglish && (
                  <div
                    onClick={this.handleFailClicked}
                    onDoubleClick={this.handleFailClicked}
                  >
                    <Icon name="action-fail" colored={true} size={size} />
                  </div>
                )}
                <img
                  alt={'back'}
                  className="invert__horizontal"
                  height={32}
                  onClick={this.handleForwardClicked}
                  onDoubleClick={this.handleForwardClicked}
                  src={IconBack}
                  width={32}
                />
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
                  <Label className="eng_text_color" size={size}>
                    {english}
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;

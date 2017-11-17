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

  handleBackClicked = () => {
    const { activeIndex, randomDictionary } = this.state;
    const len = randomDictionary.length;
    const newActiveIndex = activeIndex === 0 ? len - 1 : activeIndex - 1;
    console.log('handleBackClicked newActiveIndex = ', newActiveIndex);
    this.setState({
      activeIndex: newActiveIndex,
      showEnglish: false,
    });
  };

  handleForwardClicked = () => {
    const { activeIndex, randomDictionary } = this.state;
    const len = randomDictionary.length;
    const newActiveIndex = activeIndex === len - 1 ? 0 : activeIndex + 1;
    console.log('handleForwardClicked newActiveIndex = ', newActiveIndex);
    this.setState({
      activeIndex: newActiveIndex,
      showEnglish: false,
    });
  };

  handleShowEnglishClicked = () => {
    if (this.state.activeIndex !== undefined) {
      this.setState({
        showEnglish: true,
      });
    }
  };

  handleFailClicked = () => this.handleUserAnswerClicked(1);
  handleOkClicked = () => this.handleUserAnswerClicked(0);

  handleUserAnswerClicked(int) {
    const { activeIndex, randomDictionary } = this.state;
    const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
    const russian = Object.keys(activeObj || {})[0];
    if (russian) {
      const item = getItemFormLocalStorage(russian);
      const { shown, failed } = item;
      const newItem = shown + 1 + '=' + (failed + int);
      localStorage.setItem(russian, newItem);
    }
    this.handleForwardClicked();
  }

  handleRemoveItemClicked = () => {
    const { activeIndex, randomDictionary } = this.state;
    if (activeIndex !== undefined && activeIndex < randomDictionary.length) {
      const newRandomDictionary = randomDictionary
        .slice(0, activeIndex)
        .concat(randomDictionary.slice(activeIndex));
      const newActiveIndex = Math.min(activeIndex, newRandomDictionary.length);
      this.setState({
        activeIndex: newActiveIndex,
        randomDictionary: newRandomDictionary,
        showEnglish: true,
      });
    }
  };

  render() {
    const { activeIndex, showEnglish, randomDictionary } = this.state;
    const { theme, size } = settings || {};
    const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
    const russian = Object.keys(activeObj || {})[0];
    const english = showEnglish && Object.values(activeObj || {})[0];

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
                  src={IconBack}
                  width={32}
                />
                {!showEnglish && (
                  <div onClick={this.handleShowEnglishClicked}>
                    <Icon name="tool-calendar" colored={true} size={size} />
                  </div>
                )}
                {showEnglish && (
                  <div onClick={this.handleRemoveItemClicked}>
                    <Icon name="action-error" colored={true} size={size} />
                  </div>
                )}
                {showEnglish && (
                  <div onClick={this.handleFailClicked}>
                    <Icon name="action-fail" colored={true} size={size} />
                  </div>
                )}
                {showEnglish && (
                  <div onClick={this.handleOkClicked}>
                    <Icon name="action-ok" colored={true} size={size} />
                  </div>
                )}

                <img
                  alt={'back'}
                  className="invert__horizontal"
                  height={32}
                  onClick={this.handleForwardClicked}
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

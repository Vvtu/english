import React, { PureComponent } from 'react';

import ThemeProvider from 'arui-feather/theme-provider';
import Label from 'arui-feather/label';
import Icon from 'arui-feather/icon';

import IconBack from './iconback.svg';

import { dictionary, settings } from './data/dictionary.json';
import './App.css';

const getItemFormLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  const arr = (item || '').split('=');
  const shown = parseInt(arr[0], 10) || 0;
  let failed = 0;
  if (arr.length > 1) {
    failed = parseInt(arr[1], 10) || 0;
  }
  return { shown, failed };
};

// const getRandomInt = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   //The maximum is exclusive and the minimum is inclusive
//   return Math.floor(Math.random() * (max - min)) + min;
// };

const getNewActiveIndex = () => {
  let i = 0;
  let index = -1;
  while (i < 10 && index === -1) {
    i += 1;
    index = dictionary.findIndex((elem) => {
      const russian = Object.keys(elem || {})[0];
      if (!russian) {
        return false;
      }
      const stat = getItemFormLocalStorage(russian);
      const { shown, failed } = stat;
      let velocityToShow = (failed * 1.3 + 1) / (shown + 1);
      if (velocityToShow > 1) {
        velocityToShow = 1;
      }
      const rnd = Math.random();
      if (rnd < velocityToShow * 0.1) {
        return true;
      }
      return false;
    });
  }
  return index !== -1 ? index : undefined;
};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      forwardHistory: [],
      history: [],
      showEnglish: false,
    };
  }

  handleBackClicked = () => {
    const { activeIndex, forwardHistory, history } = this.state;
    const len = history.length;
    if (len === 0) {
      console.log('handleForwardClicked newActiveIndex = NO ');
      return;
    }
    const newActiveIndex = history[len - 1];
    const newForwardHistory = forwardHistory.concat(activeIndex);
    const newHistory = history.slice(0, len - 1);
    this.setState({
      activeIndex: newActiveIndex,
      forwardHistory: newForwardHistory,
      history: newHistory,
      showEnglish: false,
    });
    console.log('handleForwardClicked newActiveIndex = ', newActiveIndex);
  };

  handleForwardClicked = () => {
    const { activeIndex, forwardHistory, history } = this.state;
    let newActiveIndex;
    let newForwardHistory;
    let forwardLen = forwardHistory.length;
    if (forwardLen > 0) {
      newActiveIndex = forwardHistory[forwardLen - 1];
      newForwardHistory = forwardHistory.slice(0, forwardLen - 1);
    } else {
      newForwardHistory = [];
      newActiveIndex = getNewActiveIndex();
    }
    console.log('handleForwardClicked newActiveIndex = ', newActiveIndex);

    const newHistory = history.concat(activeIndex);
    this.setState({
      activeIndex: newActiveIndex,
      forwardHistory: newForwardHistory,
      history: newHistory,
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
    const { activeIndex } = this.state;
    const activeObj = activeIndex !== undefined && dictionary[activeIndex];
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
    const { activeIndex } = this.state;
    if (activeIndex !== undefined && activeIndex < dictionary.length) {
      dictionary.splice(activeIndex, 1);
    }
    this.handleForwardClicked();
  };

  render() {
    const { activeIndex, showEnglish } = this.state;
    const { theme, size } = settings || {};
    const activeObj = activeIndex !== undefined && dictionary[activeIndex];
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

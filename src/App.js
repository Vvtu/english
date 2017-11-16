import React, { PureComponent } from 'react';

import ThemeProvider from 'arui-feather/theme-provider';
import Label from 'arui-feather/label';
import Icon from 'arui-feather/icon';

import IconBack from './iconback.svg';

import { dictionary, settings } from './data/dictionary.json';
import './App.css';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
};

const getItemFormLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  const arr = (item || '').split('=');
  const shown = parseInt(arr[0], 10) || 0;
  let hit = 0;
  if (arr.length > 1) {
    hit = parseInt(arr[1], 10) || 0;
  }
  return { shown, hit };
};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: undefined,
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
      newActiveIndex = getRandomInt(0, 4);
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

  handleFailClicked = () => this.handleUserAnswerClicked(0);
  handleOkClicked = () => this.handleUserAnswerClicked(1);

  handleUserAnswerClicked(int) {
    const { activeIndex } = this.state;
    const activeObj = activeIndex !== undefined && dictionary[activeIndex];
    const russian = Object.keys(activeObj || {})[0];
    if (russian) {
      const item = getItemFormLocalStorage(russian);
      const { shown, hit } = item;
      const newItem = shown + 1 + '=' + (hit + int);
      localStorage.setItem(russian, newItem);
    }
    this.handleForwardClicked();
  }

  handleRemoveItemClicked = () => {
    const { activeIndex } = this.state;
    if (activeIndex !== undefined) {
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
                  src={IconBack}
                  width={32}
                  onClick={this.handleBackClicked}
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
                  height={32}
                  src={IconBack}
                  className="invert__horizontal"
                  width={32}
                  onClick={this.handleForwardClicked}
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
                  <Label className="color_green" size={size}>
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

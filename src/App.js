import React, { PureComponent } from 'react';

import ThemeProvider from 'arui-feather/theme-provider';
import Label from 'arui-feather/label';
import Icon from 'arui-feather/icon';

import IconBack from './iconback.svg';

import { dictionary, settings } from './data/dictionary.json';
import { loadItem, saveItem } from './localStorage';
import './App.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

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
  componentDidCatch(error, info) {
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary');
    console.error(error, info);
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
      const item = loadItem(russian);
      const { shown, hit } = item || {};
      const newItem = { shown: (shown || 0) + 1, hit: (hit || 0) + int };
      saveItem(russian, newItem);
    }
    this.handleForwardClicked();
  }

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
                {!showEnglish && (
                  <div onClick={this.handleShowEnglishClicked}>
                    <Icon name="tool-calendar" colored={true} size={size} />
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

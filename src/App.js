import React, { PureComponent } from 'react';

import IconBack from './svg/iconback.svg';
import IconBackGreen from './svg/iconback_green.svg';
import IconCancel from './svg/iconcancel.svg';

import { dictionary } from './data/dictionary.json';
import './App.css';

import { getItemFormLocalStorage, arrayRandomOrder, filterDeletedOff } from './lib/lib';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      forwardHistory: [],
      history: [],
      showEnglish: false,
      randomDictionary: arrayRandomOrder(filterDeletedOff(dictionary)),
    };
  }

  incrementLocalStorage = (int) => {
    const { activeIndex, randomDictionary, showEnglish } = this.state;
    if (showEnglish) {
      const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
      const russian = Object.keys(activeObj || {})[0];
      if (russian) {
        const item = getItemFormLocalStorage(russian);
        const { shown, failed, isDeleted } = item;
        const newItem =
          shown + 1 + '=' + (failed + (int || 0)) + isDeleted ? '=' + isDeleted : '';
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
      const activeObj = randomDictionary[activeIndex];
      const russian = Object.keys(activeObj || {})[0];
      if (russian) {
        const { shown, failed } = getItemFormLocalStorage(russian);
        const newItem = shown + '=' + failed + '=d';
        localStorage.setItem(russian, newItem);
      }
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
    const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
    const russian = Object.keys(activeObj || {})[0];
    const english = showEnglish && Object.values(activeObj || {})[0];

    const { shown, failed } = getItemFormLocalStorage(russian);

    return (
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
                <span className="font_size_24">{shown}</span>
                {failed > 0 && (
                  <span className="font_size_24 red_text_color">
                    {'\u00A0/ ' + failed}
                  </span>
                )}
              </div>
            )}

            {!showEnglish && (
              <img
                alt="down"
                className="icon_rotate_down"
                height={32}
                onClick={this.handleShowEnglishClicked}
                onDoubleClick={this.handleShowEnglishClicked}
                src={IconBackGreen}
                width={32}
              />
            )}
            {showEnglish && (
              <img
                alt="down"
                height={32}
                onClick={this.handleRemoveItemClicked}
                onDoubleClick={this.handleRemoveItemClicked}
                src={IconCancel}
                width={32}
              />
            )}
            {showEnglish && (
              <div
                onClick={this.handleFailClicked}
                onDoubleClick={this.handleFailClicked}
                className="eng_text_color font_size_32"
              >
                NO
              </div>
            )}
            <img
              alt={'back'}
              className="icon_invert__horizontal"
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
              <div className="font_size_24">{russian}</div>
            </div>
          </div>
        </div>
        <div className="app__english">
          <div className="app__center">
            <div className="overflow_y_scroll">
              <div className="font_size_24 eng_text_color">{english}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { PureComponent } from 'react';

import IconBack from './svg/iconback.svg';
import IconBackGreen from './svg/iconback_green.svg';
import IconCancel from './svg/iconcancel.svg';

import dictionary from './data/dictionary';
import './App.css';

import { getItemFormLocalStorage, arrayRandomOrder, filterDeletedOff } from './lib/lib';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            showEnglish: false,
            randomDictionary: arrayRandomOrder(filterDeletedOff(dictionary))
        };
    }

    incrementLocalStorage = () => {
        const { activeIndex, randomDictionary, showEnglish } = this.state;
        if (showEnglish) {
            const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
            const russian = Object.keys(activeObj || {})[0];
            if (russian) {
                const item = getItemFormLocalStorage(russian);
                const shown = parseInt(item, 10) || 0;
                const newItem = String(shown + 1);
                localStorage.setItem(russian, newItem);
            }
        }
    };

    handleForwardClicked = (e) => {
        e.preventDefault();
        this.incrementLocalStorage();

        const { activeIndex, randomDictionary } = this.state;

        const len = randomDictionary.length;
        const newActiveIndex = activeIndex === len - 1 ? 0 : activeIndex + 1;
        console.log('handleForwardClicked newActiveIndex = ', newActiveIndex);
        this.setState({
            activeIndex: newActiveIndex,
            showEnglish: false
        });
    };

    handleBackClicked = (e) => {
        e.preventDefault();
        this.incrementLocalStorage();

        const { activeIndex, randomDictionary } = this.state;
        const len = randomDictionary.length;
        const newActiveIndex = activeIndex === 0 ? len - 1 : activeIndex - 1;
        console.log('handleBackClicked newActiveIndex = ', newActiveIndex);
        this.setState({
            activeIndex: newActiveIndex,
            showEnglish: false
        });
    };

    handleShowEnglishClicked = (e) => {
        e.preventDefault();
        this.setState({
            showEnglish: true
        });
    };

    handleRemoveItemClicked = (e) => {
        e.preventDefault();
        const { activeIndex, randomDictionary } = this.state;
        if (activeIndex !== undefined && activeIndex < randomDictionary.length) {
            const activeObj = randomDictionary[activeIndex];
            const russian = Object.keys(activeObj || {})[0];
            if (russian) {
                localStorage.setItem(russian, 'd');
            }
            const newRandomDictionary = randomDictionary
                .slice(0, activeIndex)
                .concat(randomDictionary.slice(activeIndex + 1));
            const newActiveIndex = activeIndex >= newRandomDictionary.length ? 0 : activeIndex;
            this.setState({
                activeIndex: newActiveIndex,
                randomDictionary: newRandomDictionary,
                showEnglish: false
            });
        }
    };

    render() {
        const { activeIndex, showEnglish, randomDictionary } = this.state;
        const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
        const russian = Object.keys(activeObj || {})[0];
        const english = showEnglish && Object.values(activeObj || {})[0];
        const count = randomDictionary.length;

        const item = getItemFormLocalStorage(russian);
        const shown = parseInt(item, 10) || 0;

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

                        <div>
                            <span>{activeIndex + 1 + ' / ' + count}</span>
                            <span className="eng_text_color">{'\u00A0(' + shown + ')'}</span>
                        </div>

                        {!showEnglish && (
                            <img
                                alt="show english"
                                className="icon_rotate"
                                height={32}
                                onClick={this.handleShowEnglishClicked}
                                onDoubleClick={this.handleShowEnglishClicked}
                                src={IconBackGreen}
                                width={32}
                            />
                        )}
                        {showEnglish && (
                            <img
                                alt="remove item"
                                height={32}
                                onClick={this.handleRemoveItemClicked}
                                onDoubleClick={this.handleRemoveItemClicked}
                                src={IconCancel}
                                width={32}
                            />
                        )}

                        <img
                            alt={'forward'}
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
                            <div>{russian}</div>
                        </div>
                    </div>
                </div>
                <div className="app__english">
                    <div className="app__center">
                        <div className="overflow_y_scroll">
                            <div className="eng_text_color">{english}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

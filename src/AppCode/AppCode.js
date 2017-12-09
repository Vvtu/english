import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PopupWindowSettings from '../PopupWindowSettings';

import IconBack from './svg/iconback.svg';
import IconBackGreen from './svg/iconback_green.svg';
import SettingsIcon from './svg/settings.svg';

import './AppCode.css';

import { getItemFormLocalStorage, arrayRandomOrder, filterDeletedOff } from '../lib/lib';

class App extends PureComponent {
    static propTypes = {
        dictionary: PropTypes.array.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            showEnglish: false,
            showSettings: false,
            randomDictionary: arrayRandomOrder(filterDeletedOff(this.props.dictionary))
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

    handleSettingsClicked = (e) => {
        e.preventDefault();
        this.setState({
            showSettings: true
        });
    };
    handleClosePopupClicked = (e) => {
        e.preventDefault();
        this.setState({
            showSettings: false
        });
    };

    handleHideItemClicked = (e) => {
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
                showEnglish: false,
                showSettings: false
            });
        }
    };

    handleStatisticClicked = (e) => {
        if (this.state.showEnglish) {
            this.handleForwardClicked(e);
        } else {
            this.handleShowEnglishClicked(e);
        }
    };

    handleUnhideAllItemsClicked = (e) => {
        localStorage.clear();
        this.setState({
            activeIndex: 0,
            randomDictionary: arrayRandomOrder(filterDeletedOff(this.props.dictionary)),
            showEnglish: false,
            showSettings: false,
        });
    };

    render() {
        const { activeIndex, randomDictionary, showEnglish, showSettings } = this.state;
        const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
        const russian = Object.keys(activeObj || {})[0];
        const english = showEnglish && Object.values(activeObj || {})[0];
        const count = randomDictionary.length;

        const item = getItemFormLocalStorage(russian);
        const shown = parseInt(item, 10) || 0;

        return (
            <div>
                <div className="app__grid">
                    {showSettings && (
                        <PopupWindowSettings
                            handleClosePopupClicked={this.handleClosePopupClicked}
                            handleHideItemClicked={this.handleHideItemClicked}
                            handleUnhideAllItemsClicked={this.handleUnhideAllItemsClicked}
                        />
                    )}

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

                            <img
                                alt="settingd"
                                height={32}
                                onClick={this.handleSettingsClicked}
                                onDoubleClick={this.handleSettingsClicked}
                                src={SettingsIcon}
                                width={32}
                            />

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
                                    alt="english is shown"
                                    className="icon_rotate_back"
                                    height={32}
                                    onClick={this.handleForwardClicked}
                                    onDoubleClick={this.handleForwardClicked}
                                    src={IconBackGreen}
                                    width={32}
                                />
                            )}

                            <div
                                onClick={this.handleStatisticClicked}
                                onDoubleClick={this.handleStatisticClicked}
                            >
                                <span>{activeIndex + 1 + '/' + count}</span>
                                <span className="eng_text_color">{'(' + shown + ')'}</span>
                            </div>

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
            </div>
        );
    }
}

export default App;

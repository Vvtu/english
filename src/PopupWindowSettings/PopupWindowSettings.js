import React, { PureComponent } from 'react';

import CancelIconWhite from './svg/iconcancel-white.svg';
import CancelIconRed from './svg/iconcancel-red.svg';

import './PopupWindowSettings.css';

class PopupWindowSettings extends PureComponent {
    render() {
        return (
            <div>
                <div className="full_screen_div_opacity" />
                <div className="full_screen_div">
                    <div className="popup_window">
                        <div className="cancel_button" onClick={this.changeBoardValueByPath}>
                            <img
                                alt={'cancel'}
                                height={12}
                                onClick={this.handleBackClicked}
                                onDoubleClick={this.handleBackClicked}
                                src={CancelIconWhite}
                                width={12}
                            />
                        </div>
                        <div className="popup__row">
                            <img
                                alt={'cancel'}
                                height={32}
                                onClick={this.handleBackClicked}
                                onDoubleClick={this.handleBackClicked}
                                src={CancelIconRed}
                                width={32}
                            />
                            <div className="popup__gap" />

                            <div>Settings</div>
                        </div>
                        <div className="popup__row">
                            <img
                                alt={'cancel'}
                                height={32}
                                onClick={this.handleBackClicked}
                                onDoubleClick={this.handleBackClicked}
                                src={CancelIconRed}
                                width={32}
                            />
                            <div className="popup__gap" />

                            <div>Hide item</div>
                        </div>

                        <div className="popup__row">
                            <img
                                alt={'cancel'}
                                height={32}
                                onClick={this.handleBackClicked}
                                onDoubleClick={this.handleBackClicked}
                                src={CancelIconRed}
                                width={32}
                            />
                            <div className="popup__gap" />

                            <div>Unhide all items</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupWindowSettings;

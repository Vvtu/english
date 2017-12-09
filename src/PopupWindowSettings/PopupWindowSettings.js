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
                        <div>Settings</div>
                        <div>23412342314231432</div>
                        <div>23412342314231432142314 </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupWindowSettings;

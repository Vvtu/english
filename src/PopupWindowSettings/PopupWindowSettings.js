import React, { PureComponent } from 'react';

import CancelIconWhite from './svg/iconcancel-white.svg';
import CancelIconRed from './svg/iconcancel-red.svg';

import './PopupWindowSettings.css';

const menuRow = (menuItem) => (
    <div
        className="popup__row"
        onClick={menuItem.handleClicked}
        onDoubleClick={menuItem.handleClicked}
    >
        <img alt={'cancel'} height={32} src={menuItem.icon} width={32} />
        <div className="popup__gap" />
        <div>{menuItem.label}</div>
    </div>
);
const noop = () => {};

class PopupWindowSettings extends PureComponent {
    render() {
        const {
            handleClosePopupClicked,
            handleHideItemClicked,
            handleUnhideAllItemsClicked
        } = this.props;
        return (
            <div>
                <div className="full_screen_div_opacity" />
                <div
                    className="full_screen_div"
                    onClick={handleClosePopupClicked}
                    onDoubleClick={handleClosePopupClicked}
                >
                    <div className="popup_window">
                        <div className="cancel_button" onClick={this.changeBoardValueByPath}>
                            <img
                                alt={'cancel'}
                                height={12}
                                onClick={handleClosePopupClicked}
                                onDoubleClick={handleClosePopupClicked}
                                src={CancelIconWhite}
                                width={12}
                            />
                        </div>
                        {menuRow({
                            label: 'Settings',
                            icon: CancelIconRed,
                            handleClicked: noop
                        })}

                        {menuRow({
                            label: 'Hide item',
                            icon: CancelIconRed,
                            handleClicked: handleHideItemClicked
                        })}

                        {menuRow({
                            label: 'Unhide all items',
                            icon: CancelIconRed,
                            handleClicked: handleUnhideAllItemsClicked
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupWindowSettings;

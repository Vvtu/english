import React, { PureComponent } from 'react';

import CancelIcon from './svg/CancelIcon';
import ClearAllInfo from './svg/ClearAllInfo';

import './PopupWindowForAdvancedMenu.css';

const menuRow = (menuItem) => (
    <div
        className="popup__row"
        onClick={menuItem.handleClicked}
        onDoubleClick={menuItem.handleClicked}
    >
        <menuItem.Icon {...menuItem.props} />
        <div className="popup__gap" />
        <div>{menuItem.label}</div>
    </div>
);

const noop = () => {};

class PopupWindowForAdvancedMenu extends PureComponent {
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
                            <CancelIcon
                                fill="#000000"
                                height={16}
                                onClick={handleClosePopupClicked}
                                onDoubleClick={handleClosePopupClicked}
                                width={16}
                            />
                        </div>
                        {menuRow({
                            label: 'Advanced:',
                            Icon: CancelIcon,
                            props: { height: '32', width: '32', fill: '#ffffff' },
                            handleClicked: noop
                        })}

                        {menuRow({
                            label: 'hide this item',
                            Icon: CancelIcon,
                            props: { height: '32', width: '32', fill: '#00bfff' },
                            handleClicked: handleHideItemClicked
                        })}

                        {menuRow({
                            label: 'reset all info',
                            Icon: ClearAllInfo,
                            props: { height: '32', width: '32', fill: '#6b5ee0' },
                            handleClicked: handleUnhideAllItemsClicked
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupWindowForAdvancedMenu;

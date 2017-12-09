import React, { PureComponent } from 'react';

import CancelIconWhite from './svg/iconcancel-white.svg';
import CancelIconRed from './svg/iconcancel-red.svg';
import UnhideAllIcon from './svg/unhide-all.svg';
import CancelIconInvisible from './svg/iconcancel-invisible.svg';

import STYLES from './PopupWindowSettingsCss.js';

const menuRow = (menuItem) => (
    <div
        className={STYLES.popup__row}
        onClick={menuItem.handleClicked}
        onDoubleClick={menuItem.handleClicked}
    >
        <img alt={menuItem.label} height={32} src={menuItem.icon} width={32} />
        <div className={STYLES.popup__gap} />
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
                <div className={STYLES.full_screen_div_opacity} />
                <div
                    className={STYLES.full_screen_div}
                    onClick={handleClosePopupClicked}
                    onDoubleClick={handleClosePopupClicked}
                >
                    <div className={STYLES.popup_window}>
                        <div className={STYLES.cancel_button} onClick={this.changeBoardValueByPath}>
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
                            label: 'Settings:',
                            icon: CancelIconInvisible,
                            handleClicked: noop
                        })}

                        {menuRow({
                            label: 'hide this item',
                            icon: CancelIconRed,
                            handleClicked: handleHideItemClicked
                        })}

                        {menuRow({
                            label: 'unhide all items',
                            icon: UnhideAllIcon,
                            handleClicked: handleUnhideAllItemsClicked
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupWindowSettings;

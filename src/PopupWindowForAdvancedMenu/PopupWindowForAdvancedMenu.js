import React, { PureComponent } from 'react';

import CancelIcon from './svg/CancelIcon';
import ClearAllInfo from './svg/ClearAllInfo';

import './PopupWindowForAdvancedMenu.css';

import { ANIMATION_INTERVAL, ICON_SIZE } from '../Constants/constants';

const TRANSITION = 'opacity ' + ANIMATION_INTERVAL + 's ease';

const noop = () => {};

class PopupWindowForAdvancedMenu extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ increaseOpacity: true });
		}, 0);
	}

	menuRow = (menuItem) => (
		<div
			className="popup__row"
			onClick={(e) => this.handleClicked(e, menuItem.handleClicked)}
			onDoubleClick={(e) => this.handleClicked(e, menuItem.handleClicked)}
		>
			<menuItem.Icon {...menuItem.props} />
			<div className="popup__gap" />
			<div>{menuItem.label}</div>
		</div>
	);

	handleClicked = (e, func) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({ increaseOpacity: false });
		setTimeout(() => {
			func();
		}, ANIMATION_INTERVAL * 1000);
		return false;
	};

	render() {
		const styles = getComputedStyle(document.documentElement);
		const greenColor = String(styles.getPropertyValue('--english-text-color')).trim();
		const redColor = String(styles.getPropertyValue('--danger-color')).trim();
		const whiteColor = String(styles.getPropertyValue('--base-text-color')).trim();
		const blackColor = String(styles.getPropertyValue('--background-color')).trim();

		const {
			handleHideItemClicked,
			handleUnhideAllItemsClicked,
			handleDictClicked,
			handleClosePopupClicked,
		} = this.props;

		// console.log('this.state.increaseOpacity = ', this.state.increaseOpacity);

		return (
			<div
				style={{
					opacity: this.state.increaseOpacity === true ? '1' : '0',
					transition: TRANSITION,
				}}
				onClick={(e) => this.handleClicked(e, handleClosePopupClicked)}
				onDoubleClick={(e) => this.handleClicked(e, handleClosePopupClicked)}
			>
				<div className="popup__full_screen_div_opacity" />
				<div className="popup__full_screen_div">
					<div className="popup__window">
						<div className="popup__cancel" onClick={this.changeBoardValueByPath}>
							<CancelIcon
								fill={whiteColor}
								height={16}
								onClick={(e) => this.handleClicked(e, handleClosePopupClicked)}
								onDoubleClick={(e) => this.handleClicked(e, handleClosePopupClicked)}
								width={16}
							/>
						</div>
						<div className="popup__list">
							{this.menuRow({
								label: 'Advanced:',
								Icon: CancelIcon,
								props: { height: ICON_SIZE, width: ICON_SIZE, fill: blackColor },
								handleClicked: noop,
							})}

							{this.menuRow({
								label: 'hide this item',
								Icon: CancelIcon,
								props: { height: ICON_SIZE, width: ICON_SIZE, fill: redColor },
								handleClicked: handleHideItemClicked,
							})}

							{this.menuRow({
								label: 'reset all info',
								Icon: ClearAllInfo,
								props: { height: ICON_SIZE, width: ICON_SIZE, fill: greenColor },
								handleClicked: handleUnhideAllItemsClicked,
							})}

							{this.menuRow({
								label: 'dict #1',
								Icon: () => <div style={{ width: ICON_SIZE, color: greenColor }}>D1</div>,
								props: {},
								handleClicked: () => handleDictClicked(1),
							})}

							{this.menuRow({
								label: 'dict #2',
								Icon: () => <div style={{ width: ICON_SIZE, color: greenColor }}>D2</div>,
								props: {},
								handleClicked: () => handleDictClicked(2),
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PopupWindowForAdvancedMenu;

import React, { PureComponent } from 'react';

import CancelIcon from './svg/CancelIcon';
import ClearAllInfo from './svg/ClearAllInfo';

import './PopupWindowForAdvancedMenu.css';

const ANIMATION_INTERVAL = 0.5; // sec

const TRANSITION = 'opacity ' + ANIMATION_INTERVAL + 's ease';

const noop = () => {};


class PopupWindowForAdvancedMenu extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ mount: true });
		}, 1);
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
		this.setState({ mount: false });
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

		console.log('this.state.mount = ', this.state.mount);

		return (
			<div
				style={{
					opacity: this.state.mount === true ? '1' : '0',
					transition: TRANSITION,
				}}
				onClick={(e) => this.handleClicked(e, handleClosePopupClicked)}
				onDoubleClick={(e) => this.handleClicked(e, handleClosePopupClicked)}
			>
				<div className="full_screen_div_opacity" />
				<div className="full_screen_div">
					<div className="popup_window">
						<div className="cancel_button" onClick={this.changeBoardValueByPath}>
							<CancelIcon
								fill={whiteColor}
								height={16}
								onClick={(e) => this.handleClicked(e, handleClosePopupClicked)}
								onDoubleClick={(e) => this.handleClicked(e, handleClosePopupClicked)}
								width={16}
							/>
						</div>
						<div className="popup_list">
							{this.menuRow({
								label: 'Advanced:',
								Icon: CancelIcon,
								props: { height: '32', width: '32', fill: blackColor },
								handleClicked: noop,
							})}

							{this.menuRow({
								label: 'hide this item',
								Icon: CancelIcon,
								props: { height: '32', width: '32', fill: redColor },
								handleClicked: handleHideItemClicked,
							})}

							{this.menuRow({
								label: 'reset all info',
								Icon: ClearAllInfo,
								props: { height: '32', width: '32', fill: greenColor },
								handleClicked: handleUnhideAllItemsClicked,
							})}

							{this.menuRow({
								label: 'dict #1',
								Icon: () => <div style={{ width: '32px', color: greenColor }}>D1</div>,
								props: {},
								handleClicked: () => handleDictClicked(1),
							})}
							{this.menuRow({
								label: 'dict #2',
								Icon: () => <div style={{ width: '32px', color: greenColor }}>D2</div>,
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

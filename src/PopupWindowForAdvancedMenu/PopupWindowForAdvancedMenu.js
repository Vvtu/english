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
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ mount: true });
		}, 1);
	}

	handleClose = () => {
		this.setState({ mount: false });
		setTimeout(() => {
			this.props.handleClosePopupClicked();
		}, 500);
	};

	render() {
		const {
			handleClosePopupClicked,
			handleHideItemClicked,
			handleUnhideAllItemsClicked,
			handleDictClicked,
		} = this.props;

		console.log('this.state.mount = ', this.state.mount);

		return (
			<div
				className={
					this.state.mount !== true ? 'opacity-0' : 'transition-opacity-to-1'
				}
			>
				<div className="full_screen_div_opacity" />
				<div
					className="full_screen_div"
					onClick={this.handleClose}
					onDoubleClick={this.handleClose}
				>
					<div className="popup_window">
						<div className="cancel_button" onClick={this.changeBoardValueByPath}>
							<CancelIcon
								fill="#000000"
								height={16}
								onClick={this.handleClose}
								onDoubleClick={this.handleClose}
								width={16}
							/>
						</div>
						<div className="popup_list">
							{menuRow({
								label: 'Advanced:',
								Icon: CancelIcon,
								props: { height: '32', width: '32', fill: '#ffffff' },
								handleClicked: noop,
							})}

							{menuRow({
								label: 'hide this item',
								Icon: CancelIcon,
								props: { height: '32', width: '32', fill: '#00bfff' },
								handleClicked: handleHideItemClicked,
							})}

							{menuRow({
								label: 'reset all info',
								Icon: ClearAllInfo,
								props: { height: '32', width: '32', fill: '#6b5ee0' },
								handleClicked: handleUnhideAllItemsClicked,
							})}

							{menuRow({
								label: 'dict #1',
								Icon: () => <div style={{ width: '32px', color: '#6b5ee0' }}>D1</div>,
								props: {},
								handleClicked: () => handleDictClicked(1),
							})}
							{menuRow({
								label: 'dict #2',
								Icon: () => <div style={{ width: '32px', color: '#6b5ee0' }}>D2</div>,
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

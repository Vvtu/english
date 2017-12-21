import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PopupWindowForAdvancedMenu from 'PopupWindowForAdvancedMenu/PopupWindowForAdvancedMenu';
import ArrowIcon from 'AppCode/svg/ArrowIcon';
import AdvancedIcon from 'AppCode/svg/AdvancedIcon';

import 'AppCode/AppCode.css';

import { getDictionaryWithMix, handleDictClicked } from 'lib/lib';

console.log('process.env = ', process.env);
console.log(
	'process.env.REACT_APP_SECRET_CODE = ',
	process.env && process.env.REACT_APP_SECRET_CODE,
);

class AppCode extends PureComponent {
	static propTypes = {
		dictionaries: PropTypes.object.isRequired,
	};
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0,
			showEnglish: false,
			showAdvanced: false,
			randomDictionary: getDictionaryWithMix(this.props.dictionaries),
		};
	}

	incrementLocalStorage = () => {
		const { activeIndex, randomDictionary, showEnglish } = this.state;
		if (showEnglish) {
			const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
			const russian = Object.keys(activeObj || {})[0];
			if (russian) {
				const item = localStorage.getItem(russian);
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
			showEnglish: false,
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
			showEnglish: false,
		});
	};

	handleShowEnglishClicked = (e) => {
		e.preventDefault();
		this.setState({
			showEnglish: true,
		});
	};

	handleAdvancedClicked = (e) => {
		e.preventDefault();
		this.setState({
			showAdvanced: true,
		});
	};
	handleClosePopupClicked = () => {
		this.setState({
			showAdvanced: false,
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
				showAdvanced: false,
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
			randomDictionary: getDictionaryWithMix(this.props.dictionaries),
			showEnglish: false,
			showAdvanced: false,
		});
	};

	handleTextToSpeachClicked = (e, text) => {
		e.preventDefault();
		const utterThis = new SpeechSynthesisUtterance();
		const synth = window.speechSynthesis;
		if (utterThis && synth) {
			// const voices = synth.getVoices();
			// utterThis.voice = voices[1];   // ошибка какая то !!!
			// utterThis.voiceURI = 'Google UK English Male';
			// utterThis.volume = 1; // 0 to 1
			// utterThis.rate = 0.1; // 0.1 to 10
			// utterThis.pitch = 0; //0 to 2
			utterThis.lang = 'en-GB';
			// utterThis.onend = (event) => console.log('Finished in ' + Math.round(event.elapsedTime/100)/10 + ' seconds.');
			utterThis.text = text;
			synth.speak(utterThis);
		}
	};

	handleDictClickedLocal = (number) => {
		handleDictClicked(number);
		this.setState({
			activeIndex: 0,
			randomDictionary: getDictionaryWithMix(this.props.dictionaries),
			showEnglish: false,
			showAdvanced: false,
		});
	};

	render() {
		const { activeIndex, randomDictionary, showEnglish, showAdvanced } = this.state;
		const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
		const russian = Object.keys(activeObj || {})[0];

		const english = Object.values(activeObj || {})[0];
		const count = randomDictionary.length;

		const item = localStorage.getItem(russian);
		const shown = parseInt(item, 10) || 0;

		return (
			<div>
				<div className="app__grid">
					<div className="app__info">
						<div className="app__info2">
							<ArrowIcon
								height={32}
								onClick={this.handleBackClicked}
								onDoubleClick={this.handleBackClicked}
								width={32}
							/>
							<AdvancedIcon
								height={32}
								onClick={this.handleAdvancedClicked}
								onDoubleClick={this.handleAdvancedClicked}
								width={32}
								fill="#add8e6"
							/>

							{!showEnglish && (
								<ArrowIcon
									className="icon_rotate"
									height={32}
									onClick={this.handleShowEnglishClicked}
									onDoubleClick={this.handleShowEnglishClicked}
									width={32}
									fill="#6b5ee0"
								/>
							)}
							{showEnglish && (
								<ArrowIcon
									className="icon_rotate_back"
									height={32}
									onClick={this.handleForwardClicked}
									onDoubleClick={this.handleForwardClicked}
									width={32}
									fill="#6b5ee0"
								/>
							)}

							<div
								onClick={this.handleStatisticClicked}
								onDoubleClick={this.handleStatisticClicked}
							>
								<span>{activeIndex + 1 + '/' + count}</span>
								<span className="eng_text_color">{'(' + shown + ')'}</span>
							</div>

							<ArrowIcon
								className="icon_invert__horizontal"
								height={32}
								onClick={this.handleForwardClicked}
								onDoubleClick={this.handleForwardClicked}
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
					<div
						className="app__english"
						onClick={(e) => this.handleTextToSpeachClicked(e, english)}
					>
						<div className="app__center">
							<div className="overflow_y_scroll">
								<div className="eng_text_color">{showEnglish && english}</div>
							</div>
						</div>
					</div>

					{showAdvanced && (
						<PopupWindowForAdvancedMenu
							handleClosePopupClicked={this.handleClosePopupClicked}
							handleHideItemClicked={this.handleHideItemClicked}
							handleUnhideAllItemsClicked={this.handleUnhideAllItemsClicked}
							handleDictClicked={this.handleDictClickedLocal}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default AppCode;

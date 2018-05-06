import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PopupWindowForAdvancedMenu from 'PopupWindows/PopupWindowForAdvancedMenu';
import PopupWindowForVoicesMenu from 'PopupWindows/PopupWindowForVoicesMenu';
import ArrowIcon from 'AppCode/svg/ArrowIcon';
import AdvancedIcon from 'AppCode/svg/AdvancedIcon';

import 'AppCode/AppCode.css';

import { getDictionaryWithMix, handleDictClicked } from 'lib/lib';
import getVoicesArray from 'lib/getVoicesArray';
import { ICON_SIZE } from '../Constants/constants';

// console.log('process.env = ', process.env);
// console.log(
// 	'process.env.REACT_APP_SECRET_CODE = ',
// 	process.env && process.env.REACT_APP_SECRET_CODE,
// );

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
			appcodeIsSpeaking: false,
			randomDictionary: getDictionaryWithMix(this.props.dictionaries),
		};
	}

	componentDidMount() {
		const element = document.documentElement;
		// console.log('window.screen = ', window.screen);
		// const height = Math.max(
		// 	parseInt(window.screen.height, 10),
		// 	parseInt(window.screen.width, 10),
		// );
		// const width = Math.min(
		// 	parseInt(window.screen.height, 10),
		// 	parseInt(window.screen.width, 10),
		// );
		// // console.log('height , width = ',height , width);

		// element.style.setProperty('--screen-height', height + 'px');
		// element.style.setProperty('--screen-width', width + 'px');

		const styles = getComputedStyle(element);
		this.setState({
			greenColor: String(styles.getPropertyValue('--english-text-color')).trim(),
			advancedColor: String(styles.getPropertyValue('--advanced-color')).trim(),
			whiteColor: String(styles.getPropertyValue('--base-text-color')).trim(),
		});
		// get voices array
		window.speechSynthesis.getVoices();
		this.forceUpdate();

		getVoicesArray().then((result) => {
			this.voicesArray = result;
		});
	}

	incrementLocalStorage = () => {
		const { activeIndex, randomDictionary, showEnglish } = this.state;
		if (showEnglish) {
			const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
			const russian = activeObj.rus;
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
		e.stopPropagation();
		this.incrementLocalStorage();

		if (this.russianScrollNode) {
			this.russianScrollNode.scrollTop = 0;
		}
		if (this.englishScrollNode) {
			this.englishScrollNode.scrollTop = 0;
		}

		const { activeIndex, randomDictionary } = this.state;

		const len = randomDictionary.length;
		const newActiveIndex = activeIndex === len - 1 ? 0 : activeIndex + 1;
		// console.log('handleForwardClicked newActiveIndex = ', newActiveIndex);
		this.setState({
			activeIndex: newActiveIndex,
			showEnglish: false,
			appcodeIsSpeaking: false,
		});
		return false;
	};

	handleBackClicked = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.incrementLocalStorage();

		if (this.russianScrollNode) {
			this.russianScrollNode.scrollTop = 0;
		}
		if (this.englishScrollNode) {
			this.englishScrollNode.scrollTop = 0;
		}

		const { activeIndex, randomDictionary } = this.state;
		const len = randomDictionary.length;
		const newActiveIndex = activeIndex === 0 ? len - 1 : activeIndex - 1;
		// console.log('handleBackClicked newActiveIndex = ', newActiveIndex);
		this.setState({
			activeIndex: newActiveIndex,
			showEnglish: false,
			appcodeIsSpeaking: false,
		});
		return false;
	};

	handleShowEnglishClicked = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			showEnglish: this.state.showEnglish !== true,
			appcodeIsSpeaking: false,
		});
		return false;
	};

	handleAdvancedClicked = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			showAdvanced: true,
			appcodeIsSpeaking: false,
		});
		return false;
	};
	handleClosePopupClicked = () => {
		this.setState({
			showAdvanced: false,
			appcodeIsSpeaking: false,
		});
		return false;
	};

	handleHideItemClicked = () => {
		const { activeIndex, randomDictionary } = this.state;
		if (activeIndex !== undefined && activeIndex < randomDictionary.length) {
			const activeObj = randomDictionary[activeIndex];
			const russian = activeObj.rus;
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
				appcodeIsSpeaking: false,
			});
		}
	};

	handleStatisticClicked = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (this.state.showEnglish) {
			this.handleForwardClicked(e);
		} else {
			this.handleShowEnglishClicked(e);
		}
		return false;
	};

	handleUnhideAllItemsClicked = () => {
		localStorage.clear();
		this.setState({
			activeIndex: 0,
			randomDictionary: getDictionaryWithMix(this.props.dictionaries),
			showEnglish: false,
			showAdvanced: false,
			appcodeIsSpeaking: false,
		});
	};

	handleTextToSpeachClicked = (e, text) => {
		e.preventDefault();
		e.stopPropagation();
		if (this.state.appcodeIsSpeaking) {
			return false;
		}
		const utterThis = new SpeechSynthesisUtterance();

		const synth = window.speechSynthesis;
		if (utterThis && synth) {
			if (this.engVoice) {
				utterThis.voice = this.engVoice;
			}
			console.log('voices = ', this.voicesArray);

			this.voicesArray.forEach((voice) => {
				if (voice.name === 'Google UK English Female') {
					utterThis.voice = voice;
					console.log('voice = ', voice);
				}
			});

			// utterThis.voiceURI = 'Google UK English Female';
			utterThis.volume = 1.0; // 0 to 1
			utterThis.rate = 1.0; // 0.1 to 10
			// utterThis.pitch = 2; //0 to 2
			utterThis.lang = 'en-GB';
			this.setState({ appcodeIsSpeaking: true });
			utterThis.onend = (event) => {
				this.setState({ appcodeIsSpeaking: false });
				if (this.appcodeIsSpeakingTimeOut) {
					clearTimeout(this.appcodeIsSpeakingTimeOut);
					this.appcodeIsSpeakingTimeOut = null;
				}
			};
			this.appcodeIsSpeakingTimeOut = setTimeout(
				() => {
					this.setState({ appcodeIsSpeaking: false });
					this.appcodeIsSpeakingTimeOut = null;
				},
				6000, // in case of utterThis.onend failed
			);
			utterThis.text = text;
			// synth.speak(utterThis);
		}
		return false;
	};

	handleDictClickedLocal = (number) => {
		handleDictClicked(number);
		this.setState({
			activeIndex: 0,
			randomDictionary: getDictionaryWithMix(this.props.dictionaries),
			showEnglish: false,
			showAdvanced: false,
			appcodeIsSpeaking: false,
		});
	};

	handleSetVoiceClicked = () => {
		this.setState({
			showAdvanced: false,
			showVoicesMenu: true,
		});
	};

	handleSetVoiceClickedFinish = () => {
		this.setState({
			showVoicesMenu: false,
		});
	};

	render() {
		const {
			activeIndex,
			randomDictionary,
			showAdvanced,
			showVoicesMenu,
			showEnglish,
			appcodeIsSpeaking,
			greenColor,
			advancedColor,
			whiteColor,
		} = this.state;

		const activeObj = activeIndex !== undefined && randomDictionary[activeIndex];
		const russian = activeObj.rus;

		const english = activeObj.eng;
		const count = randomDictionary.length;

		const item = localStorage.getItem(russian);
		const shown = parseInt(item, 10) || 0;

		// console.log('App code render this.props = ', this.props);
		// console.log('App code render activeObj = ', activeObj);
		// console.log('App code count = ', count);
		// console.log('App code english = ', english);

		return (
			<div className="appcode__grid">
				<div className="appcode__info">
					<div className="appcode__info2">
						<ArrowIcon
							height={ICON_SIZE}
							onClick={this.handleBackClicked}
							onDoubleClick={this.handleBackClicked}
							width={ICON_SIZE}
							fill={whiteColor}
						/>
						<AdvancedIcon
							height={ICON_SIZE}
							onClick={this.handleAdvancedClicked}
							onDoubleClick={this.handleAdvancedClicked}
							width={ICON_SIZE}
							fill={advancedColor}
						/>

						{showEnglish ? (
							<ArrowIcon
								className="appcode__icon_rotate_back"
								height={ICON_SIZE}
								onClick={this.handleForwardClicked}
								onDoubleClick={this.handleForwardClicked}
								width={ICON_SIZE}
								fill={greenColor}
							/>
						) : (
							<ArrowIcon
								className="appcode__icon_rotate"
								height={ICON_SIZE}
								onClick={this.handleShowEnglishClicked}
								onDoubleClick={this.handleShowEnglishClicked}
								width={ICON_SIZE}
								fill={greenColor}
							/>
						)}

						<div
							onClick={this.handleStatisticClicked}
							onDoubleClick={this.handleStatisticClicked}
						>
							<span>{activeIndex + 1 + '/' + count}</span>
							<span className="appcode__eng_text_color">{'(' + shown + ')'}</span>
						</div>

						<ArrowIcon
							className="appcode__icon_invert__horizontal"
							height={ICON_SIZE}
							onClick={this.handleForwardClicked}
							onDoubleClick={this.handleForwardClicked}
							width={ICON_SIZE}
							fill={whiteColor}
						/>
					</div>
				</div>
				<div className="appcode__russian">
					<div className="appcode__center">
						<div
							className="appcode__scroll"
							onClick={this.handleShowEnglishClicked}
							onDoubleClick={this.handleShowEnglishClicked}
							ref={(ref) => (this.russianScrollNode = ref)}
						>
							<div>{russian}</div>
						</div>
					</div>
				</div>
				<div className="appcode__english">
					<div className="appcode__center">
						<div
							className="appcode__scroll"
							onClick={(e) => this.handleTextToSpeachClicked(e, english)}
							onDoubleClick={(e) => this.handleTextToSpeachClicked(e, english)}
							ref={(ref) => (this.englishScrollNode = ref)}
						>
							<div
								className={
									'appcode__eng_text_color' +
									(appcodeIsSpeaking ? ' appcode__speaking' : '')
								}
							>
								{showEnglish && english}
							</div>
						</div>
					</div>
				</div>

				{showAdvanced ? (
					<PopupWindowForAdvancedMenu
						handleClosePopupClicked={this.handleClosePopupClicked}
						handleHideItemClicked={this.handleHideItemClicked}
						handleUnhideAllItemsClicked={this.handleUnhideAllItemsClicked}
						handleDictClicked={this.handleDictClickedLocal}
						handleSetVoiceClicked={this.handleSetVoiceClicked}
					/>
				) : (
					<div />
				)}

				{showVoicesMenu ? (
					<PopupWindowForVoicesMenu
						handleClosePopupClicked={this.handleClosePopupClicked}
						handleHideItemClicked={this.handleHideItemClicked}
						handleUnhideAllItemsClicked={this.handleUnhideAllItemsClicked}
						handleDictClicked={this.handleDictClickedLocal}
						handleSetVoiceClicked={this.handleSetVoiceClicked}
					/>
				) : (
					<div />
				)}
			</div>
		);
	}
}

export default AppCode;

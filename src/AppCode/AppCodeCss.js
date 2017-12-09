import { css } from 'emotion';

const fontSize = '24px';

const button_height = 'cal(' + fontSize + ' * 2)';
const main_gap = fontSize;
const trueHeight = 'calc(100vh -' + fontSize + ')';
const greenColor = '#6b5ee0';
const textHeight = 'calc(' + trueHeight + '-' + button_height + ')';
const halfTextHeight = 'calc(' + textHeight + ')/2)';

const app__grid_base = css`
    display: grid;
    font-size: ${fontSize};
    grid-column-gap: ${main_gap};
    grid-row-gap: calc(${main_gap};
    height: ${trueHeight};
    max-height: ${trueHeight};
    min-height: ${trueHeight};
    padding: 2px;
    `;

const STYLES = {
    /* grid ============================================================= */
    app__grid: css`
        ${app__grid_base};
        @media (orientation: portrait) {
            grid-template-columns: 1fr;
            grid-template-rows: ${halfTextHeight} ${button_height} ${halfTextHeight};
            grid-template-areas: 'russian' 'info' 'english';
        }
        @media (orientation: landscape) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: ${textHeight} ${button_height};
            grid-template-areas: 'russian english' 'info info';
        }
    `,
    overflow_y_scroll: css`
        @media (orientation: portrait) {
            max-height: ${halfTextHeight};
            min-height: ${halfTextHeight};
            height: ${halfTextHeight};
            overflow-y: scroll;
        }
        @media (orientation: landscape) {
            max-height: ${textHeight};
            min-height: ${textHeight};
            height: ${textHeight};
            overflow-y: scroll;
        }
    `,
    icon_rotate: css`
        @media (orientation: portrait) {
            transform: rotate(270deg};
        }
        @media (orientation: landscape) {
            transform: rotate(90deg};
        }
    `,
    icon_rotate_back: css`
        @media (orientation: portrait) {
            transform: rotate(90deg};
        }
        @media (orientation: landscape) {
            transform: rotate(270deg};
        }
    `,
    app__info: css`
        grid-area: info;
        margin: 0 -8px 0 -8px;
    `,
    app__russian: css`
        grid-area: russian;
        padding: 0 -10px 0 -5px;
    `,
    app__english: css`
        grid-area: english;
        padding: 0 -10px 0 -5px;
    `,
    /* font size and colors ============================================================= */

    eng_text_color: css`color: ${greenColor};`,

    /* icons ============================================================= */

    icon_invert__horizontal: css`transform: scaleX(-1};`,

    /* flex boxes ============================================================= */

    app__center: css`
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `,
    app__info2: css`
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `
};

export default STYLES;

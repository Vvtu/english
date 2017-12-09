import { css } from 'emotion';

const full_screen_div = css`


const STYLES = {

    full_screen_div: css`
        align-items: center;
        bottom: 0;
        display: flex;
        justify-content: center;
        left: 0;
        overflow: hidden;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 3;
    `,

    full_screen_div_opacity: css`
        background-color: grey;
        bottom: 0;
        left: 0;
        opacity: 0.4;
        overflow: hidden;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 2;
    `,

    popup_window: css`
        align-items: flex-start;
        background: white;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.9) 0px 13px 26px 0px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        line-height: 3rem;
        padding: 10px 25px 10px 20px;
        position: relative;
    `,

    cancel_button: css`
        position: absolute;
        top: -9px;
        right: 10px;
        cursor: pointer;
    `,

    popup__row: css`
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    `,

    popup__gap: css`padding-right: 10px;`
};

export default STYLES;
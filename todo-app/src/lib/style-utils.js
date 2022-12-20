import { css } from 'styled-components';


export const media = ({

    tablet: (...args) => css`
        @media (max-width: 992px) {
            ${ css(...args) }
        }
    `,

    mobile: (...args) => css`
        @media (max-width: 600px) {
            ${ css(...args) }
        }
    `
});
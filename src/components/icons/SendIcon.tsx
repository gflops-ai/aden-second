/* 変更前 import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const SendIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="19px" style={{ fill: props.color ?? defaultButtonColor }} {...props}>
    <path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z" />
  </svg>
);
*/

import { JSX } from 'solid-js/jsx-runtime';

const defaultButtonColor = '#3B81F6';

export const SendIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: props.color ?? defaultButtonColor }}
    {...props}
  >
    <path
      d="M15.8535 0.146446C15.995 0.287877 16.0385 0.499986 15.9642 0.685695L10.1454 15.2328C9.91841 15.8003 9.14441 15.8725 8.81629 15.3569L5.63782 10.3622L0.643079 7.18371C0.127464 6.85559 0.199737 6.08159 0.767192 5.8546L15.3143 0.035761C15.5 -0.0385224 15.7121 0.00501463 15.8535 0.146446ZM6.63716 10.0699L9.39807 14.4085L14.1311 2.57604L6.63716 10.0699ZM13.424 1.86893L1.59148 6.60192L5.93005 9.36283L13.424 1.86893Z"
      fill="black"
    />
  </svg>
);

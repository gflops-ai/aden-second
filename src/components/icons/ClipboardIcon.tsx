/* import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const ClipboardIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-refresh w-4 h-4"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color ?? defaultButtonColor}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  </svg>
);

変更前*/

import { JSX } from 'solid-js/jsx-runtime';

const defaultButtonColor = '#3B81F6';

export const ClipboardIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <span
  style={{
    color: props.color ?? defaultButtonColor,
    display: 'flex',
    'align-items' : 'center', // アイコンとテキストを中央揃いにする
    gap: '4px' // アイコンとテキストの間にスペースを追加（必要に応じて調整）
  }}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={props.color ?? defaultButtonColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 2C4 0.89543 4.89543 0 6 0H14C15.1046 0 16 0.895431 16 2V10C16 11.1046 15.1046 12 14 12H6C4.89543 12 4 11.1046 4 10V2ZM6 1C5.44772 1 5 1.44772 5 2V10C5 10.5523 5.44772 11 6 11H14C14.5523 11 15 10.5523 15 10V2C15 1.44772 14.5523 1 14 1H6ZM2 5C1.44772 5 1 5.44772 1 6V14C1 14.5523 1.44772 15 2 15H10C10.5523 15 11 14.5523 11 14V13H12V14C12 15.1046 11.1046 16 10 16H2C0.89543 16 0 15.1046 0 14V6C0 4.89543 0.89543 4 2 4H3V5H2Z"
        fill="black"
      />
    </svg>
    <span style={{ 'font-weight': 100 }}>コピー</span>
  </span>
);

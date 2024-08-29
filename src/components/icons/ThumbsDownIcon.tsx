/* import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const ThumbsDownIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
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
    <path d="M17 14V2" />
    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
  </svg>
);　変更したよ*/

import { JSX } from 'solid-js/jsx-runtime';

const defaultButtonColor = '#7C7C7C';

export const ThumbsDownIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
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
        d="M8.8638 15.6744C7.90812 15.9134 7.02087 15.1904 6.95631 14.2546C6.88374 13.2031 6.72691 12.2389 6.52757 11.6637C6.4031 11.3046 6.04895 10.6518 5.48879 10.0258C4.93091 9.40237 4.20585 8.8471 3.35693 8.61553C2.68549 8.43238 2 7.85057 2 7.00034V2.99934C2 2.15492 2.68233 1.5355 3.44792 1.45431C4.51741 1.3409 5.0118 1.0391 5.51594 0.731348L5.56354 0.702307C5.83632 0.536077 6.14176 0.35304 6.53434 0.21786C6.93094 0.0812931 7.39536 0 8 0H11.5C12.4371 0 13.099 0.477883 13.4341 1.06443C13.5982 1.35149 13.6875 1.67064 13.6875 1.97656C13.6875 2.12892 13.6647 2.28868 13.6107 2.44104C13.8121 2.70333 13.9915 3.0184 14.0993 3.34189C14.2091 3.6711 14.2709 4.10338 14.1026 4.49014C14.1718 4.62082 14.2235 4.75908 14.262 4.89389C14.3392 5.16405 14.375 5.46111 14.375 5.75C14.375 6.03889 14.3392 6.33595 14.262 6.60611C14.2275 6.72686 14.1824 6.85037 14.1237 6.96873C14.5183 7.54015 14.5421 8.16964 14.3576 8.70202C14.1524 9.29408 13.6764 9.80159 13.1581 9.97434C12.311 10.2567 11.3547 10.2502 10.6422 10.1854C10.484 10.1711 10.3353 10.1535 10.1994 10.135C10.6699 12.1328 10.357 13.8285 10.1366 14.6445C9.99923 15.153 9.58765 15.4935 9.12522 15.6091L8.8638 15.6744ZM11.5 1.00001H8C7.48931 1.00001 7.13694 1.068 6.85992 1.16339C6.57887 1.26017 6.35385 1.39176 6.08393 1.55625L6.04402 1.58059C5.48916 1.9191 4.8456 2.31172 3.55337 2.44875C3.22055 2.48404 3 2.73922 3 2.99936V7.00036C3 7.2547 3.2259 7.54327 3.6201 7.6508C4.71546 7.94959 5.59685 8.64697 6.23399 9.35898C6.86886 10.0684 7.29831 10.8339 7.47243 11.3363C7.71504 12.0363 7.8793 13.1042 7.95393 14.1858C7.97893 14.5481 8.31466 14.781 8.62127 14.7043L8.88269 14.639C9.04329 14.5988 9.14107 14.4952 9.17119 14.3837C9.39155 13.5679 9.71926 11.7389 9.02566 9.65813C8.96795 9.485 9.00915 9.29419 9.13314 9.16029C9.25709 9.02643 9.44428 8.97076 9.62127 9.01494L9.62386 9.01558L9.63757 9.01885C9.65031 9.02185 9.67014 9.02644 9.69646 9.03223C9.74911 9.04384 9.82756 9.06027 9.92698 9.07869C10.1262 9.11558 10.4075 9.16 10.7328 9.18957C11.3953 9.2498 12.189 9.24329 12.8419 9.02567C13.0174 8.96718 13.2914 8.72468 13.4127 8.37455C13.5193 8.06719 13.4986 7.7057 13.1464 7.35357L12.7929 7.00001L13.1464 6.64646C13.189 6.60391 13.2507 6.5055 13.3005 6.3314C13.3483 6.16406 13.375 5.96113 13.375 5.75001C13.375 5.5389 13.3483 5.33597 13.3005 5.16862C13.2507 4.99453 13.189 4.89612 13.1464 4.85357L12.7929 4.50001L13.1464 4.14646C13.1935 4.09943 13.2546 3.97003 13.1507 3.65813C13.053 3.36508 12.8481 3.05523 12.6464 2.85357L12.2929 2.50001L12.6464 2.14646C12.6517 2.14122 12.6875 2.09685 12.6875 1.97658C12.6875 1.86063 12.6518 1.71102 12.5659 1.56058C12.401 1.27213 12.0629 1.00001 11.5 1.00001Z"
        fill="black"
      />
    </svg>
    <span style={{ 'font-weight': 100 }}> 悪い回答</span>
  </span>
);

import { CSSProperties } from 'react';
import './_styles.scss';

export default function DropdownUser(): JSX.Element {
    return (
        <div className="dropdown-user">
            <span>Minha conta</span>
            <div
                className="avatar"
                style={
                    { '--image': 'url(/images/avatar.svg)' } as CSSProperties
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <rect width="16" height="16" rx="8" fill="#3F47CC" />
                    <path
                        d="M7.13281 9.5L5.58615 7.94667L4.59948 8.94L7.13281 11.48L12.0261 6.57333L11.0395 5.58L7.13281 9.5Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
}

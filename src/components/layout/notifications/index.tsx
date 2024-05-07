import './_styles.scss';

export default function Notifications(): JSX.Element {
    return (
        <div className="notifications">
            <div className="number-badge">8</div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.3339 23.146C24.7299 23.146 25.8628 22.0167 25.8672 20.6207V20.6207V20.6207C25.8663 19.9104 25.5828 19.2296 25.0792 18.7287L23.4005 17.0487V12.058C23.4002 10.0964 22.6201 8.21534 21.2322 6.82913C19.8442 5.44292 17.9622 4.66524 16.0005 4.66736V4.66736C11.9201 4.66957 8.61327 7.97763 8.61253 12.058V17.0447L6.93386 18.7247C6.42991 19.2255 6.14591 19.9062 6.14453 20.6167V20.6167V20.6167C6.14894 22.0127 7.28186 23.142 8.67786 23.142L23.3339 23.146Z"
                    stroke="#42464A"
                    stroke-width="2.03269"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M14.0293 27.334H17.972"
                    stroke="#42464A"
                    strokeWidth="2.03269"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

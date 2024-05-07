import './_styles.scss';
export default function MagazineLink(): JSX.Element {
    return (
        <div className="magazine-link">
            <div className="magazine-logo" />
            <a href="#">
                MAGAZINE
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z"
                        fill="#3F47CC"
                    />
                </svg>
            </a>
        </div>
    );
}

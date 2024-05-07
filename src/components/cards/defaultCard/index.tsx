import { ReactNode } from 'react';
import './_styles.scss';

interface IProps {
    className?: string;
    children: ReactNode;
}

export default function DefaultCard({
    className,
    children
}: IProps): JSX.Element {
    return <div className={`default-card ${className || ''}`}>{children}</div>;
}

'use client';

import DefaultCard from '@/components/cards/defaultCard';
import { useState } from 'react';

interface IProps {
    className?: string;
    collapse?: boolean;
}

interface IExt {
    collapse?: boolean;
}

const ExtraCards = ({ collapse }: IExt): JSX.Element => {
    const [visible, setVisible] = useState(collapse ? false : true);

    const toggleVisible = (e: any) => {
        e.preventDefault();
        setVisible(!visible);
    };

    return (
        <>
            {visible && (
                <>
                    <DefaultCard>assuntos em alta</DefaultCard>
                    <DefaultCard>noticias</DefaultCard>
                    <DefaultCard>sugestoes</DefaultCard>
                </>
            )}

            {collapse && (
                <div className="text-center mb-4">
                    <a href="#" onClick={toggleVisible}>
                        Ver {visible ? 'menos' : 'mais'}
                    </a>
                </div>
            )}
        </>
    );
};

export default function LeftSection({
    className,
    collapse
}: IProps): JSX.Element {
    return (
        <section className={`flex-col gap ${className || ''}`}>
            <DefaultCard>breadcrumb</DefaultCard>
            <ExtraCards collapse={collapse} />
        </section>
    );
}

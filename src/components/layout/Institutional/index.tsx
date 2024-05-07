import DefaultCard from '@/components/cards/defaultCard';
import './_styles.scss';
import { useMemo } from 'react';

interface ILink {
    title: string;
    icon: string;
}

export default function Institucional(): JSX.Element {
    const links: ILink[] = useMemo(
        () => [
            { title: 'Learning', icon: 'play' },
            { title: 'Sobre nós', icon: 'about' },
            { title: 'Certificação', icon: 'certification' },
            { title: 'LGPD', icon: 'lgpd' }
        ],
        []
    );
    return (
        <DefaultCard className="content-card institutional">
            <h4>Institucional</h4>
            <div className="divisor" />
            <div className="links">
                {links.map((link: ILink, index: number) => (
                    <button className={`link ${link.icon}`} key={index}>
                        {link.title}
                    </button>
                ))}
            </div>
        </DefaultCard>
    );
}

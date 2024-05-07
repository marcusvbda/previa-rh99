import { useMemo } from 'react';
import './_styles.scss';
import DefaultCard from '@/components/cards/defaultCard';
import Image from 'next/image';

interface IItems {
    badge?: string;
    icon?: string;
    title: string;
}

export default function Shortcuts(): JSX.Element {
    const items: IItems[] = useMemo(
        () => [
            { title: 'Créditos', badge: '999', icon: '/images/cart.svg' },
            { title: 'HG - Entrar' },
            { title: 'RX - Entrar' }
        ],
        []
    );

    return (
        <DefaultCard className="content-card shortcuts">
            {items.map((item: IItems, index: number) => (
                <a href="#" className="shortcut" key={index}>
                    {item.icon && (
                        <Image
                            width={24}
                            height={24}
                            src={item.icon}
                            alt={item.title}
                        />
                    )}
                    {item.title}
                    {item.badge && <div className="badge">{item.badge}</div>}
                </a>
            ))}
        </DefaultCard>
    );
}

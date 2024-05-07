'use client';
import './_styles.scss';
import DefaultCard from '@/components/cards/defaultCard';
import Collapse from '@/components/collapse';
import { CSSProperties, useMemo, useState } from 'react';
import MagazineLink from '../magazineLink';

interface IProps {
    className?: string;
    collapse?: boolean;
}

interface IUser {
    avatar: string;
    name: string;
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

    const items = useMemo(
        () => [
            'Psicologia',
            'Cursos',
            'Psicanálise',
            'Psiquiatria',
            'Transtornos',
            'Qualidade de vida',
            'Desenvolvimento humano'
        ],
        []
    );

    const news = useMemo(
        () => [
            'Confira dez tendências para a área de psicologia em 2024',
            'Barbie: psicanalista faz análise sobre temas abordados no filme',
            'Psicóloga lança livro sobre a saúde pastoral: ‘Reconhecimento da humanidade dos pastores’',
            'Terapia não é tudo igual: saiba como escolher a linha correta e como encontrar o melhor psicólogo',
            'Psicologia e saúde mental: 9 cursos grátis de universidades estrangeiras'
        ],
        []
    );

    const users: IUser[] = useMemo(
        () => [
            { avatar: '/images/christian.jpeg', name: 'Christian Dutra' },
            { avatar: '/images/marco.jpeg', name: 'Marco Sinico' },
            { avatar: '/images/christian.jpeg', name: 'Christian Dutra' },
            { avatar: '/images/marco.jpeg', name: 'Marco Sinico' }
        ],
        []
    );

    return (
        <>
            {visible && (
                <>
                    <DefaultCard className="content-card trends">
                        <>
                            <h4>Assuntos em alta</h4>
                            <div className="divisor" />
                            <div className="trend-items">
                                {items.map((item: string, index: number) => (
                                    <div key={index} className="trend-item">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </>
                    </DefaultCard>
                    <DefaultCard className="content-card trends">
                        <>
                            <h4>Notícias RH99</h4>
                            <div className="divisor" />
                            <div className="news-list">
                                {news.map((item: string, index: number) => (
                                    <div className="news-item" key={index}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <Collapse
                                content={
                                    <div className="news-list">
                                        {news.map(
                                            (item: string, index: number) => (
                                                <div
                                                    className="news-item"
                                                    key={index}
                                                >
                                                    {item}
                                                </div>
                                            )
                                        )}
                                    </div>
                                }
                            />
                            <MagazineLink />
                        </>
                    </DefaultCard>
                    <DefaultCard className="content-card trends">
                        <>
                            <h4>Sugestões</h4>
                            <div className="divisor" />
                            <div className="user-suggestions">
                                {users.map((item: IUser, index: number) => (
                                    <div
                                        className="user-suggestion"
                                        key={index}
                                    >
                                        <div
                                            className="user-image"
                                            style={
                                                {
                                                    '--image': `url(${item.avatar})`
                                                } as CSSProperties
                                            }
                                        />
                                        <div className="user-name">
                                            {item.name}
                                        </div>
                                        <button>Seguir</button>
                                    </div>
                                ))}
                            </div>
                        </>
                    </DefaultCard>
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
            <DefaultCard className="breadcrumb">
                <div className="item home active">Página Inicial</div>
                <div className="item-list">
                    <div className="item active">Todas postagens</div>
                    <div className="item">Perguntas</div>
                </div>
                <div className="item network">Minha rede</div>
            </DefaultCard>
            {collapse ? <Collapse content={<ExtraCards />} /> : <ExtraCards />}
        </section>
    );
}

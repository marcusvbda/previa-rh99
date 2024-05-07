'use client';
import './_styles.scss';
import DefaultCard from '@/components/cards/defaultCard';
import Collapse from '@/components/collapse';
import { CSSProperties, useState } from 'react';
import MagazineLink from '../magazineLink';

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
                    <DefaultCard className="content-card trends">
                        <>
                            <h4>Assuntos em alta</h4>
                            <div className="divisor" />
                            <div className="trend-items">
                                <div className="trend-item">Psicologia</div>
                                <div className="trend-item">Cursos</div>
                                <div className="trend-item">Cursos</div>
                                <div className="trend-item">Psicanálise</div>
                                <div className="trend-item">Psiquiatria</div>
                                <div className="trend-item">Transtornos</div>
                                <div className="trend-item">
                                    Qualidade de vida
                                </div>
                                <div className="trend-item">
                                    Desenvolvimento humano
                                </div>
                            </div>
                        </>
                    </DefaultCard>
                    <DefaultCard className="content-card trends">
                        <>
                            <h4>Notícias RH99</h4>
                            <div className="divisor" />
                            <div className="news-list">
                                <div className="news-item">
                                    Confira dez tendências para a área de
                                    psicologia em 2024
                                </div>
                                <div className="news-item">
                                    Barbie: psicanalista faz análise sobre temas
                                    abordados no filme
                                </div>
                                <div className="news-item">
                                    Psicóloga lança livro sobre a saúde
                                    pastoral: ‘Reconhecimento da humanidade dos
                                    pastores’
                                </div>
                                <div className="news-item">
                                    Terapia não é tudo igual: saiba como
                                    escolher a linha correta e como encontrar o
                                    melhor psicólogo
                                </div>
                                <div className="news-item">
                                    Psicologia e saúde mental: 9 cursos grátis
                                    de universidades estrangeiras
                                </div>
                            </div>
                            <Collapse
                                content={
                                    <div className="news-list">
                                        <div className="news-item">
                                            Confira dez tendências para a área
                                            de psicologia em 2024
                                        </div>
                                        <div className="news-item">
                                            Barbie: psicanalista faz análise
                                            sobre temas abordados no filme
                                        </div>
                                        <div className="news-item">
                                            Psicóloga lança livro sobre a saúde
                                            pastoral: ‘Reconhecimento da
                                            humanidade dos pastores’
                                        </div>
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
                                <div className="user-suggestion">
                                    <div
                                        className="user-image"
                                        style={
                                            {
                                                '--image': `url(/images/christian.jpeg)`
                                            } as CSSProperties
                                        }
                                    />
                                    <div className="user-name">
                                        Christian Dutra
                                    </div>
                                    <button>Seguir</button>
                                </div>
                                <div className="user-suggestion">
                                    <div
                                        className="user-image"
                                        style={
                                            {
                                                '--image': `url(/images/marco.jpeg)`
                                            } as CSSProperties
                                        }
                                    />
                                    <div className="user-name">
                                        Marco Sinico
                                    </div>
                                    <button>Seguir</button>
                                </div>
                                <div className="user-suggestion">
                                    <div
                                        className="user-image"
                                        style={
                                            {
                                                '--image': `url(/images/christian.jpeg)`
                                            } as CSSProperties
                                        }
                                    />
                                    <div className="user-name">
                                        Christian Dutra
                                    </div>
                                    <button>Seguir</button>
                                </div>
                                <div className="user-suggestion">
                                    <div
                                        className="user-image"
                                        style={
                                            {
                                                '--image': `url(/images/marco.jpeg)`
                                            } as CSSProperties
                                        }
                                    />
                                    <div className="user-name">
                                        Marco Sinico
                                    </div>
                                    <button>Seguir</button>
                                </div>
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

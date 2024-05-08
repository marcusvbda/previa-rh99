import DefaultCard from '@/components/cards/defaultCard';
import Institucional from '@/components/layout/Institutional';
import Post from '@/components/layout/Post';
import KnowledgeTest from '@/components/layout/knowledgeTest';
import LeftSection from '@/components/layout/leftSection/leftSection';
import NewPost from '@/components/layout/newPost';
import Shortcuts from '@/components/layout/shortcuts';
import SugestionsForYou from '@/components/layout/sugestionsForYou';
import Image from 'next/image';
import { CSSProperties } from 'react';

export default function Home(): JSX.Element {
    return (
        <main className="main-content">
            <div className="hide-sm">
                <LeftSection />
            </div>
            <section className="feed-list flex-col gap">
                <div className="only-sm">
                    <LeftSection collapse />
                </div>
                <NewPost />
                <div className="feed-list flex-col gap">
                    <Post
                        title="Qualidade de vida"
                        desc1="Profissional de RH • 574 testes"
                        desc2="1 sem atrás • "
                        avatar="/images/marco.jpeg"
                        days={4}
                        likes={8}
                        name="Marco Sinicco • Habilitado"
                    >
                        A vida é um folha em branco? Quantas vezes vc iniciou um
                        processo e pensou na metáfora da folha sem nada escrito?
                        Venha refletir comigo sobre esse tema.
                    </Post>
                    <Post
                        name="Christian Dutra • Habilitado"
                        title="Desenvolvimento humano"
                        desc1="Profissional de RH • 574 testes"
                        desc2="1 sem atrás • "
                        avatar="/images/christian.jpeg"
                        days={4}
                        likes={8}
                    >
                        <>
                            Os psicólogos são muito importantes no trabalho com
                            os adultos maiores, designadamente em áreas como a
                            psicologia clínica e da saúde, neuropsicologia,
                            psico e sociogerontologia. Mas é necessário dar
                            condições de trabalho dignas a estes, aliás como a
                            outros profissionais que trabalham na saúde. É
                            preciso haver salários dignos, acabar com os falsos
                            recibos verdes e é necessário respeito por estes
                            profissionais e valorização profissional dos mesmos.
                            <div
                                className="responsive-image"
                                style={
                                    {
                                        '--ratio': 576 / 325,
                                        marginTop: 16
                                    } as CSSProperties
                                }
                            >
                                <Image
                                    fill
                                    src="/images/post-content.svg"
                                    alt="post-content"
                                />
                            </div>
                        </>
                    </Post>
                    <Post
                        title="Qualidade de vida"
                        name="Marco Sinicco • Habilitado"
                        avatar="/images/marco.jpeg"
                        desc1="Profissional de RH • 574 testes"
                        desc2="1 sem atrás • "
                        days={4}
                        likes={8}
                    >
                        A vida é um folha em branco? Quantas vezes vc iniciou um
                        processo e pensou na metáfora da folha sem nada escrito?
                        Venha refletir comigo sobre esse tema.
                    </Post>
                </div>
            </section>
            <div className="only-lg ">
                <section className="only-lg flex-col gap">
                    <Shortcuts />
                    <KnowledgeTest />
                    <Institucional />
                    <SugestionsForYou />
                </section>
            </div>
        </main>
    );
}

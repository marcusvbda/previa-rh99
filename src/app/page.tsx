import DefaultCard from '@/components/cards/defaultCard';
import Institucional from '@/components/layout/Institutional';
import KnowledgeTest from '@/components/layout/knowledgeTest';
import LeftSection from '@/components/layout/leftSection/leftSection';
import Shortcuts from '@/components/layout/shortcuts';
import SugestionsForYou from '@/components/layout/sugestionsForYou';

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
                <DefaultCard>novo post</DefaultCard>
                <div className="feed-list flex-col gap">
                    {Array.from({ length: 10 }, (_, i: number) => (
                        <DefaultCard key={i}>post</DefaultCard>
                    ))}
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

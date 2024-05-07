import './_styles.scss';
import DefaultCard from '@/components/cards/defaultCard';

export default function KnowledgeTest(): JSX.Element {
    return (
        <DefaultCard className="content-card knowledge-test">
            <>
                <div className="title">
                    <h4>Teste seu conhecimento</h4>
                    <div className="knowledge-logo" />
                </div>
                <div className="description">e ganhe recompensas</div>
                <button>Testar agora</button>
            </>
        </DefaultCard>
    );
}

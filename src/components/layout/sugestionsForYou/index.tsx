import './_styles.scss';
import DefaultCard from '@/components/cards/defaultCard';

export default function SugestionsForYou(): JSX.Element {
    return (
        <DefaultCard className="content-card sugestion-for-you">
            <>
                <h4>Sugestões para você</h4>
                <div className="divisor" />
                <div className="image-suggestion" />
                <button>Certificação</button>
            </>
        </DefaultCard>
    );
}

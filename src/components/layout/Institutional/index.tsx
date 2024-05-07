import DefaultCard from '@/components/cards/defaultCard';
import './_styles.scss';

export default function Institucional(): JSX.Element {
    return (
        <DefaultCard className="content-card institutional">
            <h4>Institucional</h4>
            <div className="divisor" />
            <div className="links">
                <button className="link play">Learning</button>
                <button className="link about">Sobre nós</button>
                <button className="link certification">Certificação</button>
                <button className="link lgpd">LGPD</button>
            </div>
        </DefaultCard>
    );
}

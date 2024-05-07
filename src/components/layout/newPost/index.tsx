import { CSSProperties } from 'react';
import './_styles.scss';
import DefaultCard from '@/components/cards/defaultCard';

export default function NewPost(): JSX.Element {
    return (
        <DefaultCard className="content-card new-post">
            <>
                <div className="post-row">
                    <div className="hide-sm">
                        <div
                            className="avatar"
                            style={
                                {
                                    '--image': 'url(/images/marco.jpeg)'
                                } as CSSProperties
                            }
                        />
                    </div>
                    <textarea placeholder="Começar publicação" rows={4} />
                </div>
                <div className="divisor" />
                <div className="btns-rows">
                    <button className="btn-rounded image" />
                    <button className="btn-rounded calendar" />
                    <button className="btn-rounded papper" />
                    <button className="btn-submit">Postar</button>
                </div>
            </>
        </DefaultCard>
    );
}

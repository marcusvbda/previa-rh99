'use client';
import './_styles.scss';
import { ReactNode, useState } from 'react';

interface IProps {
    content: ReactNode;
}

export default function Collapse({ content }: IProps) {
    const [visible, setVisible] = useState(false);

    const toggleVisible = (e: any) => {
        e.preventDefault();
        setVisible(!visible);
    };

    return (
        <>
            {visible && content}
            <div className="text-center mb-4">
                <a
                    href="#"
                    onClick={toggleVisible}
                    className={`see-more ${visible ? 'visible' : 'hidden'}`}
                >
                    Ver {visible ? 'menos' : 'mais'}
                </a>
            </div>
        </>
    );
}

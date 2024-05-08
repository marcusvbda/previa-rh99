import { CSSProperties, ReactNode } from 'react';
import './_styles.scss';
import DefaultCard from '@/components/cards/defaultCard';
import { title } from 'process';

interface IPost {
    title: string;
    avatar: string;
    days: number;
    likes: number;
    children: ReactNode;
    name: string;
    desc1: string;
    desc2: string;
}

export default function Post({
    title,
    avatar,
    name,
    desc1,
    desc2,
    children,
    likes,
    days
}: IPost): JSX.Element {
    return (
        <DefaultCard className="content-card post">
            <>
                <div className="title-row">
                    <strong>{title}</strong>
                    <button>Unir-se</button>
                </div>
                <div className="user-row">
                    <div
                        className="avatar"
                        style={{ '--image': `url(${avatar})` } as CSSProperties}
                    />
                    <div className="description">
                        <div className="name">
                            {name}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M15.3327 7.99333L13.706 6.13333L13.9327 3.67333L11.526 3.12667L10.266 1L7.99935 1.97333L5.73268 1L4.47268 3.12667L2.06602 3.66667L2.29268 6.13333L0.666016 7.99333L2.29268 9.85333L2.06602 12.32L4.47268 12.8667L5.73268 15L7.99935 14.02L10.266 14.9933L11.526 12.8667L13.9327 12.32L13.706 9.86L15.3327 7.99333ZM12.6993 8.98L12.326 9.41333L12.3793 9.98L12.4993 11.28L10.6727 11.6933L10.3793 12.1867L9.71935 13.3067L8.53268 12.7933L7.99935 12.5667L7.47268 12.7933L6.28602 13.3067L5.62602 12.1933L5.33268 11.7L3.50602 11.2867L3.62602 9.98L3.67935 9.41333L3.30602 8.98L2.44602 8L3.30602 7.01333L3.67935 6.58L3.61935 6.00667L3.49935 4.71333L5.32601 4.3L5.61935 3.80667L6.27935 2.68667L7.46601 3.2L7.99935 3.42667L8.52602 3.2L9.71268 2.68667L10.3727 3.80667L10.666 4.3L12.4927 4.71333L12.3727 6.01333L12.3193 6.58L12.6927 7.01333L13.5527 7.99333L12.6993 8.98Z"
                                    fill="#3F47CC"
                                />
                                <path
                                    d="M6.72602 9.16667L5.17935 7.61333L4.19268 8.60667L6.72602 11.1467L11.6193 6.24L10.6327 5.24667L6.72602 9.16667Z"
                                    fill="#3F47CC"
                                />
                            </svg>
                        </div>
                        <small>{desc1}</small>
                        <small>
                            {desc2}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                            >
                                <path
                                    d="M1.75 6.99988H4.18367C5.09483 6.99988 5.83333 6.26138 5.83333 5.35021V5.35021C5.83333 4.91271 5.6595 4.49271 5.35033 4.18355L3.91825 2.75146"
                                    stroke="#B4B4B4"
                                    stroke-width="0.875"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M10.6705 10.7555L9.63396 9.20092C9.44612 8.91917 9.13054 8.75 8.79221 8.75V8.75C8.40896 8.75 8.05896 8.53358 7.88746 8.19058L7.80987 8.03542C7.66754 7.75075 7.66754 7.41533 7.80987 7.13067L8.47079 5.80883C8.64171 5.46642 8.99229 5.25 9.37554 5.25H11.9469"
                                    stroke="#B4B4B4"
                                    stroke-width="0.875"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 1.75C9.90617 1.75 12.25 4.09383 12.25 7C12.25 9.90617 9.90617 12.25 7 12.25"
                                    stroke="#B4B4B4"
                                    stroke-width="0.875"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 12.25C4.09383 12.25 1.75 9.90617 1.75 7C1.75 4.09383 4.09383 1.75 7 1.75"
                                    stroke="#B4B4B4"
                                    stroke-width="0.875"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </small>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M18.5024 12C18.5024 12.2762 18.2784 12.5002 18.0022 12.5002C17.7259 12.5002 17.502 12.2762 17.502 12C17.502 11.7237 17.7259 11.4998 18.0022 11.4998C18.2784 11.4998 18.5024 11.7237 18.5024 12"
                            stroke="#3F47CC"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12.4985 12C12.4985 12.2762 12.2745 12.5002 11.9983 12.5002C11.722 12.5002 11.498 12.2762 11.498 12C11.498 11.7237 11.722 11.4998 11.9983 11.4998C12.2745 11.4998 12.4985 11.7237 12.4985 12"
                            stroke="#3F47CC"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M6.49651 12C6.49651 12.2762 6.27256 12.5002 5.9963 12.5002C5.72004 12.5002 5.49609 12.2762 5.49609 12C5.49609 11.7237 5.72004 11.4998 5.9963 11.4998C6.27256 11.4998 6.49651 11.7237 6.49651 12"
                            stroke="#3F47CC"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <div className="post-content">{children}</div>
                <div className="like-row">
                    <small>{days} dias atrás</small>
                    <strong className="answer">Responder</strong>
                    <div className="like">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M8.29904 10.4994V20.0033"
                                stroke="#3F47CC"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.29916 10.4995L10.6359 4.62747C10.8375 4.12075 11.4079 3.8689 11.9182 4.06123L12.5577 4.30224C13.7266 4.74282 14.5005 5.86141 14.5005 7.11064V10.4994H17.5005C18.2706 10.4994 18.9979 10.8542 19.4718 11.4613C19.9458 12.0683 20.1136 12.8599 19.9268 13.607L18.8014 18.1089C18.523 19.2223 17.5227 20.0034 16.375 20.0034H5.49672C4.66795 20.0034 3.99609 19.3315 3.99609 18.5027V12C3.99609 11.1712 4.66795 10.4994 5.49672 10.4994L8.29916 10.4995Z"
                                stroke="#3F47CC"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        {likes}
                    </div>
                </div>
                <div className="share-row">
                    <div className="share">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.0817 8.94967C6.19364 9.50132 2.49865 13.6346 2.49609 18.5537V19.1659C4.62047 16.6068 7.75615 15.1025 11.0817 15.0472V18.2756C11.0818 18.744 11.3495 19.1711 11.7711 19.3754C12.1926 19.5797 12.6938 19.5251 13.0615 19.235L21.0548 12.9233C21.3386 12.6997 21.5042 12.3583 21.5042 11.9969C21.5042 11.6356 21.3386 11.2942 21.0548 11.0706L13.0615 4.75892C12.6938 4.46875 12.1926 4.4142 11.7711 4.61847C11.3495 4.82274 11.0818 5.24991 11.0817 5.71832V8.94967Z"
                                stroke="#3F47CC"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>{' '}
                        Compartilhar
                    </div>
                    <div className="answer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.5409 3.5H14.0364C17.8823 3.50001 21 6.61773 21 10.4636V10.5359C21 12.3828 20.2663 14.154 18.9604 15.4599C17.6545 16.7659 15.8832 17.4995 14.0364 17.4995H13.0131C13.0059 17.4995 13 17.5054 13 17.5126V19.775C13 20.031 12.8648 20.2679 12.6445 20.3982C12.4242 20.5285 12.1514 20.5327 11.9271 20.4094L6.90686 17.6483C4.49715 16.323 3 13.791 3 11.0409V11.0409C2.99999 9.0409 3.79447 7.12285 5.20866 5.70866C6.62284 4.29448 8.54089 3.5 10.5409 3.5Z"
                                stroke="#3F47CC"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9 9.5H15"
                                stroke="#3F47CC"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9 12.5H11.4"
                                stroke="#3F47CC"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        2 respostas
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M2 11.0002L8 5.00024L14 11.0002"
                                stroke="#3F47CC"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </>
        </DefaultCard>
    );
}

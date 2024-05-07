import Image from 'next/image';
import './_styles.scss';
import DefaultCard from '@/components/cards/defaultCard';
import Notifications from '../notifications';
import DropdownUser from '../dropdownUser';

export default function Navbar(): JSX.Element {
    return (
        <DefaultCard className="navbar">
            <>
                <div className="logo">
                    <Image fill src="/images/logo.svg" alt="logo" />
                </div>
                <div className="icon-input filter">
                    <input type="text" placeholder="Pesquisa" />
                </div>
                <Notifications />
                <DropdownUser />
            </>
        </DefaultCard>
    );
}

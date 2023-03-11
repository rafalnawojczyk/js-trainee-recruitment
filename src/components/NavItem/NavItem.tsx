import styles from './NavItem.module.scss';

interface NavItemProps {
    text: string;
    active: boolean;
    onClick: (id: string) => void;
    id: string;
}

const NavItem = ({ text, active, onClick, id }: NavItemProps) => {
    return (
        <li
            onClick={onClick.bind(null, id)}
            className={`${styles.list__element} ${active ? styles['list__element--active'] : ''}`}
        >
            {text}
        </li>
    );
};

export default NavItem;

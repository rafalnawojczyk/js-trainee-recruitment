import { MutableRefObject, useEffect, useState } from 'react';
import NavItem from '../NavItem/NavItem';
import styles from './SidebarNav.module.scss';
import { useIsInViewport } from '../../../hooks/useIsInViewport';

interface SidebarNavProps {
    navElements: { title: string; id: string }[];
    title: string;
    refs: MutableRefObject<MutableRefObject<HTMLDivElement>[] | null>;
}

const SidebarNav = ({ navElements, title, refs }: SidebarNavProps) => {
    const [activeItem, setActiveItem] = useState(navElements[0].id);

    const intersecting: string = useIsInViewport(refs);

    const onClick = (id: string) => {
        // console.log(refs.current[0].current.id);
        const element = refs.current?.filter(ref => ref.current.id === id);
        element?.[0].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    useEffect(() => {
        setActiveItem(intersecting);
    }, [intersecting]);

    return (
        <nav className={styles.sidebar}>
            <p className={styles.sidebar__title}>{title}</p>
            <ul className={styles.sidebar__list}>
                {navElements.map(el => (
                    <NavItem id={el.id} onClick={onClick} text={el.title} key={el.id} active={el.id === activeItem} />
                ))}
            </ul>
        </nav>
    );
};

export default SidebarNav;

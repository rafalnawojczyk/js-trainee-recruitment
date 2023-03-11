import { Inter } from 'next/font/google';
import { GetStaticProps } from 'next';
import styles from './index.module.scss';

const inter = Inter({ subsets: ['latin'] });

import { SERVER } from '../../config';
import HomepageData from '../../models/HomepageData';
import PostCard from '@/components/PostCard/PostCard';
import SidebarNav from '@/components/SidebarNav/SidebarNav';
import { createRef, MutableRefObject, useRef } from 'react';

interface homepageProps {
    data: { title: string; data: HomepageData[] };
}

export default function Home({ data }: homepageProps) {
    const refs = useRef<MutableRefObject<HTMLDivElement>[] | null>(null);
    // @ts-ignore
    refs.current = data.data.map((element, i) => createRef());

    return (
        <>
            <header className={styles.header} />
            <main className={inter.className}>
                <SidebarNav
                    refs={refs}
                    title={data.title}
                    navElements={data.data.map(el => ({ title: el.title, id: el.id }))}
                />
                <section className={styles.section} aria-label="Animals post section">
                    {data.data.map((post, index) => (
                        <PostCard ref={refs?.current?.[index]} key={post.id} {...post} />
                    ))}
                </section>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    const homepageDataRes = await fetch(`${SERVER}api/animals-data`);

    const data: { title: string; data: HomepageData[] } = (await homepageDataRes.json()).data;

    return {
        props: {
            data,
        },
    };
};

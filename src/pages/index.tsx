import { Inter } from 'next/font/google';
import { GetStaticProps } from 'next';

const inter = Inter({ subsets: ['latin'] });

import { SERVER } from '../../config';
import HomepageData from '../../models/HomepageData';
import PostCard from '@/components/PostCard/PostCard';

interface homepageProps {
    data: HomepageData[];
}

export default function Home({ data }: homepageProps) {
    return (
        <main className={inter.className}>
            {data.map(post => (
                <PostCard key={post.title} {...post} />
            ))}
        </main>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    const homepageDataRes = await fetch(`${SERVER}api/animals-data`);

    const data: HomepageData[] = (await homepageDataRes.json()).data;

    return {
        props: {
            data,
        },
    };
};

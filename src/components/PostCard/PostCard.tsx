import Image from 'next/image';
import { forwardRef } from 'react';
import HomepageData from '../../../models/HomepageData';
import PostTitle from '../PostTitle/PostTitle';
import styles from './PostCard.module.scss';

const PostCard = forwardRef<HTMLDivElement, HomepageData>(
    ({ title, subtitle, image, accentWord, altText, id }, ref) => {
        return (
            <div ref={ref} id={id} className={styles.post__wrapper}>
                <p className={styles.post__title}>{title}</p>
                <PostTitle text={subtitle} accentWord={accentWord} className={styles.post__subtitle} />
                <div className={styles.post__imageWrapper}>
                    <Image alt={altText} src={image} className={styles.post__image} fill />
                </div>
            </div>
        );
    }
);

PostCard.displayName = 'PostCard';

export default PostCard;

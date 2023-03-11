import Image from 'next/image';
import HomepageData from '../../../models/HomepageData';
import PostTitle from '../PostTitle/PostTitle';
import styles from './PostCard.module.scss';

const PostCard = ({ title, subtitle, image, accentWord, altText }: HomepageData) => {
    return (
        <div className={styles.post__wrapper}>
            <span className={styles.post__title}>{title}</span>
            <PostTitle text={subtitle} accentWord={accentWord} className={styles.post__subtitle} />
            <div className={styles.post_imageWrapper}>
                <Image alt={altText} src={image} className={styles.post__image} fill={true} />
            </div>
        </div>
    );
};

export default PostCard;

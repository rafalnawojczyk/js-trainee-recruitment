import styles from './PostTitle.module.scss';

interface PostTitleProps {
    text: string;
    accentWord: number;
    className: string;
}

const PostTitle = ({ text, accentWord, className }: PostTitleProps) => {
    return (
        <h3 className={className}>
            {text
                .split(' ')
                .map((word, index) => (index + 1 === accentWord ? <span key={word}>{word} </span> : word + ' '))}
        </h3>
    );
};

export default PostTitle;

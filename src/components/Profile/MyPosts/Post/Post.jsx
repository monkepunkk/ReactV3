import  './Post.module.css';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://krasivosti.pro/uploads/posts/2021-03/1616435996_15-p-smeshnoi-kot-foto-koshka-15.jpg" alt="avatar" />
                {'   '+ props.message}
            </div>
        </div>
    )
}
export default Post;
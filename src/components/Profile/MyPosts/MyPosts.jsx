import  './MyPosts.css';
import Post from './Post/Post'
const MyPosts = (props) => {
    let postsElements = props.postsData.map(p => <Post message = {p.message} likes = {p.likes}/>)
    return (
        <div>
            <div>
            <textarea name="Tell us something" id="" cols="30" rows="2"></textarea>
            </div>
            <button>Send</button>
            <div className='post_wrapper'>
                {postsElements}
            </div>


        </div>
    )
}
export default MyPosts; 
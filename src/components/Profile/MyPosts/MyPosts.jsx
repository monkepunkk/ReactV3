import  './MyPosts.css';
import Post from './Post/Post'
const MyPosts = () => {
    return (
        <div>
            <div>
            <textarea name="Tell us something" id="" cols="30" rows="2"></textarea>
            </div>
            <button>Send</button>
            <div className='post_wrapper'>
                <Post message = 'Alo ebat!' />
                <Post message = 'Eto kto?'/>
            </div>


        </div>
    )
}
export default MyPosts; 
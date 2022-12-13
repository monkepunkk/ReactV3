import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
import './Profile.css';
const Profile = (props) => {
    
    return (
        <div>
            <div>
                <img className='MainBG' src='https://images3.alphacoders.com/157/thumb-1920-157265.jpg'></img>
            </div>
            <div className='profile_wrapper'>
                <div className='profile_info'>ava + Description </div>
                <MyPosts postsData= {props.postsData}/>
            </div>
        </div>
    )
}
export default Profile;
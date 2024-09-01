import Stories from '../../components/stories/Stories';
import Posts from '../../components/posts/Posts';
import  './Home.scss'
import Feed from '../../components/feed/Feed';

const Home = () => {
     
  return (
    <div className='home'>
     <Stories />
     <div className="post">
     <Feed />
   </div>
    <Posts />

    </div>
  )
}

export default Home

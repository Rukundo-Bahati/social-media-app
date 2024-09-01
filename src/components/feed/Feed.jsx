import user from "../../assets/portfolio.png";
import "./feed.scss";

const Feed = () => {
  return (
    <div>
      <form className="create-post">
        <div className="create-post-contents">
          <div className="profile-picture">
            <img src={user} alt="profile-picture" className="profile-img" />
          </div>
          <div className="middle">
            <div className="upper">
              <input
                type="text"
                placeholder="What's on your Mind?, Diana"
                id="create-post"
                className="create-post-input"
              />
              <button className="custom-button">Post</button>
            </div>
            <div className="lower">
              <div className="video">
                <a href="#">Live video</a>
              </div>
              <div className="photo">
                <a href="#">photo/video</a>
              </div>
              <div className="activity">
                <a href="#">Feeling/Activity</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feed;

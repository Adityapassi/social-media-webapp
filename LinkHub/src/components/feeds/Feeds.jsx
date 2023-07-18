import "./feed.css";
import Share from "../share/Share";
import Post from "../posts/Post";
import { Posts } from "../../dummyData";

const Feeds = () => {
  return (
    <main className="feeds">
      <div className="feedwrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </main>
  );
};

export default Feeds;

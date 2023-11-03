/**
 * 1. Import styling file ✅
 * 2. Get the thoughts and render them in a list ✅
 * 3. Listen to the like button and add an onClick event to it will incease each time.
 * 4. At date-fns to update the time when the thought was created. Use date-fns that is more lightweight. Install npm install date-fns ✅
 */
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import "./ThoughtList.scss";

export const ThoughtList = ({ thoughts }) => {
  //   const { likes, setLikes } = useState(null);
  const handleLikes = (hearts) => {
    // THOUGHT_ID/like
    // setLikes(hearts);
  };

  return (
    <div className="list-wrapper">
      {thoughts.map((thought) => (
        <div key={thought._id} className="message">
          <p>{thought.message}</p>
          <div className="info-wrapper">
            <div className="info-like">
              {/* add onClick to handle Likes */}
              <button
                id="likeBtn"
                className="like-button"
                type="button"
                // onClick={setLikes}
              >
                <span className="emoji" aria-label="like button">
                  ❤️
                </span>
              </button>
              {/* update the num of likes */}
              <span className="num-likes">
                {" "}
                x {handleLikes(thought.hearts)}
              </span>
            </div>
            <div className="info-time">
              {formatDistanceToNow(new Date(thought.createdAt), {
                locale: enUS, // set locale
                addSuffix: true, // This adds "ago" at the end
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

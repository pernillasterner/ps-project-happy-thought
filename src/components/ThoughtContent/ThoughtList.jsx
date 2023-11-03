/**
 * 1. Import styling file ✅
 * 2. Get the thoughts and render them in a list ✅
 * 3. Listen to the like button and add an onClick event to it will incease each time.
 * 4. At date-fns to update the time when the thought was created. Use date-fns that is more lightweight. Install npm install date-fns
 */
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import "./ThoughtList.scss";

export const ThoughtList = ({ thoughts }) => {
  return (
    <div className="list-wrapper">
      {thoughts.map((thought) => (
        <div id={thought._id} className="message">
          <p>{thought.message}</p>
          <div className="info-wrapper">
            <div className="info-like">
              <button id="likeBtn" className="like-button" type="button">
                <span className="emoji" aria-label="like button">
                  ❤️
                </span>
              </button>
              <span className="num-likes"> x {thought.hearts}</span>
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

/**
 * 1. Add template and styling ✅
 * 2. Import makePostRequest function and post a request to the server ✅
 * 3. Handle validation errors ✅
 * 4. Check that the characters are more than 5 and less than 140. ✅
 * 5. Make 0 / 140 count up while typing
 */
import { useState } from "react";
import { makePostRequest } from "../Api";
import "./ThoughtForm.scss";

export const ThoughtForm = () => {
  const [messageContent, setMessageContent] = useState("");
  let errorMessage = "";

  const handleSubmit = (e) => {
    // e.preventDefault();

    // Handle form validation
    const validStringRegex = /^[A-Za-z0-9\s!.,?'"]*$/;

    if (!validStringRegex.test(messageContent)) {
      errorMessage = "The string contains invalid characters";
    } else if (messageContent.length < 5) {
      errorMessage =
        "Your message is too short, it needs at least 5 letters 😔";
    } else if (messageContent.length > 140) {
      errorMessage = "Your message is too long 😔";
    } else {
      // Handle form submission
      makePostRequest(messageContent);
      setMessageContent("");
    }
    return errorMessage;
  };

  return (
    <div className="post-wrapper">
      <h2>What is making you happy right now?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            name="messageContent"
            rows={3}
            placeholder="'If music be the food of love, play on.' – William Shakespeare"
            width={454}
            height={76}
            required={true}
            onChange={(e) => setMessageContent(e.target.value)}
          />
        </label>
        <div className="post-length">
          <p className="error">{errorMessage}</p>
          <p className="length">0 / 140</p>
        </div>
        <button
          id="submitPostBtn"
          type="submit"
          aria-label="button for submitting your post"
        >
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
          Send Happy Thought
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
        </button>
      </form>
    </div>
  );
};

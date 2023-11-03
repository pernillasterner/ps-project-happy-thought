/**
 * 1. Fetch recent thoughts from the API ✅
 * 2. Import ThoughtFrom and ThoughtList
 * 3. Send in the thought list to ThoughtList
 */

import { useEffect, useState } from "react";
import { makeGetRequest } from "../Api";
import { ThoughtList } from "./ThoughtList";

export const ThoughtContent = () => {
  const [thoughts, setThoughts] = useState([]);

  // Fetch the latest thought from the API
  useEffect(() => {
    makeGetRequest()
      .then((data) => {
        setThoughts(data);
      })
      .catch((error) => {
        console.log("No thoughts found", error);
      });
  }, []);

  console.log(thoughts);
  return (
    <>
      <div>The Form: send the apiURL as a props</div>
      <ThoughtList thoughts={thoughts} />
    </>
  );
};

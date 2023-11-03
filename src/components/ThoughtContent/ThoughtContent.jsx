/**
 * 1. Fetch recent thoughts from the API
 * 2. Import ThoughtFrom and ThoughtList
 * 3. Send in the thought list to ThoughtList
 */

import { useEffect, useState } from "react";

export const ThoughtContent = () => {
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [thoughts, setThoughts] = useState([]);

  // Fetch the latest thought from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setThoughts(data);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    fetchData();
  }, []);
  console.log(thoughts);

  return (
    <>
      <div>The Form: send the apiURL as a props</div>
      <div>The List . /THOUGHT_ID/like</div>
    </>
  );
};

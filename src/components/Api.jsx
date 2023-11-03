/**
 * Make Get and Post functions
 */

const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

const makeGetRequest = async () => {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching data", err);
  }
};

const makePostRequest = async (thought) => {
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Add the body with data to post
      body: JSON.stringify({
        message: thought,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error(`Failed to make a POST request: ${res.status}`);
    }
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

export { makeGetRequest, makePostRequest };

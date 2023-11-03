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

export { makeGetRequest };

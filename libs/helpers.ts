import { Price } from "@/types";

export const getUrl = () => {
  // Initialize the url variable with a default value
  let url =
    // Check if NEXT_PUBLIC_SITE_URL environment variable is defined,
    // if not, check NEXT_PUBLIC_VERCEL_URL environment variable,
    // otherwise, default to "http://localhost:3000/"
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000/";

  // Ensure that the URL has a valid protocol prefix (https://)
  url = url.includes("http") ? url : `https://${url}`;

  // Ensure that the URL ends with a trailing slash (/)
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;

  // Return the processed URL
  return url;
};

export const postData = async ({
  url,
  data,
}: {
  url: string; // URL where the POST request will be sent
  data?: { price: Price }; // Optional data object to be sent with the request
}) => {
  console.log("POST REQUEST:", url, data);

  // Send a POST request using the fetch AP
  const res: Response = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin", // Send cookies with the request if the origin is the same
    body: JSON.stringify(data), // Convert data to JSON string and include it in the request body
  });

  // Check if the response is not OK (status code other than 2xx)
  if (!res.ok) {
    console.log("Error in POST", { url, data, res });

    throw new Error(res.statusText);
  }

  // Return the response data parsed as JSON
  return res.json();
};

import axios from "axios";

export const request = async (
  url,
  method = "GET",
  data = null,
  options = {}
) => {
  try {
    // Configure request
    const config = {
      url: `${url}`,
      method,
      headers: {
        "Content-Type": "application/json",
        // Add authorization token if present
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        ...options.headers,
      },
      // Include data for POST, PUT, PATCH
      data: method !== "GET" ? data : null,
      // Include params for GET requests
      params: method === "GET" ? data : null,
      ...options,
    };

    // Make the request
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("API request error:", error);
    throw error;
  }
};

import axios from 'axios';

export const request = async (url, method = 'GET', data = null, options = {}) => {
    try {
        // Configure request
        const config = {
            url: `${url}`,
            method,
            headers: {
                'Content-Type': 'application/json',
                // Add authorization token if present
                Authorization: `Bearer ${
                    localStorage.getItem('token') ||
                    'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hpenIxQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoie1wiSWRcIjoxMCxcIk5hbWVcIjpcIktoaXpyIEh1c3NhaW5cIixcIkVtYWlsXCI6XCJraGl6cjFAZ21haWwuY29tXCIsXCJSb2xlXCI6XCJVc2VyXCIsXCJQYXNzd29yZFwiOlwiXCIsXCJJc0RlbGV0ZWRcIjpmYWxzZSxcIklzQWN0aXZlXCI6ZmFsc2V9IiwiZXhwIjoxNzI1MDQ1MDAyfQ.g9u5fs1IbNcJIwmNbhjMrABj2VDU75i1rlUss1CC0ZMXeCWXDKWZvoKa-ccxDYXLiVwxVO3rvYpK4pCCQ28iJQ'
                }`,
                ...options.headers,
            },
            // Include data for POST, PUT, PATCH
            data: method !== 'GET' ? data : null,
            // Include params for GET requests
            params: method === 'GET' ? data : null,
            ...options,
        };

        // Make the request
        const response = await axios(config);
        return response.data;
    } catch (error) {
        // Handle error
        console.error('API request error:', error);
        throw error;
    }
};

import requests from "@utils/Requests";
import axios from "axios";

export async function GET(request, { params }) {
    try {
        const { query,page } = params;
        const response = await axios.get(requests[query]+page);
        const responseData = await response.data; // Extract the data from the response

        // You should also specify the Content-Type header to indicate that you're returning JSON
        const headers = {
            'Content-Type': 'application/json',
        };

        // Return the response as a JSON string
        return new Response(JSON.stringify(responseData), { headers });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return new Response('error', { status: 500 }); // You can customize the error response here
    }
}
import requests from '@utils/Requests';
import axios from 'axios';

export async function GET(
  request: string,
  { params }: { params: { query: string; page: string } }
) {
  try {
    const { query, page } = params;
    const response = await axios.get(
      requests[query as keyof typeof requests] + page
    );
    const responseData = await response.data;

    const headers = {
      'Content-Type': 'application/json',
    };

    return new Response(JSON.stringify(responseData), { headers });
  } catch (error) {
    console.error(error);
    return new Response('error', { status: 500 });
  }
}

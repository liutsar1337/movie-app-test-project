import requests from '@utils/Requests';
import axios, { AxiosResponse } from 'axios';

export async function GET(
  request: string,
  { params }: { params: { query: string; isMovie: string; id: string } }
) {
  try {
    const { query, isMovie, id } = params;
    const response: AxiosResponse = await axios.get(
      requests[query as keyof typeof requests] +
        isMovie +
        '/' +
        id +
        requests.apiKey
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

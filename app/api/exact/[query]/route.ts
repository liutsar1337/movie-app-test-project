import requests from '@utils/Requests';
import axios, { AxiosResponse } from 'axios';

export async function GET(
  request: string,
  { params }: { params: { query: string } }
) {
  try {
    const { query } = params;

    const requestLink: string = requests[query as keyof typeof requests];
    const response: AxiosResponse = await axios.get(requestLink);
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

import axios, { AxiosResponse } from 'axios';

interface Requests {
  [key: string]: string;
}

import requests from '@utils/Requests';

export async function GET(request: Request, { params }: { params: { query: string } }) {
  try {
    const { query } = params;

    const requestLink = (requests as Requests)[query];
    const response: AxiosResponse = await axios.get(requestLink);
    const responseData = await response.data;

    const headers = {
      "Content-Type": "application/json",
    };

    return new Response(JSON.stringify(responseData), { headers });
  } catch (error) {
    console.error(error);
    return new Response("error", { status: 500 });
  }
}

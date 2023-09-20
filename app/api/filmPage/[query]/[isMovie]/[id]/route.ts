import axios, { AxiosResponse } from 'axios';
import requests from '@utils/Requests';

interface Requests {
  [key: string]: string;
}

export async function GET(request: Request,  { params }: { params: { query: string; isMovie: string; id: string }}) {
  try {
    const { query, isMovie, id } = params;

    const requestLink = (requests as Requests)[query] + isMovie + '/' + id + requests.apiKey;
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

 
         
    
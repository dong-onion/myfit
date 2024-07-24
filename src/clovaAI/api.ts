import axios from 'axios';

const API_URL = 'https://yourfit.vercel.app';
const HEADERS = {
  'Content-Type': 'application/json',
};

export const fetchSWOTAnalysis = async (
  serviceDescription: string,
  level: number,
) => {
  try {
    const response = await axios.get(
      API_URL +
        `/api/swot?serviceDescription=${serviceDescription}&level=${level}`,
      {
        headers: HEADERS,
      },
    );

    console.log('response', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get SWOT Analysis: ' + (error as Error).message);
  }
};

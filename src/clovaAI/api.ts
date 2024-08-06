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
    console.log('run');
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

export const fetchOverallAnalysis = async (
  serviceDescription: string,
  categories: string[],
  weakness: string,
) => {
  try {
    const response = await axios.get(
      API_URL +
        `/api/overall?serviceDescription=${serviceDescription}&categories=${categories}&weakness=${weakness}`,
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

export const fetchPersona = async (serviceDescription: string) => {
  try {
    const response = await axios.get(
      API_URL + `/api/persona?serviceDescription=${serviceDescription}`,
      {
        headers: HEADERS,
      },
    );

    console.log('response', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get persona: ' + (error as Error).message);
  }
};

export const fetchBusinessModelCanvas = async (serviceDescription: string) => {
  try {
    const response = await axios.get(
      API_URL + `/api/bm-canvas?serviceDescription=${serviceDescription}`,
      {
        headers: HEADERS,
      },
    );

    console.log('response', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get bmCanvas: ' + (error as Error).message);
  }
};

export const fetchCustomerJourneyMap = async (serviceDescription: string) => {
  try {
    const response = await axios.get(
      API_URL +
        `/api/customer-journey-map?serviceDescription=${serviceDescription}`,
      {
        headers: HEADERS,
      },
    );

    console.log('response', response.data);
    return response.data;
  } catch (error) {
    throw new Error(
      'Failed to get customerJourneyMap: ' + (error as Error).message,
    );
  }
};

export const fetchBlueprint = async (serviceDescription: string) => {
  try {
    const response = await axios.get(
      API_URL + `/api/blueprint?serviceDescription=${serviceDescription}`,
      {
        headers: HEADERS,
      },
    );

    console.log('response', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get blueprint: ' + (error as Error).message);
  }
};

export const fetchSystemMap = async (serviceDescription: string) => {
  try {
    const response = await axios.get(
      API_URL + `/api/system-map?serviceDescription=${serviceDescription}`,
      {
        headers: HEADERS,
      },
    );

    console.log('response', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get system-map: ' + (error as Error).message);
  }
};

export const fetchBenchmark = async (serviceDescription: string) => {
  try {
    const response = await axios.get(
      API_URL + `/api/benchmark?serviceDescription=${serviceDescription}`,
      {
        headers: HEADERS,
      },
    );

    console.log('response', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get benchmark: ' + (error as Error).message);
  }
};

import { useQuery } from 'react-query';
import { queryKeys } from '@/utility/constants';
import { fetchBusinessModelCanvas } from '@/clovaAI/api';
import { BMCanvas, parseBMCanvas } from '@/utility/utils';

interface SWOTAnalysisResponse {
  result: {
    message: {
      content: string;
    };
  };
}

export const useBusinessModelCanvas = (serviceDescription: string) => {
  const { data, isLoading, isError, refetch } = useQuery<BMCanvas, Error>(
    [queryKeys.BUSINESS_MODEL_CANVAS, serviceDescription],
    () =>
      fetchBusinessModelCanvas(serviceDescription).then(
        (data: SWOTAnalysisResponse) => {
          const parsedData = parseBMCanvas(data.result.message.content);
          if (!parsedData) {
            throw new Error('Failed to parse SWOT Analysis');
          }
          return parsedData;
        },
      ),
    {
      staleTime: 1000 * 60 * 5,
    },
  );

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

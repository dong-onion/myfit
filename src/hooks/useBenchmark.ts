import { useQuery } from 'react-query';
import { queryKeys } from '@/utility/constants';
import { fetchBenchmark } from '@/clovaAI/api';
import { parseBenchmark } from '@/utility/utils';

interface SWOTAnalysisResponse {
  result: {
    message: {
      content: string;
    };
  };
}

export const useBenchmark = (serviceDescription: string) => {
  const { data, isLoading, isError, refetch } = useQuery<any, Error>(
    [queryKeys.BENCHMARK, serviceDescription],
    () =>
      fetchBenchmark(serviceDescription).then((data: SWOTAnalysisResponse) => {
        const parsedData = parseBenchmark(data.result.message.content);
        if (!parsedData) {
          throw new Error('Failed to parse SWOT Analysis');
        }
        return parsedData;
      }),
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

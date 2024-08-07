import { useQuery } from 'react-query';
import { queryKeys } from '@/utility/constants';
import { fetchOverallAnalysis } from '@/clovaAI/api';

interface SWOTAnalysisResponse {
  result: {
    message: {
      content: string;
    };
  };
}

export const useOverallAnalysis = (
  serviceDescription: string,
  categories: string[],
  weakness: string,
) => {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery<
    string,
    Error
  >(
    [queryKeys.OVERALL_ANALYSIS, serviceDescription],
    () =>
      fetchOverallAnalysis(serviceDescription, categories, weakness).then(
        (data: SWOTAnalysisResponse) => {
          return data.result.message.content;
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
    isRefetching,
  };
};

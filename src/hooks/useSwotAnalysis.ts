import { useQuery } from 'react-query';
import { queryKeys } from '@/utility/constants';
import { SWOTAnalysis, parseSWOTAnalysis } from '@/utility/utils';
import { fetchSWOTAnalysis } from '@/clovaAI/api';

interface SWOTAnalysisResponse {
  result: {
    message: {
      content: string;
    };
  };
}

// SWOT 분석 훅
export const useSWOTAnalysis = (serviceDescription: string, level: number) => {
  const { data, isLoading, isError } = useQuery<SWOTAnalysis, Error>(
    [queryKeys.SWOT_ANALYSIS, serviceDescription],
    () =>
      fetchSWOTAnalysis(serviceDescription, level).then(
        (data: SWOTAnalysisResponse) => {
          const parsedData = parseSWOTAnalysis(data.result.message.content);
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
  };
};

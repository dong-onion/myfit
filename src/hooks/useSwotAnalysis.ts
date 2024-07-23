import { useQuery } from 'react-query';
import { fetchSWOTAnalysis } from '../clovaAI/api';
import { queryKeys } from '@/utility/constants';
import { SWOTAnalysis, parseSWOTAnalysis } from '@/utility/utils';

interface SWOTAnalysisResponse {
  result: {
    message: {
      content: string;
    };
  };
}

// SWOT 분석 훅
export const useSWOTAnalysis = (serviceDescription: string) => {
  return useQuery<SWOTAnalysis, Error>(
    [queryKeys.SWOT_ANALYSIS, serviceDescription],
    () =>
      fetchSWOTAnalysis(serviceDescription).then(
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
};

import { useQuery } from 'react-query';
import { queryKeys } from '@/utility/constants';
import { fetchSystemMap } from '@/clovaAI/api';
import { parseSystemMap, SystemMapItem } from '@/utility/utils';

interface SWOTAnalysisResponse {
  result: {
    message: {
      content: string;
    };
  };
}

export const useSystemMap = (serviceDescription: string) => {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery<
    SystemMapItem,
    Error
  >(
    [queryKeys.SYSTEM_MAP, serviceDescription],
    () =>
      fetchSystemMap(serviceDescription).then((data: SWOTAnalysisResponse) => {
        const parsedData = parseSystemMap(data.result.message.content);
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
    isRefetching,
  };
};

import { useQuery } from 'react-query';
import { queryKeys } from '@/utility/constants';
import { fetchBlueprint } from '@/clovaAI/api';
import { BlueprintItem, parseBlueprint } from '@/utility/utils';

interface SWOTAnalysisResponse {
  result: {
    message: {
      content: string;
    };
  };
}

export const useBlueprint = (serviceDescription: string) => {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery<
    BlueprintItem[],
    Error
  >(
    [queryKeys.BLUEPRINT, serviceDescription],
    () =>
      fetchBlueprint(serviceDescription).then((data: SWOTAnalysisResponse) => {
        const parsedData = parseBlueprint(data.result.message.content);
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

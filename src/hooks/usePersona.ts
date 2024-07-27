import { useQuery } from 'react-query';
import { queryKeys } from '@/utility/constants';
import { fetchPersona } from '@/clovaAI/api';
import { parsePersona, Persona } from '@/utility/utils';

interface SWOTAnalysisResponse {
  result: {
    message: {
      content: string;
    };
  };
}

export const usePersona = (serviceDescription: string) => {
  const { data, isLoading, isError, refetch } = useQuery<Persona, Error>(
    [queryKeys.PERSONA, serviceDescription],
    () =>
      fetchPersona(serviceDescription).then((data: SWOTAnalysisResponse) => {
        const parsedData = parsePersona(data.result.message.content);
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

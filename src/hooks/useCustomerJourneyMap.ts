import { useQuery } from 'react-query';
import { queryKeys } from '@/utility/constants';
import { fetchCustomerJourneyMap } from '@/clovaAI/api';
import {
  CustomerJourneyMapItem,
  parseCustomerJourneyMap,
} from '@/utility/utils';

interface SWOTAnalysisResponse {
  result: {
    message: {
      content: string;
    };
  };
}

export const useCustomerJourneyMap = (serviceDescription: string) => {
  const { data, isLoading, isError, refetch } = useQuery<
    CustomerJourneyMapItem[],
    Error
  >(
    [queryKeys.CUSTOMER_JOURNEY_MAP, serviceDescription],
    () =>
      fetchCustomerJourneyMap(serviceDescription).then(
        (data: SWOTAnalysisResponse) => {
          const parsedData = parseCustomerJourneyMap(
            data.result.message.content,
          );
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

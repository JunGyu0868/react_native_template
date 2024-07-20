import { useQuery } from '@tanstack/react-query';
// import { getCityList, getLoginUserInfo } from 'api/axios/common/common';

const useGetLoginUserInfoQuery = ({
  accessToken,
}: {
  accessToken: string | null;
}) => {
  return useQuery({
    queryKey: ['login-user-info'],
    queryFn: () => getLoginUserInfo(),
    gcTime: 1000 * 5,
    refetchOnWindowFocus: false,
    enabled: !!accessToken,
  });
};

export default useGetLoginUserInfoQuery;

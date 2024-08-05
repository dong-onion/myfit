// import { SESSION_KEYS } from '@/utility/constants';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const useAccessControl = () => {
//   const navigate = useNavigate();

//   const serviceDescriptionRaw = sessionStorage.getItem(
//     SESSION_KEYS.serviceDescription,
//   );
//   const levelRaw = sessionStorage.getItem(SESSION_KEYS.level);

//   if (serviceDescriptionRaw === null || levelRaw === null) {
//     navigate('/');
//     return { isValidSession: false };
//   }

//   let serviceDescription;
//   let level;

//   try {
//     serviceDescription = JSON.parse(serviceDescriptionRaw);
//     level = Number(JSON.parse(levelRaw));
//   } catch (e) {
//     console.error('Failed to parse session storage items:', e);
//     navigate('/');
//     return { isValidSession: false };
//   }

//   return { isValidSession: true, serviceDescription, level };
// };
import { SESSION_KEYS } from '@/utility/constants';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SessionState {
  isValidSession: boolean | null;
  serviceDescription: string | null;
  level: number | null;
}

export const useAccessControl = (): SessionState => {
  const navigate = useNavigate();
  const [sessionState, setSessionState] = useState<SessionState>({
    isValidSession: null,
    serviceDescription: null,
    level: null,
  });

  useEffect(() => {
    const serviceDescriptionRaw = sessionStorage.getItem(
      SESSION_KEYS.serviceDescription,
    );
    const levelRaw = sessionStorage.getItem(SESSION_KEYS.level);

    if (serviceDescriptionRaw === null || levelRaw === null) {
      setSessionState({
        isValidSession: false,
        serviceDescription: null,
        level: null,
      });
      navigate('/');
      return;
    }

    try {
      const serviceDescription = JSON.parse(serviceDescriptionRaw);
      const level = Number(JSON.parse(levelRaw));
      setSessionState({
        isValidSession: true,
        serviceDescription,
        level,
      });
    } catch (e) {
      console.error('Failed to parse session storage items:', e);
      setSessionState({
        isValidSession: false,
        serviceDescription: null,
        level: null,
      });
      navigate('/');
    }
  }, [navigate]);

  return sessionState;
};

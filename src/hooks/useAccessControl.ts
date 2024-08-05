import { useEffect } from 'react';
import { SESSION_KEYS } from '@/utility/constants';
import { useNavigate } from 'react-router-dom';

export const useAccessControl = () => {
  const navigate = useNavigate();

  const levelRaw = sessionStorage.getItem(SESSION_KEYS.level);
  const serviceDescriptionRaw = sessionStorage.getItem(
    SESSION_KEYS.serviceDescription,
  );

  useEffect(() => {
    if (!levelRaw || !serviceDescriptionRaw) {
      navigate('/');
    }
  }, [levelRaw, serviceDescriptionRaw, navigate]);

  if (!levelRaw || !serviceDescriptionRaw) {
    return { level: null, serviceDescription: null };
  }

  try {
    const level = Number(JSON.parse(levelRaw));
    const serviceDescription = JSON.parse(serviceDescriptionRaw);
    return { level, serviceDescription };
  } catch (error) {
    navigate('/');
    return { level: null, serviceDescription: null };
  }
};

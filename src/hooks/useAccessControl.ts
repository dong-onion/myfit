import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAccessControl = () => {
  const [isValidSession, setIsValidSession] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const description = sessionStorage.getItem('serviceDescription');
    const level = sessionStorage.getItem('level');

    if (description === null || level === null) {
      navigate('/');
    } else {
      setIsValidSession(true);
    }
  }, []);

  return { isValidSession };
};

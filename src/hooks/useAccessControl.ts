import { SESSION_KEYS } from '@/utility/constants';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAccessControl = () => {
  const navigate = useNavigate();

  const serviceDescriptionRaw = sessionStorage.getItem(
    SESSION_KEYS.serviceDescription,
  );
  const levelRaw = sessionStorage.getItem(SESSION_KEYS.level);

  if (!serviceDescriptionRaw || !levelRaw) {
    navigate('/');
    return { isValidSession: false };
  }

  let serviceDescription;
  let level;

  try {
    serviceDescription = JSON.parse(serviceDescriptionRaw);
    level = Number(JSON.parse(levelRaw));
  } catch (e) {
    console.error('Failed to parse session storage items:', e);
    navigate('/');
    return { isValidSession: false };
  }

  return { isValidSession: true, serviceDescription, level };
};

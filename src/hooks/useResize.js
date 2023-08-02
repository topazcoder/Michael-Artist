import React, { useEffect } from 'react';

export const useResize = (cb) => {
  useEffect(() => {
    window.addEventListener('resize', cb);
    return () => {
      window.removeEventListener('resize', cb);
    };
  }, [cb]);
};

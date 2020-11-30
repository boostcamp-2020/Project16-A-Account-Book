import { useState, useEffect, RefObject } from 'react';

const useVisible = (ref: RefObject<HTMLDivElement>) => {
  const [visible, setVisible] = useState(false);

  const outsideClickHandler = (event: any) => {
    if (!ref.current) return;
    if (ref && !ref.current.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', outsideClickHandler);
    return () => {
      document.removeEventListener('click', outsideClickHandler);
    };
  });
  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };
  return [visible, toggleVisible];
};

export default useVisible;

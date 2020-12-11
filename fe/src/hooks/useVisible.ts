import { useState, useEffect, RefObject } from 'react';

const useVisible = (ref: RefObject<HTMLDivElement>): [boolean, Function] => {
  const [visible, setVisible] = useState(false);

  const outsideClickHandler = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    if (!ref.current) return;
    if (event.target.closest('#date-picker')) return;

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

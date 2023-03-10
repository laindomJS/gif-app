import { useState, useEffect, useRef } from 'react';

export const useNearScreen = ({ distance = '150px', externalRef }) => {
  const [isNearScreen, setShow] = useState(false);

  const fromRef = useRef();

  useEffect(() => {

    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      } else {
        setShow(false);
      }
    }

    let observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    })

      if (element) observer.observe(element);
      return () => observer && observer.disconnect();

  })

  return {isNearScreen, fromRef}

}
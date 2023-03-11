import { useState, useEffect } from 'react';

export const useIsInViewport = refs => {
    const [isIntersecting, setIsIntersecting] = useState('');
    const [observers, setObservers] = useState([]);

    useEffect(() => {
        setObservers([]);

        refs.current.forEach(el => {
            if (!el) {
                return;
            }
            setObservers(prevObservers => [
                ...prevObservers,
                new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setIsIntersecting(entry.target.id);
                        }
                    },
                    { threshold: 0.51 }
                ),
            ]);
        });
    }, [refs]);

    useEffect(() => {
        observers.forEach((obs, index) => {
            if (!refs.current[index]?.current) {
                return;
            }
            obs.observe(refs.current[index].current);
        });
        return () => {
            observers.forEach(obs => obs.disconnect());
        };
    }, [refs, observers]);

    return isIntersecting;
};

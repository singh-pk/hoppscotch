import { useCallback, useEffect, useState } from 'react';

const useSSE = <T>(url: string | URL, events: string[]) => {
  const [data, setData] = useState<{ [key: string]: T[] }>({});
  const [isLoading, setIsLoading] = useState(true);

  const setEvents = useCallback((e: MessageEvent) => {
    const data = JSON.parse(e.data);

    setData(d => ({
      ...d,
      [e.type]: [...(d[e.type] ?? []), data[`${e.type}_data`]],
    }));
  }, []);

  const createEventListeners = useCallback((sse: EventSource) => {
    events.forEach(d => {
      sse.addEventListener(d, setEvents);
    });

    sse.addEventListener('open', () => {
      setIsLoading(false);
    });

    sse.addEventListener('error', () => {
      setIsLoading(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteEventListeners = useCallback((sse: EventSource) => {
    events.forEach(d => {
      sse.removeEventListener(d, setEvents);
    });

    sse.removeEventListener('open', () => {});

    sse.removeEventListener('error', () => {});

    sse.close();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const sse = new EventSource(url);

    createEventListeners(sse);

    return () => {
      deleteEventListeners(sse);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading };
};

export default useSSE;

import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, options);
                const result = await response.json();

                if(!response.ok) {
                    throw new Error(`Failed to fetch data.Result:${ response.status }`);
                }

                setData(result);
                saveToLocalStorage(result, response.status);
            } catch (err) {
                setError(err.message || 'Fetch error');
                saveToLocalStorage(options?.body, 'FETCH_ERROR');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(options)]);

    return { data, loading, error };
};

function saveToLocalStorage(body, status) {
    const logs = JSON.parse(localStorage.getItem('fetchLogs') || '[]');
    logs.push({
        timestamp: new Date().toISOString(),
        body: body || null,
        status,
    });
    localStorage.setItem('fetchLogs', JSON.stringify(logs));
}

export default useFetch;

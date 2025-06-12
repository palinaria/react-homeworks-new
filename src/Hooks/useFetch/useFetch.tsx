import { useState, useEffect } from "react";

type FetchOptions = RequestInit | undefined;

interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

function saveToLocalStorage(body: any, status: string | number) {
    const logs: Array<{ timestamp: string; body: any; status: string | number }> =
        JSON.parse(localStorage.getItem("fetchLogs") || "[]");
    logs.push({
        timestamp: new Date().toISOString(),
        body: body || null,
        status,
    });
    localStorage.setItem("fetchLogs", JSON.stringify(logs));
}

function useFetch<T = any>(
    url: string | null,
    options?: FetchOptions
): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, options);
                const result: T = await response.json();

                if (!response.ok) {
                    throw new Error(`Failed to fetch data. Result: ${response.status}`);
                }

                setData(result);
                saveToLocalStorage(result, response.status);
            } catch (err: any) {
                setError(err.message || "Fetch error");
                saveToLocalStorage(options?.body, "FETCH_ERROR");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(options)]);

    return { data, loading, error };
}

export default useFetch;

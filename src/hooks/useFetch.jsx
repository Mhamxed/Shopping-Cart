import { useState, useEffect } from "react";

function useFetch(API) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(API)
        .then((response) => {
            if (!response.ok) {
            throw new Error("server error");
            }
            return response.json()
        })
        .then((response) => setData(response))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }, [API])

    return { data, isLoading, error}
}

export default useFetch
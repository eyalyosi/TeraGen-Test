import { useEffect, useState } from "react";
import { reviewService } from './reviewService'

const useFetchData = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        let cancel = false
        const fetchData = async () => {
            if (!cancel) {
                setError(null);
                setLoading(true);
            }
            try {
                const reviews = await reviewService.query()
                if (!cancel) {
                    setData(reviews)
                }
            } catch (error) {
                if (!cancel) {
                    setError(error)
                }
            }
            if (!cancel) {
                setLoading(false)
            }
        }
        fetchData()
        return () => {
            cancel = true
        }
    }, []);
    return { loading, error, data }
}

export default useFetchData
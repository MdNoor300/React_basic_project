import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate.host/latest?base=${currency}`);
                const result = await response.json();
                console.log(result); // Log the API response to inspect the data

                // Check the expected response structure and update accordingly
                if (result && result.rates) {
                    setData(result.rates); // Assuming `rates` contains the currency rates
                } else {
                    console.error("Unexpected API response format:", result);
                }
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;

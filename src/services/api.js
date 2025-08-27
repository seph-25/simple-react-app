export const fetchProducts = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY,
                "Accept": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
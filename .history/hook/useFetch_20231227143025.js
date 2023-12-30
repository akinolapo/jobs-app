import { useState, useEffect } from "react";
import axios from "axios";
import Constants from 'expo-constants';

const rapidApiKey = Constants.manifest.extra.apiKey;



const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: { ... query},
      };

      const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request
            (options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        isLoading(true);
        fetchData();
      }

      return { data, isLoading, error, refetch};

      
}
export default useFetch;
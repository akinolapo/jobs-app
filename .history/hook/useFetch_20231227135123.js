import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${}`,
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '845ea87b68msh2742d9894fde6ebp1789ccjsn64ee6e16e934',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
}
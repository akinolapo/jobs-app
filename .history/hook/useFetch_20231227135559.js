import { useState, useEffect } from "react";
import axios from "axios";
import {RAPID_API_KEY}

const rapidApiKey =

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': ,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
      };
}
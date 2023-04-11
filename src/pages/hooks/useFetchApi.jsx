import { useState, useEffect } from "react";
import axios from "axios";
// import axios from '../../helper/axios'

const useFetchApi = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem('accessToken')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(url, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setData(response.data);
        setIsLoading(false);
        console.log(response.data, 'jjjjjjjjj')
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchApi;

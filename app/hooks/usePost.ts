import { useState } from "react";
import axios from "axios";

function usePost() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const { data: responseData } = await axios.post(url, apiData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { error, loading, data, post };
}

export default usePost;

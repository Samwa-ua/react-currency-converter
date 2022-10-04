import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const json = await data.json();
      setData(json);
      setIsPending(false);
    };
    fetchData().catch(console.error);
  }, [url]);

  return { data, isPending };
};

export default useFetch;

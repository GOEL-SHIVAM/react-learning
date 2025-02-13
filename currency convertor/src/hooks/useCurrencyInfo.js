import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${currency}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((res) => setData(res.rates))
      .catch((err) => setError(err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

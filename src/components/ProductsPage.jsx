import React, { useState, useEffect } from "react";
import Card from "../commonComponents/Card";
import { useAppContext } from "../contexts/AppContext";

const ProductsPage = () => {
  const {cards, setCards} = useAppContext();
  const [loading, setLoading] = useState(true);
  const [error,setError]=useState(false)

  useEffect(() => {
     window.scroll(0,0) ; // to scroll at the top of the page
    fetch("https://alkye-test-422384984803.us-central1.run.app/myapp/list/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setLoading(false);
        setError(true)
      });
  }, []);

 if(error) return <div className="my-10 text-center text-3xl text-red-600">Something went wrong!</div>
  return (
    <div className="">
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (    
        <div className="flex gap-6 ml-6 flex-col md:flex-row overflow-x-auto scroll-smooth md:pl-6 no-scrollbar">
          {cards.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[90vw] md:w-[66.66vw]" 
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;

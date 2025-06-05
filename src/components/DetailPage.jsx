import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const DetailPage = () => {
  const { cards } = useAppContext();
  const { id } = useParams();
   const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Try to find card from context first
    let card = cards?.find((c) => c.id === parseInt(id)) || null;

    if (card) {
      setSelectedCard(card);
      localStorage.setItem('selectedCard', JSON.stringify(card));
    } else {
      // If not found in context, try to get from localStorage
      const savedCard = localStorage.getItem('selectedCard');
      if (savedCard) {
        try {
          const parsedCard = JSON.parse(savedCard);
          // Double-check the stored card matches the id param
          if (parsedCard.id === parseInt(id)) {
            setSelectedCard(parsedCard);
          } else {
            setSelectedCard(null);
          }
        } catch {
          setSelectedCard(null);
        }
      }
    }
  }, [cards, id]);


  return (
    <div className=" w-full mx-auto">
      <img
        src={selectedCard?.image_url}
        alt={selectedCard?.tag}
        className="w-screen h-[80vh] p-6 md:p-0 rounded-lg lg:rounded-none object-fit mb-4"
      />
      <div className='p-6 md:p-20'>
    <span className="bg-black  text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
       Photography
      </span>
      <h1 className='py-2 font-bold  text-xl md:text-2xl'>{selectedCard?.title}</h1>
      <p className="text-black font-medium mt-2 text-md md:text-lg">{selectedCard?.content}</p>
      </div>
    </div>
  );
};

export default DetailPage;

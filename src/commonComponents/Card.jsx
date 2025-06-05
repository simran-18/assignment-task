
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Card = ({image_url, tag, short_description,id}) => {
  const navigate=useNavigate();
  return (
      <div
      className="relative rounded-3xl overflow-hidden shadow-md cursor-pointer"
      onClick={() =>
         {
         navigate(`/detail/${id}`)
        }}
    >
      <img src={image_url} alt={tag} className="w-full h-[60vh] object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
        <div className="absolute top-10 left-3 md:top-10 md:left-10">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black text-white text-xs font-light px-3 py-1 rounded-full w-fit mb-3"
          >
            Photography
          </motion.span>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white text-sm font-medium leading-snug mt-3 break-words"
          >
            {short_description}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Card
import { useState,useEffect } from "react";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
export function useCatImage({fact}){
    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
        if (!fact) return;
        const threeFirstWords = fact.split(" ", 3).join(" ");        
        fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=9cl80wYwhwQS2ItqD0ZcAfNryd0XipSP&q=${threeFirstWords}&limit=25&offset=0&rating=g&lang=en`
        ).then(
          res => res.json()
          ).then(response => {
            const { url } = response.data[0].images.downsized 
            console.log(response)           
            setImageUrl(url)
          });
      }, [fact]);
      
      return { imageUrl }
}
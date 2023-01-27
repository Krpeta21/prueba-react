import { useCatImage } from '../services/hooks/useCatImage'

export default function Otro ({ fact }) {
  const { imageUrl } = useCatImage({ fact })
  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}

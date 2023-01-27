import { useCatImage } from '../services/hooks/useCatImage'

export default function Otro () {
  const { imageUrl } = useCatImage({ fact: 'random fact' })
  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}

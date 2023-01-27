import './App.css'
import { useCatImage } from './services/hooks/useCatImage'
import { useCatFact } from './services/hooks/useCatFact'
import Otro from './components/Otro'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  const handleClick = async () => {
    refreshFact()
  }
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get New Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <Otro fact={fact} />
        )}
      </section>
    </main>
  )
}

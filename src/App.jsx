import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArray from './utils/getRandomFromArray'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImages from './utils/arrImages.json'

function App() {
  
  const initialValue = getRandomFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)

  const initialImage = getRandomFromArray(arrImages)
  const [imageSelected, setImageSelected]= useState(initialImage)



  const imageUrl = `/fondo${imageSelected}.png`;

  const objStyle = {
    backgroundImage: `url(${imageUrl})`
  }

  return (
    <div className="app" style={objStyle}>
      
<h1 className='app__title'>GALLETA DE LA FORTUNA</h1>

    <article className='app__card'>
      
      <PhraseCard phraseRandom={phraseRandom}/>

      <BtnPhrase 
      setPhraseRandom={setPhraseRandom} setImageSelected={setImageSelected}/>
    
      </article>
      
    </div>
  )
}

export default App

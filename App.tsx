import React from 'react'
import Cabecalho from '../src/components/Cabecalho'
import Hero from '../src/components/Hero'
import ListaVagas from '../src/containers/ListaVagas'
import { GlobalStyles } from './styles'

const App: React.FC = () => (
  <>
    <GlobalStyles /> {/* Adicione os estilos globais */}
    <Cabecalho />
    <Hero />
    <div className="container">
      <ListaVagas />
    </div>
  </>
)

export default App

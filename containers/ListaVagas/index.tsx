import React, { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { VagaItem } from '../ListaVagas' // Adjust the path based on your project structure

// Initialize the state variable
const [vagas, setVagas] = useState<VagaItem[]>([])

const ListaVagas: React.FC = () => {
  return (
    <div>
      <FormVagas onSearch={(termo: string) => setFiltro(termo)} />
      <List>
        {vagasFiltradas.map((vaga) => (
          <Vaga
            key={vaga.id}
            title={vaga.title}
            // Other Vaga props...
          />
        ))}
      </List>
    </div>
  )
}

export default ListaVagas

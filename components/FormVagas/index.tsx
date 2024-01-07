import React, { FormEvent, useState } from 'react'
import { Form, Input, Button } from './styles'

interface FormVagasProps {
  aoPesquisar: (termo: string) => void
}

const FormVagas: React.FC<FormVagasProps> = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  )
}

export default FormVagas

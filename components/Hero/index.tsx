import React from 'react'
import { Form, Overlay, Container, HeroTitle } from './styles'

const Hero: React.FC = () => (
  <Form>
    <Overlay />
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </Form>
)

export default Hero

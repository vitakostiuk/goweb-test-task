import React from 'react';
import Container from 'components/common/Container';
import Hero from 'components/Hero';
import About from 'components/About';
import Cases from 'components/Cases';
import Blog from 'components/Blog';
import Team from 'components/Team';
import FormComponent from 'components/Form/Form';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Container>
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <FormComponent />
        <Footer />
      </Container>
    </>
  );
}

export default App;

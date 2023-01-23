import React from 'react';
import { ToastContainer } from 'react-toastify';
import Container from 'components/common/Container';
import Hero from 'components/Hero';
import About from 'components/About';
import Cases from 'components/Cases';
import Blog from 'components/Blog';
import Team from 'components/Team';
import FormComponent from 'components/Form/Form';
import Footer from 'components/Footer';

import 'react-toastify/dist/ReactToastify.css';

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

        <ToastContainer position="top-center" autoClose={3000} limit={1} />
      </Container>
    </>
  );
}

export default App;

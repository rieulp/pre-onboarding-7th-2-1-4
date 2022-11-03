import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Detail from '@/pages/Detail';
import Home from '@/pages/Home';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <Layout>
        <Helmet>
          <title>Altimobility Carsharing Service</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

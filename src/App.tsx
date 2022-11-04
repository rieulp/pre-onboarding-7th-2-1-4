import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Detail from '@/pages/Detail';
import Home from '@/pages/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

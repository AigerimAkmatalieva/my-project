import Navbar from "./components/Navbar/Navbar";
import Courses from "./pages/Courses";
import Vacancies from "./pages/Vacancies";
import Freelans from "./pages/Freelans";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <Navbar/>
    <Layout>
    <Routes>
      <Route path="/vacancies" element={ <Vacancies/> } />
      <Route path="/freelans" element={ <Freelans/> } />
      <Route path="/courses" element={ <Courses/> } />
     </Routes>
    </Layout>
    <Header />
    <Footer/>
    </div>
  );
}

export default App;

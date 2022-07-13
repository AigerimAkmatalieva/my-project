import Navbar from "./components/Navbar/Navbar";
import Courses from "./pages/Courses";
import Freelans from "./pages/Freelans";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewsPortal from "./pages/News";
import Main from "./pages/Main";
import Auth from "./components/Auth/Auth";
import Checkout1 from "./pages/Checkout1";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/newsportal" element={<NewsPortal />} />
          <Route path="/freelans" element={<Freelans />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/auth" element={ <Auth/> } />
          <Route path="/checkout" element={ <Checkout1/> } />
        </Routes>
      </Layout>
    <Header />
      <Footer />
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/AboutUs/AboutUs';
import FirstPage from './Components/Pages/FirstPage';
import Childrens from './Components/Categories/Childrens/Childrens';
import LiteraryFiction from './Components/Categories/LiteraryFiction/LiteraryFiction';
import ScienceTechnology from './Components/Categories/ScienceTechnology/ScienceTechnology';
import CareerGrowth from './Components/Categories/CareerGrowth';
import ReligionSpirituality from './Components/Categories/ReligionSpirituality';
import Magazines from './Components/Categories/Magazines';
import LanguageStudies from './Components/Categories/LanguageStudies';
import History from './Components/Categories/History';
import PoliticsPhilosophy from './Components/Categories/PoliticsPhilosophy';
import Travel from './Components/Categories/Travel';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Signin from './Components/Pages/Signin';
import ChildCard from './Components/Categories/Childrens/ChildCard';
import LFCard from './Components/Categories/LiteraryFiction/LFCard';
import STCard from './Components/Categories/ScienceTechnology/STCard';
import BlogSection from './Components/blogSection/blogSection';
import Review from './Components/Review/Review';
import Signup from './Components/Pages/Signup';
import Details from './Components/BookDetails/details';
import Books from './Components/Books/Books';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FirstPage" element={<FirstPage />} />
        <Route path="/Childrens" element={<Childrens />} />
        <Route path="/LiteraryFiction" element={<LiteraryFiction />} />
        <Route path="/ScienceTechnology" element={<ScienceTechnology />} />
        <Route path="/CareerGrowth" element={<CareerGrowth />} />
        <Route path="/ReligionSpirituality" element={<ReligionSpirituality />} />
        <Route path="/Magazines" element={<Magazines />} />
        <Route path="/LanguageStudies" element={<LanguageStudies />} />
        <Route path="/History" element={<History />} />
        <Route path="/PoliticsPhilosophy" element={<PoliticsPhilosophy />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/ChildCard" element={<ChildCard />} />
        <Route path="/LFCard" element={<LFCard />} />
        <Route path="/STCard" element={<STCard />} />
        <Route path="/blogSection" element={<BlogSection />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/addBooks" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;


import './App.css';
import Carousel from './layouts/HomePage/Carousel';
import ExploreTopProducts from './layouts/HomePage/ExploreTopProducts';
import Navbar from './layouts/NavbarAndFooter/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <ExploreTopProducts/>
    <Carousel/>
    </div>
    );
}

export default App;

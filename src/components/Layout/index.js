import LeftBar from '../LeftBar';
import Navbar from '../NavBar'
import RightBar from '../RightBar';
import './index.scss';
import Home from '../Home';
import About from '../About';
import Expereience from '../Experience';
import Contact from '../Contact';
const Layout = () => {
    return (
        <div className='layout'>
            <Navbar />
            <LeftBar />
            <RightBar />
            <Home />
            <About />
            <Expereience />
            <Contact />
        </div>
    )
}

export default Layout
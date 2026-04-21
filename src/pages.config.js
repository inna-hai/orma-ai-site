import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Industries from './pages/Industries';
import Platform from './pages/Platform';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import __Layout from './Layout.jsx';

export const PAGES = {
    "About": About,
    "CaseStudies": CaseStudies,
    "CaseStudyDetail": CaseStudyDetail,
    "Contact": Contact,
    "Home": Home,
    "Industries": Industries,
    "Platform": Platform,
    "Pricing": Pricing,
    "Privacy": Privacy,
    "Terms": Terms,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};

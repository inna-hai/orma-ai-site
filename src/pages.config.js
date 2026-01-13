import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import CaseStudyEditor from './pages/CaseStudyEditor';
import Contact from './pages/Contact';
import FAQEditor from './pages/FAQEditor';
import Home from './pages/Home';
import LeadsDashboard from './pages/LeadsDashboard';
import Privacy from './pages/Privacy';
import SiteSettings from './pages/SiteSettings';
import Terms from './pages/Terms';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "CaseStudies": CaseStudies,
    "CaseStudyDetail": CaseStudyDetail,
    "CaseStudyEditor": CaseStudyEditor,
    "Contact": Contact,
    "FAQEditor": FAQEditor,
    "Home": Home,
    "LeadsDashboard": LeadsDashboard,
    "Privacy": Privacy,
    "SiteSettings": SiteSettings,
    "Terms": Terms,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
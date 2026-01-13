import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import LeadsDashboard from './pages/LeadsDashboard';
import CaseStudyEditor from './pages/CaseStudyEditor';
import FAQEditor from './pages/FAQEditor';
import SiteSettings from './pages/SiteSettings';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "CaseStudies": CaseStudies,
    "CaseStudyDetail": CaseStudyDetail,
    "About": About,
    "Contact": Contact,
    "Privacy": Privacy,
    "Terms": Terms,
    "LeadsDashboard": LeadsDashboard,
    "CaseStudyEditor": CaseStudyEditor,
    "FAQEditor": FAQEditor,
    "SiteSettings": SiteSettings,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
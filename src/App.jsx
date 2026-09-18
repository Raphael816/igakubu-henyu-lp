import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MobileStickyBar } from './components/MobileStickyBar'
import { ScrollToTop } from './components/ScrollToTop'
import { TopPage } from './pages/TopPage'
import { ServicePage } from './pages/ServicePage'
import { CoursesPage } from './pages/CoursesPage'
import { FeaturesPage } from './pages/FeaturesPage'
import { InstructorsPage } from './pages/InstructorsPage'
import { UniversitiesPage } from './pages/UniversitiesPage'
import { ColumnPage } from './pages/ColumnPage'
import { ConsultationPage } from './pages/ConsultationPage'
import { FaqPage } from './pages/FaqPage'
import { LoginPage } from './pages/LoginPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { CommercialLawPage } from './pages/CommercialLawPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/instructors" element={<InstructorsPage />} />
        <Route path="/universities" element={<UniversitiesPage />} />
        <Route path="/column" element={<ColumnPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/commercial-law" element={<CommercialLawPage />} />
        <Route path="*" element={<TopPage />} />
      </Routes>
      <Footer />
      <MobileStickyBar />
    </>
  )
}

export default App

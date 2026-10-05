import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MobileStickyBar } from './components/MobileStickyBar'
import { ScrollToTop } from './components/ScrollToTop'
import { PageGate } from './components/PageGate'
import { SitePagesProvider } from './context/SitePagesContext'
import { TopPage } from './pages/TopPage'
import { ServicePage } from './pages/ServicePage'
import { CoursesPage } from './pages/CoursesPage'
import { FeaturesPage } from './pages/FeaturesPage'
import { InstructorsPage } from './pages/InstructorsPage'
import { UniversitiesPage } from './pages/UniversitiesPage'
import { ColumnPage } from './pages/ColumnPage'
import { ConsultationPage } from './pages/ConsultationPage'
import { FaqPage } from './pages/FaqPage'
import { CareersPage } from './pages/CareersPage'
import { CareerDetailPage } from './pages/CareerDetailPage'
import { LoginPage } from './pages/LoginPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { CommercialLawPage } from './pages/CommercialLawPage'

function App() {
  return (
    <SitePagesProvider>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/service" element={<PageGate path="/service" label="サービス内容"><ServicePage /></PageGate>} />
        <Route path="/courses" element={<PageGate path="/courses" label="料金"><CoursesPage /></PageGate>} />
        <Route path="/features" element={<PageGate path="/features" label="生徒ページ"><FeaturesPage /></PageGate>} />
        <Route path="/instructors" element={<PageGate path="/instructors" label="指導方針"><InstructorsPage /></PageGate>} />
        <Route path="/universities" element={<PageGate path="/universities" label="大学情報"><UniversitiesPage /></PageGate>} />
        <Route path="/column" element={<PageGate path="/column" label="学習コラム"><ColumnPage /></PageGate>} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/faq" element={<PageGate path="/faq" label="よくある質問"><FaqPage /></PageGate>} />
        <Route path="/careers" element={<PageGate path="/careers" label="採用情報"><CareersPage /></PageGate>} />
        <Route path="/careers/:jobId" element={<PageGate path="/careers" label="採用情報"><CareerDetailPage /></PageGate>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/commercial-law" element={<CommercialLawPage />} />
        <Route path="*" element={<TopPage />} />
      </Routes>
      <Footer />
      <MobileStickyBar />
    </SitePagesProvider>
  )
}

export default App

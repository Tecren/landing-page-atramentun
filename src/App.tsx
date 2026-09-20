import { ConfigProvider, Layout } from 'antd'
import './App.css'
import { themeConfig } from './theme/theme'
import { LanguageProvider } from './i18n/LanguageContext'
import { ScrollEffects } from './components/ScrollEffects'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Introduction } from './components/Introduction'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <ConfigProvider theme={themeConfig}>
        <Layout className="atr-layout">
          <ScrollEffects />
          <Header />

          <Layout.Content className="atr-main">
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <Hero />
                <Introduction />
                <Features />
                <HowItWorks />
                <FinalCta />
                <Footer />
              </div>
            </div>
          </Layout.Content>
        </Layout>
      </ConfigProvider>
    </LanguageProvider>
  )
}

export default App
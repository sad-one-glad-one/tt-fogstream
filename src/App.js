import { Route, Routes } from 'react-router-dom'

import NotFoundView from './views/not-found/NotFoundView'
import SettingsView from './views/settings/SettingsView'
import AboutView from './views/about/AboutView'
import HeroView from './views/hero/HeroView'
import HelpView from './views/help/HelpView'
import AppLayout from './views/layout/AppLayout'
import ArticleView from './views/article/ArticleView'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HeroView />} />
          <Route path="article/:title" element={<ArticleView />} />
          <Route path="help" element={<HelpView />} />
          <Route path="about" element={<AboutView />} />
          <Route path="settings" element={<SettingsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

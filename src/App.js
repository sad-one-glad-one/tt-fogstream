import { Route, Routes } from 'react-router-dom'

import NotFoundView from './views/NotFoundView'
import SettingsView from './views/SettingsView'
import AboutView from './views/AboutView'
import HeroView from './views/HeroView'
import HelpView from './views/HelpView'
import AppLayout from './views/AppLayout'
import ArticleView from './views/ArticleView'

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

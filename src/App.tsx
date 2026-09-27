import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import ExperienceDetail from './pages/ExperienceDetail'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="experience/:slug" element={<ExperienceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

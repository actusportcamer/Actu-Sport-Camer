import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardPage from './dashboard/DashboardPage';
import ArticlesPage from './dashboard/ArticlesPage';
import NewArticlePage from './dashboard/NewArticlePage';
import './App.css'
import ScrollTop from './components/ScrollTop';
import EditPage from './dashboard/EditPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<PostPage />} />
            <Route path="category/:category" element={<CategoryPage />} />
            <Route path="tag/:tag" element={<TagPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="articles/new" element={<NewArticlePage />} />
            <Route path="edit/:blogId" element={<EditPage />} />
          </Route>

        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
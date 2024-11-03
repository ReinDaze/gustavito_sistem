import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AuthorView from '@/views/AuthorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog-post',
      name: 'BlogPost',
      component: BlogPostView,
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: PrivacyPolicyView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactUsView,
    },
    {
      path: '/category',
      name: 'Category',
      component: CategoryView,
    },
    {
      path: '/author',
      name: 'Author',
      component: AuthorView,
    },
  ],
})

export default router

import './index.css'
// @deno-types="@types/react"
import { StrictMode } from 'react'
// @deno-types="@types/react-dom/client"
import { createRoot } from 'react-dom/client'
import Header from "./Header.tsx"
import Content from "./Content.tsx"
import Footer from './Footer.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  
  <StrictMode>
    <Header />
    <Content />
    <Footer />
  </StrictMode>,
)

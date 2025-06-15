import './App.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Home} from './pages/home'
import { DestinationsPage } from './pages/destinations'
import { Advantages } from './pages/advantages'
import { TopSelling } from './pages/topselling'
import { Testimonials } from './pages/testimonials'

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
    <div>
      <Home />
      <DestinationsPage />
      <Advantages/>
      <TopSelling/>
      <Testimonials />
    </div>
    </QueryClientProvider>

      
  )
}

export default App

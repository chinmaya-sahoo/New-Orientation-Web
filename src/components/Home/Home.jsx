import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import FeatureSection from '../FeatureSection/FeatureSection'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import Hashira from '../Domain/Hashira'

function Home() {
  return (
    <div className=''>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Testimonials />
        <Hashira />
      </div>
    </div>
  )
}

export default Home
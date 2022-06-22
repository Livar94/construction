import React from 'react'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import SocialMedia from '../components/home/SocialMedia';
import Services from './../components/home/Services';
import Email from './../components/home/Email';


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Email />
      <SocialMedia />
    </>
  )
}

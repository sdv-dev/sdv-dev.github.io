import React from 'react'
import HeroImage from '../../assets/blog-hero.svg'

export default function BlogMainHero() {
  return (
    <div className="relative container mx-auto w-full" style={{ maxWidth: '1680px'}}>
      <HeroImage className="absolute right-0 top-0 bottom-0 left-0 md:left-40 lg:left-80 xl:left-auto z-0" />
    </div>
  )
}
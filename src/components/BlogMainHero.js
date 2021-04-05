import React from 'react'
import HeroImage from '../../assets/blog-hero.svg'

export default function BlogMainHero() {
  return (
    <div className="relative container mx-auto w-full" style={{ maxWidth: '1680px'}}>
      <HeroImage className="absolute right-0 top-0 z-0" />
    </div>
  )
}
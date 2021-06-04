import React from 'react'
import { Link } from 'gatsby'
import { Article } from '../components/common'

import Features from '../components/home/features'
import Hero from '../components/home/hero'
import Join from '../components/home/join'
import OpenSource from '../components/home/open-source'
import ProtectEnhance from '../components/home/protect-enhance'
import TryIt from '../components/home/try-it'

const HomePage = () => (
    <Article>

        <Hero />
        <Features />
        <ProtectEnhance />
        <OpenSource />
        <TryIt />
        <Join />

    </Article>
)

export default HomePage

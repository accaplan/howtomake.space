import { picoapp } from 'picoapp'
import { size } from 'martha'

import burger from '@/components/burger'
import lazyImage from '@/components/lazyImage'
import projectSlider from '@/components/projectSlider'
import aboutCarousel from '@/components/aboutCarousel'
import accordion from '@/components/accordion'

const components = {
  burger,
  lazyImage,
  projectSlider,
  aboutCarousel,
  accordion,
}

const state = {
  ...size(),
  isNavOpen: false,
  aboutCarouselIndex: 0,
}

export default picoapp(components, state)

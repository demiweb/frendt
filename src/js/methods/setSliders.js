import Swiper from 'swiper'
import classNames from '../classNames'
import setLazy from './setLazy'

const classes = classNames.slider

export default () => {
  const sliders = [...document.querySelectorAll(`.${classes.container}`)]
  if (!sliders.length) return

  sliders.forEach(container => {
    const name = container.dataset.slider
    const wrap = container.closest(`.${classes.slider.wrap}`)
    const pagination = wrap.querySelector(`.${classes.slider.pagination}`)

    const getIndex = i => (+i < 9 ? `0${+i + 1}` : +i + 1)

    if (name === 'main') {
      const swiper = new Swiper(container, {
        pagination,
        direction: 'vertical',
        paginationBulletRender(i, className) {
          const index = getIndex(i)
          return `<button class="${className}">${index}</button>`
        },
        paginationClickable: true,
        mousewheelControl: true,
        init: false,
        slidesPerView: 'auto',
        centeredSlides: true,
      })

      swiper.on('init', () => {
        setLazy()

        // if (swiper.slides.length > 0) {
        //   const slidesLength = swiper.slides.length

        //   for (let i = 0; i < slidesLength; i++) {
        //     const slide = wrap.querySelectorAll(`.${classes.plugin.slide}`)[i]
        //     const nmb = slide.querySelector(`.${classes.slider.number}`)
        //     const index = getIndex(i)
        //     nmb.innerHTML = index
        //   }
        // }
      })

      swiper.on('transitionStart', () => {
        if (!swiper.activeIndex || !swiper.slides.length) return

        const activeSlide = swiper.slides[swiper.activeIndex]

        if (activeSlide) {
          const video = activeSlide.querySelector('video')
          if (!video) return

          video.play()
        }
      })

      swiper.init()

      // const wrapper = container.querySelector(`.${classes.plugin.wrapper}`)

      // wrapper.addEventListener('transitionend', e => {
      //   console.log(e.target)
      // })
    }
  })
}

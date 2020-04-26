import Swiper from 'swiper'
import setLazy from '../../methods/setLazy'
import classes from '../../classNames'

const classNames = classes.slider

export default class MySlider {
  constructor(container, getOptions) {
    this.container = container
    this.name = container.dataset.slider
    this.wrap = container.closest(`.${classNames.slider.wrap}`)
    this.sliderEl = container.querySelector(`.${classNames.plugin.wrapper}`)
    this.navigation = {
      prevEl: this.wrap.querySelector(`.${classNames.slider.prev}`),
      nextEl: this.wrap.querySelector(`.${classNames.slider.next}`),
    }
    this.pagination = this.wrap.querySelector(`.${classNames.slider.pagination}`)

    this.nameMod = undefined // if need to reinit slider with different options

    this.options = getOptions({
      navigation: this.navigation,
      nextButton: this.navigation.nextEl,
      prevButton: this.navigation.prevEl,
      pagination: this.pagination,
      onInit: setLazy,
    })[this.nameMod || this.name]

    this.inited = false
  }

  get slides() {
    return [...this.container.querySelectorAll(`.${classNames.slider.slide}`)]
  }

  get activeSlide() {
    return this.slides.filter(slide =>
      slide.classList.contains(`${classNames.plugin.activeSlide}`)
    )[0]
  }

  getVideo(slide) {
    return slide.querySelector('video')
  }

  _initPlugin() {
    this.swiper = new Swiper(this.container, this.options)

    if (this.name === 'main') {
      this.swiper.on('init', () => {
        setLazy()
        // setTimeout(this.playVideo.bind(this), 200)
      })

      // this.swiper.on('transitionEnd', () => {
      //   this.playVideo()
      // })

      this.swiper.init()
    }

    this.inited = true
  }

  // playVideo() {
  //   this.stopVideo()

  //   const activeSlideVideo = this.getVideo(this.activeSlide)
  //   if (activeSlideVideo && activeSlideVideo.dataset.loaded === 'true') activeSlideVideo.play()
  // }

  // stopVideo() {
  //   this.slides.forEach(slide => {
  //     const video = this.getVideo(slide)

  //     if (video && video.dataset.loaded === 'true') video.pause()
  //   })
  // }

  destroy(deleteInstance, cleanStyles) {
    if (!this.swiper.destroy) return
    this.swiper.destroy(deleteInstance, cleanStyles)
    this.sliderEl.style.transform = ''
    // this.stopVideo()

    this.inited = false
  }

  init() {
    this._initPlugin()
  }
}

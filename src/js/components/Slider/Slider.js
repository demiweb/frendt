import { debounce } from 'throttle-debounce'
import MySlider from './MySlider'
import classes from '../../classNames'
import { getIndex } from '../../helpers'

const classNames = classes.slider

export default class Slider {
  constructor(slider) {
    this.sliderClass = slider
    this.sliders = []
  }

  _getOptions() {
    this.getOptions = ({ nextButton, prevButton, onInit, pagination }) => ({
      main: {
        pagination,
        paginationClickable: true,
        paginationBulletRender(i, className) {
          return `<button class="${className}">${getIndex(i)}</button>`
        },
        direction: 'vertical',
        mousewheelControl: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        init: false,
      },
      gallery: {
        nextButton,
        prevButton,
        slidesPerView: 1,
        on: {
          init: onInit,
        },
      },
    })
  }

  _initSliders() {
    this.containers.forEach(container => {
      if (container.classList.contains(classNames.plugin.initialized)) return

      const slider = new MySlider(container, this.getOptions)
      if (slider.name === 'main') {
        if (window.matchMedia('(min-width: 1200px )').matches) {
          slider.init()
        }
      } else {
        slider.init()
      }

      this.sliders = [...this.sliders, slider]
    })
  }

  _addListeners() {
    this.onResize = debounce(200, this.handleResize.bind(this))

    window.addEventListener('resize', this.onResize)
  }

  handleResize() {
    this.handleMainSliderInit()
  }

  handleMainSliderInit() {
    const [mainSlider] = this.sliders.filter(slider => slider.name === 'main')

    if (window.matchMedia('(min-width: 1200px )').matches) {
      if (!mainSlider.inited) mainSlider.init()
    } else if (mainSlider.inited) mainSlider.destroy()
  }

  init() {
    this.containers = [...document.querySelectorAll(this.sliderClass)]
    if (!this.containers.length) return

    this._getOptions()
    this._initSliders()
    this._addListeners()
  }
}

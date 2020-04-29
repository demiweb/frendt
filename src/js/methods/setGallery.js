import classNames from '../classNames'

export default () => {
  const lgs = [...document.querySelectorAll(`.${classNames.lightgallery}`)]

  if (!lgs.length) return

  import(/* webpackChunkName: "lightgallery" */ 'lightgallery.js').then(() => {
    lgs.forEach(lg => {
      // eslint-disable-next-line
        lightGallery(lg)
    })
  })
}

import classNames from '../classNames'

export default () => {
  const selects = [...document.querySelectorAll(`.${classNames.select}`)]
  if (!selects.length) return

  import(/* webpackChunkName: "select-custom" */ 'select-custom').then(({ default: Select }) => {
    selects.forEach(select => {
      const s = new Select(select)
      s.init()
    })
  })
}

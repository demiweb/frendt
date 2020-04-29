import classNames from '../classNames'
import { BEMblock } from '../helpers'
import { IS_ACTIVE } from '../constants'

export default () => {
  const onClick = e => {
    const btn = e.target.closest(`.${classNames.products.btn}`)
    if (!btn) return
    e.preventDefault()

    const buttons = [...document.querySelectorAll(`.${classNames.products.btn}`)]
    const content = document.querySelector(`.${classNames.products.content}`)
    const { layout } = btn.dataset

    buttons.forEach(b => BEMblock(b, 'view-control').removeMod(IS_ACTIVE))
    BEMblock(btn, 'view-control').addMod(IS_ACTIVE)

    if (layout === 'row') BEMblock(content, 'products-list').addMod('row')
    if (layout === 'grid') BEMblock(content, 'products-list').removeMod('row')
  }
  document.addEventListener('click', onClick)
}

import classNames from '../classNames'
import { BEMblock } from '../helpers'
import { IS_ACTIVE } from '../constants'

export default () => {
  const nav = document.querySelector(`.${classNames.animNav}`)
  if (!nav) return

  const TOGGLE_CLASSNAME_INTERVAL = 3000

  const links = [...nav.querySelectorAll('a')]
  let current = 0
  let next = 1
  setInterval(() => {
    next = current < links.length - 1 ? current + 1 : 0

    BEMblock(links[current], 'main-nav__link').removeMod(IS_ACTIVE)
    BEMblock(links[next], 'main-nav__link').addMod(IS_ACTIVE)

    current = next
  }, TOGGLE_CLASSNAME_INTERVAL)
}

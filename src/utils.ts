import { ColorNameMap, colorsMap } from './declarations'

/**
 * Returns a color value corresponding to the given color name.
 * @param {string} name The name of the color to be retrieved.
 * @returns {string} The color value corresponding to the given color name.
*/
export function getColor (name: ColorNameMap): string {
  return colorsMap[name]
}

export function createRipple (event: PointerEvent) {
  const button = event.currentTarget as HTMLButtonElement

  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`
  circle.classList.add('ripple')

  const ripple = button.getElementsByClassName('ripple')[0]

  if (ripple) ripple.remove()

  button.appendChild(circle)
}

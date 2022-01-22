export const preventDefault = (fn) => (e) => {
  e.preventDefault()
  fn(e)
}

export const stopPropagation = (fn) => (e) => {
  e.stopPropagation()
  fn(e)
}

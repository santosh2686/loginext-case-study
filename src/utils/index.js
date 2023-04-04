const isEmpty = (value) => value === undefined || value === null || value === ''

const isArray = (target) => Object.prototype.toString.call(target) === '[object Array]'

const isObject = (target) => typeof target === 'object' && target

const computeValue = (obj, map) => !isEmpty(map) && map.split('.').reduce((a, b) => ((a && !isEmpty(a[b])) ? a[b] : ''), obj)

const validatePayload = (schema, model, params = {}) => {
  const errorMap = {}
  let count = 0
  schema.forEach(({
    path, custom, pattern, message, emptyCheck,
  }) => {
    const value = computeValue(model, path)
    const isInvalid = custom ? !custom(model, value, params) : (emptyCheck || value) && !pattern.test(value)
    if (!errorMap[path] && isInvalid) {
      count += 1
      errorMap[path] = message
    }
  })

  return {
    isValid: count === 0,
    errorMap,
  }
}

const bemClass = (input = []) => {
  const blk = input[0]
  let elt = input[1]
  let mods = input[2]
  let className = input[3]
  const result = []

  if (isArray(elt) || isObject(elt)) {
    className = mods
    mods = elt
    elt = ''
  }

  const eltClass = elt ? `${blk}__${elt}` : blk
  result.push(eltClass)

  if (isArray(mods)) {
    mods.forEach((mod) => {
      const classStr = elt ? `${blk}__${elt}--${mod}` : `${blk}--${mod}`
      result.push(classStr)
    })
  }

  if (isObject(mods) && !isArray(mods)) {
    const modObjKeys = Object.keys(mods)
    modObjKeys.forEach((key) => {
      if (mods[key]) {
        const classStr = elt ? `${blk}__${elt}--${key}` : `${blk}--${key}`
        result.push(classStr)
      }
    })
  }

  if (className) {
    result.push(className)
  }

  return result.join(' ')
}

export {
  computeValue,
  validatePayload,
  bemClass,
}

import Storage from 'web-storage-cache'
const localStorage = new Storage()
export function setLocalStorage(key, value) {
  return localStorage.set(key, value)
}
export function getLocalStorage(key, value) {
  return localStorage.get(key, value)
}
export function deleteLocalStorage(key) {
  return localStorage.delete(key)
}
export function clearLocalStorage() {
  return localStorage.clear()
}
export function setBookObject(fileName, key, value) {
  let book = getLocalStorage(`${fileName} -info`)

  if (!book) {
    book = {}
  }
  book[key] = value
  setLocalStorage(`${fileName} -info`, book)
}
export function getBookObject(fileName, key) {
  const book = getLocalStorage(`${fileName} -info`)

  if (book) {
    return book[key]
  } else {
    return null
  }
}
export function getFontFamily(fileName) {
  return getBookObject(fileName, 'fontFamily')
}

export function saveFontFamily(fileName, fontFamily) {
  setBookObject(fileName, 'fontFamily', fontFamily)
}
export function getFontSize(fileName) {
  return getBookObject(fileName, 'fontSize')
}

export function saveFontSize(fileName, fontSize) {
  setBookObject(fileName, 'fontSize', fontSize)
}
export function getLocaleLanguage() {
  return getLocalStorage('localeLanguage')
}

export function saveLocaleLanguage(localeLanguage) {
  return setLocalStorage('localeLanguage', localeLanguage)
}
export function getTheme() {
  return getLocalStorage('theme')
}

export function saveTheme(theme) {
  return setLocalStorage('theme', theme)
}
export function getProgress(fileName) {
  return getBookObject(fileName, 'progress')
}

export function saveProgress(fileName, progress) {
  return setBookObject(fileName, 'progress', progress)
}
export function getLocation(fileName) {
  return getBookObject(fileName, 'location')
}

export function saveLocation(fileName, location) {
  return setBookObject(fileName, 'location', location)
}
export function getReadTime(fileName) {
  return getBookObject(fileName, 'time')
}

export function saveReadTime(fileName, theme) {
  setBookObject(fileName, 'time', theme)
}

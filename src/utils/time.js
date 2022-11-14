export function pad(num, size) {
  num = num.toString()
  while (num.length < size) num = '0' + num
  return num
}

export function formatSeconds(seconds) {
  seconds = Math.floor(seconds).toFixed()
  let hours = Math.floor(seconds / 3600)
  seconds = seconds % 3600
  let minutes = Math.floor(seconds / 60).toFixed()
  seconds = seconds % 60
  if (hours !== 0) {
    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2)
  } else {
    return pad(minutes, 2) + ':' + pad(seconds, 2)
  }
}


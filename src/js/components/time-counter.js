document.addEventListener('DOMContentLoaded', () => {
  const NewTimer = new Date('Sep 17 2023 00:00:00')

  const dayValue = document.querySelector('.sale-timer__day .sale-timer__value')
  const hrsValue = document.querySelector('.sale-timer__hrs .sale-timer__value')
  const minsValue = document.querySelector('.sale-timer__mins .sale-timer__value')
  const secsValue = document.querySelector('.sale-timer__secs .sale-timer__value')

  const dayText = document.querySelector('.sale-timer__day .sale-timer__text')
  const hrsText = document.querySelector('.sale-timer__hrs .sale-timer__text')
  const minsText = document.querySelector('.sale-timer__mins .sale-timer__text')
  const secsText = document.querySelector('.sale-timer__secs .sale-timer__text')

  const timeCount = () => {
    let now = new Date()
    let leftUntil = NewTimer - now

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24)
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60
    let seconds = Math.floor(leftUntil / 1000) % 60

    dayValue.textContent = days
    hrsValue.textContent = hours
    minsValue.textContent = minutes
    secsValue.textContent = seconds
  }

  timeCount()
  setInterval(timeCount, 1000)
})

let timer = 0

const turnLight = () => {
    const stop = document.querySelector('.light__stop')
    const walk = document.querySelector('.light__walk')
    const counter = document.querySelector('.light__counter')
    stop.innerHTML = '<img src="stop-off.svg" alt="">'
    walk.innerHTML = '<img src="walk-on.svg" alt="">'
    counter.style.color = 'green'
    counter.textContent = '5'
    const timerId = setInterval(() => {
        timer++
        counter.textContent = 5-timer
        if (timer === 5) {
            clearInterval(timerId)
            timer = 0
            counter.style.color = 'red'
            counter.textContent = 'STOP'
            stop.innerHTML = '<img src="stop-on.svg" alt="">'
            walk.innerHTML = '<img src="walk-off.svg" alt="">'
        }
    }, 1000)
}


const btn = document.querySelector('.light__button')
btn.addEventListener('click',turnLight)
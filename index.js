

const turnLight = () => {
    const waitingTime = 2+Math.floor(5*Math.random())
    const stop = document.querySelector('.light__stop')
    const walk = document.querySelector('.light__walk')
    const counter = document.querySelector('.light__counter')
    counter.style.color = 'orange'
    counter.textContent = 'WAIT '+waitingTime
    let timer = 0
    const timerId = setInterval(() => {
        timer++
        if (timer < waitingTime ) {
        counter.textContent = 'WAIT ' + (waitingTime - timer)
        }
        else if (timer >= waitingTime) {
            stop.innerHTML = '<img src="stop-off.svg" alt="">'
            walk.innerHTML = '<img src="walk-on.svg" alt="">'
            counter.style.color = 'green'
            counter.textContent = 'GO ' + (5 + waitingTime - timer) 
            if (timer === (5+waitingTime)) {
                clearInterval(timerId)
                timer = 0
                counter.style.color = 'red'
                counter.textContent = 'STOP'
                stop.innerHTML = '<img src="stop-on.svg" alt="">'
                walk.innerHTML = '<img src="walk-off.svg" alt="">'
            }
        }
    }, 1000)
}


const btn = document.querySelector('.light__button')
btn.addEventListener('click', turnLight)
let time = JSON.parse(localStorage.getItem('time')) || 
{
    seconds: 0,
    hours: 0,
    minutes: 0
}

let intervalId;
let clockWork = ''
if(time.seconds > 9 && time.minutes < 10 && time.hours < 10)
{
    clockWork = `0${time.hours}:0${time.minutes}:${time.seconds}`;
}
else if(time.seconds > 9 && time.minutes > 9 && time.hours < 10)
{
    clockWork = `0${time.hours}:${time.minutes}:${time.seconds}`; 
}
else if(time.seconds > 9 && time.minutes > 9 && time.hours > 9)
{
    clockWork = `${time.hours}:${time.minutes}:${time.seconds}`;
}
else if(time.seconds < 10 && time.minutes < 10 && time.hours < 10)
{
    clockWork = `0${time.hours}:0${time.minutes}:0${time.seconds}`;
}
else if(time.seconds < 10 && time.minutes > 9 && time.hours < 10)
{
    clockWork = `0${time.hours}:${time.minutes}:0${time.seconds}`;
}
else if(time.seconds < 10 && time.minutes < 10 && time.hours > 9 )
{
    clockWork = `${time.hours}:0${time.minutes}:0${time.seconds}`;
}
else if(time.seconds > 9 && time.minutes < 10 && time.hours > 9 )
{
    clockWork = `${time.hours}:0${time.minutes}:${time.seconds}`;
}
else if(time.seconds < 10 && time.minutes > 9 && time.hours > 9 )
{
    clockWork = `${time.hours}:${time.minutes}:0${time.seconds}`;
}
document.querySelector('.js-clock').innerHTML = clockWork;

function countDown()
{
    intervalId = setInterval(()=>
    {
        clockWork = '';
        time.seconds = time.seconds + 1;
        if(time.seconds > 9 && time.minutes < 10 && time.hours < 10)
        {
            clockWork = `0${time.hours}:0${time.minutes}:${time.seconds}`;
        }
        else if(time.seconds > 9 && time.minutes > 9 && time.hours < 10)
        {
            clockWork = `0${time.hours}:${time.minutes}:${time.seconds}`; 
        }
        else if(time.seconds > 9 && time.minutes > 9 && time.hours > 9)
        {
            clockWork = `${time.hours}:${time.minutes}:${time.seconds}`;
        }
        else if(time.seconds < 10 && time.minutes < 10 && time.hours < 10)
        {
            clockWork = `0${time.hours}:0${time.minutes}:0${time.seconds}`;
        }
        else if(time.seconds < 10 && time.minutes > 9 && time.hours < 10)
        {
            clockWork = `0${time.hours}:${time.minutes}:0${time.seconds}`;
        }
        else if(time.seconds < 10 && time.minutes < 10 && time.hours > 9 )
        {
            clockWork = `${time.hours}:0${time.minutes}:0${time.seconds}`;
        }
        else if(time.seconds > 9 && time.minutes < 10 && time.hours > 9 )
        {
            clockWork = `${time.hours}:0${time.minutes}:${time.seconds}`;
        }
        else if(time.seconds < 10 && time.minutes > 9 && time.hours > 9 )
        {
            clockWork = `${time.hours}:${time.minutes}:0${time.seconds}`;
        }

        if(time.seconds > 59)
        {
            time.seconds = 0;
            time.minutes = time.minutes + 1;
            if(time.minutes > 9 && time.hours < 10)
            {
                clockWork = `0${time.hours}:${time.minutes}:0${time.seconds}`;
            }
            else if(time.minutes < 10 && time.hours < 10)
            {
                clockWork = `0${time.hours}:0${time.minutes}:0${time.seconds}`;
            }
            else if(time.minutes > 9 && time.hours > 9)
            {
                clockWork = `${time.hours}:${time.minutes}:0${time.seconds}`;
            }

        }

        if(time.minutes > 59)
        {
            time.minutes = 0;
            time.seconds = 0;
            time.hours = time.hours + 1;
            if(time.hours > 9)
            {
                clockWork = `${time.hours}:0${time.minutes}:0${time.seconds}`;    
            }
            else
            {
                clockWork = `0${time.hours}:${time.minutes}:0${time.seconds}`;
            }
        }

        document.querySelector('.js-clock').innerHTML = clockWork;
        localStorage.setItem('time', JSON.stringify(time));

    }, 1000);
};

document.querySelector('.js-timer-btn').addEventListener('click', ()=>
{
    countDown();
});

document.querySelector('.js-reset-btn').addEventListener('click', ()=>
{
    time.seconds = 0;
    time.minutes = 0;
    time.hours = 0;
    localStorage.removeItem('time');
    document.querySelector('.js-clock').innerHTML = `0${time.hours}:0${time.minutes}:0${time.seconds}`;;
});

document.querySelector('.js-stop-btn').addEventListener('click', ()=>
{
    clearInterval(intervalId);
});
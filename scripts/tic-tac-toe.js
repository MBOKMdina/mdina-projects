tile1free = true;
tile2free = true;
tile3free = true;
tile4free = true;
tile5free = true;
tile6free = true;
tile7free = true;
tile8free = true;
tile9free = true;

tile1 = '';
tile2 = '';
tile3 = '';
tile4 = '';
tile5 = '';
tile6 = '';
tile7 = '';
tile8 = '';
tile9 = '';

let clss = '';

let intervalId;

let score = JSON.parse(localStorage.getItem('score')) || 
{
    wins: 0,
    losses: 0
}

document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;

/*document.querySelector('.js-options-new-game').addEventListener('mouseover', ()=>
{
    document.querySelector('.js-options-new-game').innerHTML = `
    <img class="icon" src="image/new-game-hover.png">
    <div class="js-new-game">New Game</div>
    `;
})

document.querySelector('.js-options-new-game').addEventListener('mouseout', ()=>
{
    document.querySelector('.js-options-new-game').innerHTML = `
    <img class="icon" src="image/newGame.png">
    <div class="js-new-game">New Game</div>
    `;
});*/

document.querySelector('.js-new-game-click').addEventListener('mouseover', ()=>
{
    document.querySelector('.js-options-new-game').classList.add('options-div-hover');
    document.querySelector('.js-options-new-game').innerHTML = `
    <img class="icon" src="image/new-game-hover.png">
    <div class="js-new-game">New Game</div>
    `;
})

document.querySelector('.js-new-game-click').addEventListener('mouseout', ()=>
{
    document.querySelector('.js-options-new-game').classList.remove('options-div-hover');
    document.querySelector('.js-options-new-game').innerHTML = `
    <img class="icon" src="image/newGame.png">
    <div class="js-new-game">New Game</div>
    `;
});

document.querySelector('.js-settings-click').addEventListener('mouseover', ()=>
{
    document.querySelector('.js-options-settings').classList.add('options-div-hover');
    document.querySelector('.js-options-settings').innerHTML = `
    <img class="icon" src="image/settings-hover.png">
    <div class="js-settings">Settings</div>
    `;
})

document.querySelector('.js-settings-click').addEventListener('mouseout', ()=>
{
    document.querySelector('.js-options-settings').classList.remove('options-div-hover');
    document.querySelector('.js-options-settings').innerHTML = `
    <img class="icon" src="image/settings.png">
    <div class="js-settings">Settings</div>
    `;
});

document.querySelector('.js-info-click').addEventListener('mouseover', ()=>
{
    document.querySelector('.js-options-info').classList.add('options-div-hover');
    document.querySelector('.js-options-info').innerHTML = `
    <img class="icon" src="image/info-hover.png">
    <div class="js-info">Info</div>
    `;
})

document.querySelector('.js-info-click').addEventListener('mouseout', ()=>
{
    document.querySelector('.js-options-info').classList.remove('options-div-hover');
    document.querySelector('.js-options-info').innerHTML = `
    <img class="icon" src="image/information.png">
    <div class="js-info">Info</div>
    `;
});
/*document.querySelector('.js-new-game-click').addEventListener('mouseout', ()=>
{
    document.querySelector('.js-options-new-game').innerHTML = `
    <img class="icon" src="image/newGame.png">
    <div class="js-new-game">New Game</div>
    <div class="text-click js-new-game-click"></div>
    `;
});*/

document.querySelector('.js-tile-1').addEventListener('click', ()=>
{
    if(tile1free)
    {
        document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
        tile1free = false;
        tile1 = 'player-move';
        checkGamestatus();
        let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === true)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            
        }
        else
        {
            setTimeout(computerMove, 1000);
            setTimeout(checkGamestatus, 1100);
        }   
    }
});

document.querySelector('.js-tile-2').addEventListener('click', ()=>
{
    if(tile2free)
    {
        document.querySelector('.js-tile-2').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
        tile2free = false;
        tile2 = 'player-move';
        checkGamestatus();
        let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === true)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            
        }
        else
        {
            setTimeout(computerMove, 1000);
            setTimeout(checkGamestatus, 1100);
        }   
    }
});

document.querySelector('.js-tile-3').addEventListener('click', ()=>
{
    if(tile3free)
    {
        document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
        tile3free = false;
        tile3 = 'player-move';
        checkGamestatus();
        let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === true)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            
        }
        else
        {
            setTimeout(computerMove, 1000);
            setTimeout(checkGamestatus, 1100);
        }   
    }
});

document.querySelector('.js-tile-4').addEventListener('click', ()=>
{
    if(tile4free)
    {
        document.querySelector('.js-tile-4').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
        tile4free = false;
        tile4 = 'player-move';
        checkGamestatus();
        let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === true)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            
        }
        else
        {
            setTimeout(computerMove, 1000);
            setTimeout(checkGamestatus, 1100);
        }   
    }
});

document.querySelector('.js-tile-5').addEventListener('click', ()=>
{
    if(tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
        tile5free = false;
        tile5 = 'player-move';
        checkGamestatus();
        let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === true)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            
        }
        else
        {
            setTimeout(computerMove, 1000);
            setTimeout(checkGamestatus, 1100);
        }   
    }
});

document.querySelector('.js-tile-6').addEventListener('click', ()=>
{
    if(tile6free)
    {
        document.querySelector('.js-tile-6').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
        tile6free = false;
        tile6 = 'player-move';
        checkGamestatus();
        let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === true)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            
        }
        else
        {
            setTimeout(computerMove, 1000);
            setTimeout(checkGamestatus, 1100);
        }   
    }
});

document.querySelector('.js-tile-7').addEventListener('click', ()=>
{
    if(tile7free)
    {
        document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
        tile7free = false;
        tile7 = 'player-move';
        checkGamestatus();
        let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === true)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            
        }
        else
        {
            setTimeout(computerMove, 1000);
            setTimeout(checkGamestatus, 1100);
        }   
    }
});

document.querySelector('.js-tile-8').addEventListener('click', ()=>
{
    if(tile8free)
    {
        document.querySelector('.js-tile-8').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
        tile8free = false;
        tile8 = 'player-move';
        checkGamestatus();
        let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === true)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            
        }
        else
        {
            setTimeout(computerMove, 1000);
            setTimeout(checkGamestatus, 1100);
        }   
    }
});

document.querySelector('.js-tile-9').addEventListener('click', ()=>
{
    if(tile9free)
    {
        document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
        tile9free = false;
        tile9 = 'player-move';
        checkGamestatus();
        let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === true)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            
        }
        else
        {
            setTimeout(computerMove, 1000);
            setTimeout(checkGamestatus, 1100);
        }   
    }
});

function computerMove()
{
    if(tile1 === 'player-move' && tile2 === 'player-move' && tile3free)
    {
        document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile3free = false;
        tile3 = 'computer-move';
    }
    else if(tile1 === 'player-move' && tile5 === 'player-move' && tile9free)
    {
        document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile9free = false;
        tile9 = 'computer-move';
    }
    else if(tile1 === 'player-move' && tile3 === 'player-move' && tile2free)
    {
        document.querySelector('.js-tile-2').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile2free = false;
        tile2 = 'computer-move';
    }
    else if(tile1 === 'player-move' && tile7 === 'player-move' && tile4free)
    {
        document.querySelector('.js-tile-4').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile4free = false;
        tile4 = 'computer-move';
    }
    else if(tile1 === 'player-move' && tile4 === 'player-move' && tile7free)
    {
        document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile7free = false;
        tile7 = 'computer-move';
    }
    else if(tile3 === 'player-move' && tile5 === 'player-move' && tile7free)
    {
        document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile7free = false;
        tile7 = 'computer-move';
    }
    else if(tile3 === 'player-move' && tile9 === 'player-move' && tile6free)
    {
        document.querySelector('.js-tile-6').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile6free = false;
        tile6 = 'computer-move';
    }
    else if(tile7 === 'player-move' && tile9 === 'player-move' && tile8free)
    {
        document.querySelector('.js-tile-8').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile8free = false;
        tile8 = 'computer-move';
    }
    else if(tile3 === 'player-move' && tile6 === 'player-move' && tile9free)
    {
        document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile9free = false;
        tile9 = 'computer-move';
    }
    else if(tile4 === 'player-move' && tile5 === 'player-move' && tile6free)
    {
        document.querySelector('.js-tile-6').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile6free = false;
        tile6 = 'computer-move';
    }
    else if(tile5 === 'player-move' && tile9 === 'player-move' && tile1free)
    {
        document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile1free = false;
        tile1 = 'computer-move'; 
    }
    else if(tile7 === 'player-move' && tile8 === 'player-move' && tile9free)
    {
        document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile9free = false;
        tile9 = 'computer-move';
    }
    else if(tile2 === 'player-move' && tile3 === 'player-move' && tile1free)
    {
        document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile1free = false;
        tile1 = 'computer-move';
    }
    else if(tile7 === 'player-move' && tile5 === 'player-move' && tile3free)
    {
        document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile3free = false;
        tile3 = 'computer-move';
    }
    else if(tile8 === 'player-move' && tile9 === 'player-move' && tile7free)
    {
        document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile7free = false;
        tile7 = 'computer-move';
    }
    else if(tile6 === 'player-move' && tile9 === 'player-move' && tile3free)
    {
        document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile3free = false;
        tile3 = 'computer-move';
    }
    else if(tile4 === 'player-move' && tile7 === 'player-move' && tile1free)
    {
        document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile1free = false;
        tile1 = 'computer-move';
    }
    else if(tile5 === 'player-move' && tile6 === 'player-move' && tile4free)
    {
        document.querySelector('.js-tile-4').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile4free = false;
        tile4 = 'computer-move';
    }
    else if(tile8 === 'player-move' && tile5 === 'player-move' && tile2free)
    {
        document.querySelector('.js-tile-2').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile2free = false;
        tile2 = 'computer-move';
    }
    else if(tile2 === 'player-move' && tile5 === 'player-move' && tile8free)
    {
        document.querySelector('.js-tile-8').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile8free = false;
        tile8 = 'computer-move';
    }
    else if(tile3 === 'player-move' && tile7 === 'player-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile1 === 'player-move' && tile9 === 'player-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile2 === 'player-move' && tile8 === 'player-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile4 === 'player-move' && tile6 === 'player-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile1 === 'player-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile3 === 'player-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile7 === 'player-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile9 === 'player-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile1 === 'computer-move' && tile2 === 'computer-move' && tile3free)
    {
        document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile3free = false;
        tile3 = 'computer-move';
    }
    else if(tile1 === 'computer-move' && tile5 === 'computer-move' && tile9free)
    {
        document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile9free = false;
        tile9 = 'computer-move';
    }
    else if(tile1 === 'computer-move' && tile3 === 'computer-move' && tile2free)
    {
        document.querySelector('.js-tile-2').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile2free = false;
        tile2 = 'computer-move';
    }
    else if(tile1 === 'computer-move' && tile7 === 'computer-move' && tile4free)
    {
        document.querySelector('.js-tile-4').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile4free = false;
        tile4 = 'computer-move';
    }
    else if(tile1 === 'computer-move' && tile4 === 'computer-move' && tile7free)
    {
        document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile7free = false;
        tile7 = 'computer-move';
    }
    else if(tile3 === 'computer-move' && tile5 === 'computer-move' && tile7free)
    {
        document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile7free = false;
        tile7 = 'computer-move';
    }
    else if(tile3 === 'computer-move' && tile9 === 'computer-move' && tile6free)
    {
        document.querySelector('.js-tile-6').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile6free = false;
        tile6 = 'computer-move';
    }
    else if(tile7 === 'computer-move' && tile9 === 'computer-move' && tile8free)
    {
        document.querySelector('.js-tile-8').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile8free = false;
        tile8 = 'computer-move';
    }
    else if(tile3 === 'computer-move' && tile6 === 'computer-move' && tile9free)
    {
        document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile9free = false;
        tile9 = 'computer-move';
    }
    else if(tile4 === 'computer-move' && tile5 === 'computer-move' && tile6free)
    {
        document.querySelector('.js-tile-6').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile6free = false;
        tile6 = 'computer-move';
    }
    else if(tile5 === 'computer-move' && tile9 === 'computer-move' && tile1free)
    {
        document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile1free = false;
        tile1 = 'computer-move';
    }
    else if(tile7 === 'computer-move' && tile8 === 'computer-move' && tile9free)
    {
        document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile9free = false;
        tile9 = 'computer-move';
    }
    else if(tile2 === 'computer-move' && tile3 === 'computer-move' && tile1free)
    {
        document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile1free = false;
        tile1 = 'computer-move';
    }
    else if(tile7 === 'computer-move' && tile5 === 'computer-move' && tile3free)
    {
        document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile3free = false;
        tile3 = 'computer-move';
    }
    else if(tile8 === 'computer-move' && tile9 === 'computer-move' && tile7free)
    {
        document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile7free = false;
        tile7 = 'computer-move';
    }
    else if(tile6 === 'computer-move' && tile9 === 'computer-move' && tile3free)
    {
        document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile3free = false;
        tile3 = 'computer-move';
    }
    else if(tile4 === 'computer-move' && tile7 === 'computer-move' && tile1free)
    {
        document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile1free = false;
        tile1 = 'computer-move';
    }
    else if(tile5 === 'computer-move' && tile6 === 'computer-move' && tile4free)
    {
        document.querySelector('.js-tile-4').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile4free = false
        tile4 = 'computer-move';
    }
    else if(tile8 === 'computer-move' && tile5 === 'computer-move' && tile2free)
    {
        document.querySelector('.js-tile-2').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile2free = false;
        tile2 = 'computer-move';
    }
    else if(tile2 === 'computer-move' && tile5 === 'computer-move' && tile8free)
    {
        document.querySelector('.js-tile-8').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile8free = false;
        tile8 = 'computer-move';
    }
    else if(tile3 === 'computer-move' && tile7 === 'computer-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile1 === 'computer-move' && tile9 === 'computer-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile2 === 'computer-move' && tile8 === 'computer-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile4 === 'computer-move' && tile6 === 'computer-move' && tile5free)
    {
        document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile5free = false;
        tile5 = 'computer-move';
    }
    else if(tile1 === 'computer-move' && tile3free)
    {
        document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
        tile3free = false;
        tile3 = 'computer-move';
    }
    else
    {
        if(tile1free)
        {
            document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tile1free = false;
            tile1 = 'computer-move';
        }
        else if(tile7free)
        {
            document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tile7free = false;
            tile7 = 'computer-move';
        }
        else if(tile9free)
        {
            document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tile9free = false;
            tile9 = 'computer-move';
        }
        else if(tile3free)
        {
            document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tile3free = false;
            tile3 = 'computer-move';
        }
        else if(tile2free)
        {
            document.querySelector('.js-tile-2').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tile2free = false;
            tile2 = 'computer-move';
        }
        else if(tile4free)
        {
            document.querySelector('.js-tile-4').innerHTML = `<img class="move" src="image/tic-tac-x.png">`;
            tile4free = false;
            tile4 = 'computer-move';
        }
        
    }    
};

function checkGamestatus()
{
    if(tile1 === 'player-move' && tile2 === 'player-move' && tile3 === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayWinsMessage();
    }
    else if(tile4 === 'player-move' && tile5 === 'player-move' && tile6 === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayWinsMessage();
    }
    else if(tile7 === 'player-move' && tile8 === 'player-move' && tile9 === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayWinsMessage();
    }
    else if(tile1 === 'player-move' && tile4 === 'player-move' && tile7 === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayWinsMessage();
    }
    else if(tile2 === 'player-move' && tile5 === 'player-move' && tile8 === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayWinsMessage();
    }
    else if(tile3 === 'player-move' && tile6 === 'player-move' && tile9 === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayWinsMessage(); 
    }
    else if(tile3 === 'player-move' && tile5 === 'player-move' && tile7 === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayWinsMessage();
    }
    else if(tile1 === 'player-move' && tile5 === 'player-move' && tile9 === 'player-move')
    {
        score.wins ++;
        document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayWinsMessage();
    }
    else if(tile1 === 'computer-move' && tile2 === 'computer-move' && tile3 === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayLossMessage();
    }
    else if(tile4 === 'computer-move' && tile5 === 'computer-move' && tile6 === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayLossMessage();
    }
    else if(tile7 === 'computer-move' && tile8 === 'computer-move' && tile9 === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayLossMessage();
    }
    else if(tile1 === 'computer-move' && tile4 === 'computer-move' && tile7 === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayLossMessage();
    }
    else if(tile2 === 'computer-move' && tile5 === 'computer-move' && tile8 === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayLossMessage();
    }
    else if(tile3 === 'computer-move' && tile6 === 'computer-move' && tile9 === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayLossMessage();
    }
    else if(tile3 === 'computer-move' && tile5 === 'computer-move' && tile7 === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayLossMessage();
    }
    else if(tile1 === 'computer-move' && tile5 === 'computer-move' && tile9 === 'computer-move')
    {
        score.losses ++;
        document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
        localStorage.setItem('score', JSON.stringify(score));
        reset();
        displayLossMessage();
    }
    else
    {
        let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] === false)
            {
                countSpace++;
            }
        }
        if(countSpace === 9)
        {
            reset();
        }
    }
}

function reset()
{
    tile1free = true;
    tile2free = true;
    tile3free = true;
    tile4free = true;
    tile5free = true;
    tile6free = true;
    tile7free = true;
    tile8free = true;
    tile9free = true;
    
    tile1 = '';
    tile2 = '';
    tile3 = '';
    tile4 = '';
    tile5 = '';
    tile6 = '';
    tile7 = '';
    tile8 = '';
    tile9 = ''; 

    document.querySelector('.js-tile-1').innerHTML = '';
    document.querySelector('.js-tile-2').innerHTML = '';
    document.querySelector('.js-tile-3').innerHTML = '';
    document.querySelector('.js-tile-4').innerHTML = '';
    document.querySelector('.js-tile-5').innerHTML = '';
    document.querySelector('.js-tile-6').innerHTML = '';
    document.querySelector('.js-tile-7').innerHTML = '';
    document.querySelector('.js-tile-8').innerHTML = '';
    document.querySelector('.js-tile-9').innerHTML = '';
}

document.querySelector('.js-new-game-click').addEventListener('click', ()=>
{
    reset();
    localStorage.removeItem('score');
    score =
    {
        wins: 0,
        losses: 0
    }
    document.querySelector('.js-comp-score-digit').innerHTML = `${score.losses}`;
    document.querySelector('.js-player-score-digit').innerHTML = `${score.wins}`;
});

document.querySelector('.js-settings-click').addEventListener('click', ()=>
{
    document.querySelector('.js-containment-interface').innerHTML=`
    <div class="interface">
        <div class="tile js-tile-1 js-tile-color ${clss}"></div>
        <div class="tile js-tile-2 js-tile-color ${clss}"></div>
        <div class="tile js-tile-3 js-tile-color ${clss}"></div>
        <div class="tile js-tile-4 js-tile-color ${clss}"></div>
        <div class="tile js-tile-5 js-tile-color ${clss} "></div>
        <div class="tile js-tile-6 js-tile-color ${clss}"></div>
        <div class="tile js-tile-7 js-tile-color ${clss}"></div>
        <div class="tile js-tile-8 js-tile-color ${clss}"></div>
        <div class="tile js-tile-9 js-tile-color ${clss}"></div>
    </div>
    <div class="settings-ui">
        <div class="deco-background">
            <div class="close js-close">
                <img class="close-btn-image" src="image/x.svg">
            </div>
        </div>
        <div class="settings-title"> Select background color</div>
        <div class="color-palette">
            <div class="default js-default"></div>
            <div class="purple js-purple"></div>
            <div class="blue js-blue"></div>
            <div class="green js-green"></div>
            <div class="black js-black"></div>
            <div class="brown js-brown"></div>
            <div class="orange js-orange"></div>
            <div class="yellow js-yellow"></div>
            <div class="white js-white"></div>
        </div>
    </div>
    `;
    document.querySelector('.js-default').addEventListener('click', ()=>
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    });
    
    document.querySelector('.js-purple').addEventListener('click', ()=>
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('purple-back-ground');
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    });
    
    document.querySelector('.js-blue').addEventListener('click', ()=>
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('blue-back-ground');
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    });

    document.querySelector('.js-green').addEventListener('click', ()=>
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('green-back-ground');
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    });
    
    document.querySelector('.js-black').addEventListener('click', ()=>
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('black-back-ground');
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    });

    document.querySelector('.js-brown').addEventListener('click', ()=>
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('brown-back-ground');
        if(title.classList.contains('title-black'))
        {
            title.classList.remove('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {
                tile[i].classList.remove('tile-alternate');
                clss = '';
            }
        }
    });
    
    document.querySelector('.js-orange').addEventListener('click', ()=>
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('orange-back-ground');
        if(title.classList.contains('title-black'))
        {

        }
        else
        {
            title.classList.add('title-black');
        }
    });
    
    document.querySelector('.js-yellow').addEventListener('click', ()=>
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('white-back-ground'))
        {
            body.classList.remove('white-back-ground');
        }
        body.classList.add('yellow-back-ground');
        if(title.classList.contains('title-black'))
        {

        }
        else
        {
            title.classList.add('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {

            }
            else
            {
                tile[i].classList.add('tile-alternate');
                clss = 'tile-alternate';
            }
        }
    });

    document.querySelector('.js-white').addEventListener('click', ()=>
    {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if(body.classList.contains('purple-back-ground'))
        {
            body.classList.remove('purple-back-ground');
        }
        else if(body.classList.contains('blue-back-ground'))
        {
            body.classList.remove('blue-back-ground');
        }
        else if(body.classList.contains('green-back-ground'))
        {
            body.classList.remove('green-back-ground');
        }
        else if(body.classList.contains('black-back-ground'))
        {
            body.classList.remove('black-back-ground');
        }
        else if(body.classList.contains('brown-back-ground'))
        {
            body.classList.remove('brown-back-ground');
        }
        else if(body.classList.contains('orange-back-ground'))
        {
            body.classList.remove('orange-back-ground');
        }
        else if(body.classList.contains('yellow-back-ground'))
        {
            body.classList.remove('yellow-back-ground');
        }
        body.classList.add('white-back-ground');
        if(title.classList.contains('title-black'))
        {

        }
        else
        {
            title.classList.add('title-black');
        }

        for( let i = 0; i < tile.length; i++)
        {
            if(tile[i].classList.contains('tile-alternate'))
            {

            }
            else
            {
                tile[i].classList.add('tile-alternate');
                clss = 'tile-alternate';
            }
        }
    });
    
    document.querySelector('.js-close').addEventListener('click', ()=>
    {
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="interface">
            <div class="tile js-tile-1 js-tile-color ${clss}"></div>
            <div class="tile js-tile-2 js-tile-color ${clss}"></div>
            <div class="tile js-tile-3 js-tile-color ${clss}"></div>
            <div class="tile js-tile-4 js-tile-color ${clss}"></div>
            <div class="tile js-tile-5 js-tile-color ${clss}"></div>
            <div class="tile js-tile-6 js-tile-color ${clss}"></div>
            <div class="tile js-tile-7 js-tile-color ${clss}"></div>
            <div class="tile js-tile-8 js-tile-color ${clss}"></div>
            <div class="tile js-tile-9 js-tile-color ${clss}"></div>
        </div>
        `;
        document.querySelector('.js-tile-1').addEventListener('click', ()=>
        {
            if(tile1free)
            {
                document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile1free = false;
                tile1 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-2').addEventListener('click', ()=>
        {
            if(tile2free)
            {
                document.querySelector('.js-tile-2').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile2free = false;
                tile2 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-3').addEventListener('click', ()=>
        {
            if(tile3free)
            {
                document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile3free = false;
                tile3 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-4').addEventListener('click', ()=>
        {
            if(tile4free)
            {
                document.querySelector('.js-tile-4').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile4free = false;
                tile4 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-5').addEventListener('click', ()=>
        {
            if(tile5free)
            {
                document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile5free = false;
                tile5 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-6').addEventListener('click', ()=>
        {
            if(tile6free)
            {
                document.querySelector('.js-tile-6').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile6free = false;
                tile6 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-7').addEventListener('click', ()=>
        {
            if(tile7free)
            {
                document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile7free = false;
                tile7 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-8').addEventListener('click', ()=>
        {
            if(tile8free)
            {
                document.querySelector('.js-tile-8').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile8free = false;
                tile8 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-9').addEventListener('click', ()=>
        {
            if(tile9free)
            {
                document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile9free = false;
                tile9 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });
    });

});

function imageGrow()
{
    document.querySelector('.js-message-image').classList.add('status-image-grow');
    setTimeout(()=>
    {
        document.querySelector('.js-message-image').classList.remove('status-image-grow');
    }, 1000)
}

function displayLossMessage()
{
    document.querySelector('.js-containment-interface').innerHTML=`
    <div class="interface">
        <div class="tile js-tile-1 js-tile-color ${clss}"></div>
        <div class="tile js-tile-2 js-tile-color ${clss}"></div>
        <div class="tile js-tile-3 js-tile-color ${clss}"></div>
        <div class="tile js-tile-4 js-tile-color ${clss}"></div>
        <div class="tile js-tile-5 js-tile-color ${clss}"></div>
        <div class="tile js-tile-6 js-tile-color ${clss}"></div>
        <div class="tile js-tile-7 js-tile-color ${clss}"></div>
        <div class="tile js-tile-8 js-tile-color ${clss}"></div>
        <div class="tile js-tile-9 js-tile-color ${clss}"></div>
    </div>
    <div class="status-message">
        <div class="deco"></div>
        <div class="status-message-inside-content">
            <div>Womp womp! Loser</div>
            <img class="status-message-image js-message-image" src="image/laughing-emoji.png">
        </div>
        <div class="deco2"></div>
    </div>
    `;

    intervalId = setInterval(imageGrow, 2000);

    setTimeout(()=>{
        clearInterval(intervalId);
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="interface">
            <div class="tile js-tile-1 js-tile-color ${clss}"></div>
            <div class="tile js-tile-2 js-tile-color ${clss}"></div>
            <div class="tile js-tile-3 js-tile-color ${clss}"></div>
            <div class="tile js-tile-4 js-tile-color ${clss}"></div>
            <div class="tile js-tile-5 js-tile-color ${clss}"></div>
            <div class="tile js-tile-6 js-tile-color ${clss}"></div>
            <div class="tile js-tile-7 js-tile-color ${clss}"></div>
            <div class="tile js-tile-8 js-tile-color ${clss}"></div>
            <div class="tile js-tile-9 js-tile-color ${clss}"></div>
        </div>`;
        document.querySelector('.js-tile-1').addEventListener('click', ()=>
        {
            if(tile1free)
            {
                document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile1free = false;
                tile1 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-2').addEventListener('click', ()=>
        {
            if(tile2free)
            {
                document.querySelector('.js-tile-2').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile2free = false;
                tile2 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-3').addEventListener('click', ()=>
        {
            if(tile3free)
            {
                document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile3free = false;
                tile3 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-4').addEventListener('click', ()=>
        {
            if(tile4free)
            {
                document.querySelector('.js-tile-4').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile4free = false;
                tile4 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-5').addEventListener('click', ()=>
        {
            if(tile5free)
            {
                document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile5free = false;
                tile5 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-6').addEventListener('click', ()=>
        {
            if(tile6free)
            {
                document.querySelector('.js-tile-6').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile6free = false;
                tile6 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-7').addEventListener('click', ()=>
        {
            if(tile7free)
            {
                document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile7free = false;
                tile7 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-8').addEventListener('click', ()=>
        {
            if(tile8free)
            {
                document.querySelector('.js-tile-8').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile8free = false;
                tile8 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-9').addEventListener('click', ()=>
        {
            if(tile9free)
            {
                document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile9free = false;
                tile9 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });
    }, 10000);
}

function displayWinsMessage()
{
    document.querySelector('.js-containment-interface').innerHTML=`
    <div class="interface">
        <div class="tile js-tile-1 js-tile-color ${clss}"></div>
        <div class="tile js-tile-2 js-tile-color ${clss}"></div>
        <div class="tile js-tile-3 js-tile-color ${clss}"></div>
        <div class="tile js-tile-4 js-tile-color ${clss}"></div>
        <div class="tile js-tile-5 js-tile-color ${clss}"></div>
        <div class="tile js-tile-6 js-tile-color ${clss}"></div>
        <div class="tile js-tile-7 js-tile-color ${clss}"></div>
        <div class="tile js-tile-8 js-tile-color ${clss}"></div>
        <div class="tile js-tile-9 js-tile-color ${clss}"></div>
    </div>
    <div class="status-message">
        <div class="deco"></div>
        <div class="status-message-inside-content">
            <div>Ok, being a bit tacticful I see</div>
            <img class="status-message-image js-message-image" src="image/nerd.png">
        </div>
        <div class="deco2"></div>
    </div>
    `;

    setTimeout(()=>{
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="interface">
            <div class="tile js-tile-1 js-tile-color ${clss}"></div>
            <div class="tile js-tile-2 js-tile-color ${clss}"></div>
            <div class="tile js-tile-3 js-tile-color ${clss}"></div>
            <div class="tile js-tile-4 js-tile-color ${clss}"></div>
            <div class="tile js-tile-5 js-tile-color ${clss}"></div>
            <div class="tile js-tile-6 js-tile-color ${clss}"></div>
            <div class="tile js-tile-7 js-tile-color ${clss}"></div>
            <div class="tile js-tile-8 js-tile-color ${clss}"></div>
            <div class="tile js-tile-9 js-tile-color ${clss}"></div>
        </div>`;
        document.querySelector('.js-tile-1').addEventListener('click', ()=>
        {
            if(tile1free)
            {
                document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile1free = false;
                tile1 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-2').addEventListener('click', ()=>
        {
            if(tile2free)
            {
                document.querySelector('.js-tile-2').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile2free = false;
                tile2 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-3').addEventListener('click', ()=>
        {
            if(tile3free)
            {
                document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile3free = false;
                tile3 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-4').addEventListener('click', ()=>
        {
            if(tile4free)
            {
                document.querySelector('.js-tile-4').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile4free = false;
                tile4 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-5').addEventListener('click', ()=>
        {
            if(tile5free)
            {
                document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile5free = false;
                tile5 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-6').addEventListener('click', ()=>
        {
            if(tile6free)
            {
                document.querySelector('.js-tile-6').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile6free = false;
                tile6 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-7').addEventListener('click', ()=>
        {
            if(tile7free)
            {
                document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile7free = false;
                tile7 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-8').addEventListener('click', ()=>
        {
            if(tile8free)
            {
                document.querySelector('.js-tile-8').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile8free = false;
                tile8 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-9').addEventListener('click', ()=>
        {
            if(tile9free)
            {
                document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile9free = false;
                tile9 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });
    }, 10000);
}

document.querySelector('.js-info-click').addEventListener('click', ()=>
{
    document.querySelector('.js-containment-interface').innerHTML=`
    <div class="interface">
        <div class="tile js-tile-1 js-tile-color ${clss}"></div>
        <div class="tile js-tile-2 js-tile-color ${clss}"></div>
        <div class="tile js-tile-3 js-tile-color ${clss}"></div>
        <div class="tile js-tile-4 js-tile-color ${clss}"></div>
        <div class="tile js-tile-5 js-tile-color ${clss}"></div>
        <div class="tile js-tile-6 js-tile-color ${clss}"></div>
        <div class="tile js-tile-7 js-tile-color ${clss}"></div>
        <div class="tile js-tile-8 js-tile-color ${clss}"></div>
        <div class="tile js-tile-9 js-tile-color ${clss}"></div>
    </div>
    <div class="info-ui">
        <div class="deco-background">
            <div class="close js-close">
                <img class="close-btn-image" src="image/x.svg">
            </div>
        </div>
        <div class="references">
            <p class="paragraph-title">About project and references</p>
            <p class="paragraph">This game of tic tac toe is a program/project/youtube exercise question created by me, Khumbo Mdina.
                The game is solely designed/programed for experimental purposes and is an answer to one of the tutorial exercise questions
                found on <a href="https://www.youtube.com/watch?v=SBmSRK3feww">https://www.youtube.com/watch?v=SBmSRK3feww</a>. 
            </p>
            <p class="paragraph">
                All icons/images used in this program were sourced from google and is not my own design. A list of references is provided below
                <br>
                <br>
                Settings icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/settings" title="settings icons">Settings icons created by Freepik - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/gear" title="gear icons">Gear icons created by Freepik - Flaticon</a>
                <br>
                <br>
                VS icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/vs" title="vs icons">Vs icons created by The Icon Tree - Flaticon</a>
                <br>
                <br>
                New game icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/new" title="new icons">New icons created by Freepik - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/add-list" title="add list icons">Add list icons created by HideMaru - Flaticon</a>
                <br>
                <br>
                Info icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/information" title="information icons">Information icons created by Freepik - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/info" title="info icons">Info icons created by Pixel perfect - Flaticon</a>
                <br>
                <br>
                Lauging emoji icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/laugh" title="laugh icons">Laugh icons created by Smashicons - Flaticon</a>
                <br>
                <br>
                Geek emoji icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/geek" title="geek icons">Geek icons created by Freepik - Flaticon</a>
                <br>
                Player icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/profile-picture" title="profile picture icons">Profile picture icons created by Md Tanvirul Haque - Flaticon</a>
                <br>
                <br>
                Comptuer icon:
                <br>
                <a href="https://www.flaticon.com/free-icons/keyboard" title="keyboard icons">Keyboard icons created by Freepik - Flaticon</a>
            </p>
        </div>
    </div>`;
    document.querySelector('.js-close').addEventListener('click', ()=>
    {
        document.querySelector('.js-containment-interface').innerHTML=`
        <div class="interface">
            <div class="tile js-tile-1 js-tile-color ${clss}"></div>
            <div class="tile js-tile-2 js-tile-color ${clss}"></div>
            <div class="tile js-tile-3 js-tile-color ${clss}"></div>
            <div class="tile js-tile-4 js-tile-color ${clss}"></div>
            <div class="tile js-tile-5 js-tile-color ${clss}"></div>
            <div class="tile js-tile-6 js-tile-color ${clss}"></div>
            <div class="tile js-tile-7 js-tile-color ${clss}"></div>
            <div class="tile js-tile-8 js-tile-color ${clss}"></div>
            <div class="tile js-tile-9 js-tile-color ${clss}"></div>
        </div>
        `;
        document.querySelector('.js-tile-1').addEventListener('click', ()=>
        {
            if(tile1free)
            {
                document.querySelector('.js-tile-1').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile1free = false;
                tile1 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-2').addEventListener('click', ()=>
        {
            if(tile2free)
            {
                document.querySelector('.js-tile-2').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile2free = false;
                tile2 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-3').addEventListener('click', ()=>
        {
            if(tile3free)
            {
                document.querySelector('.js-tile-3').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile3free = false;
                tile3 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-4').addEventListener('click', ()=>
        {
            if(tile4free)
            {
                document.querySelector('.js-tile-4').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile4free = false;
                tile4 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-5').addEventListener('click', ()=>
        {
            if(tile5free)
            {
                document.querySelector('.js-tile-5').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile5free = false;
                tile5 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-6').addEventListener('click', ()=>
        {
            if(tile6free)
            {
                document.querySelector('.js-tile-6').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile6free = false;
                tile6 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-7').addEventListener('click', ()=>
        {
            if(tile7free)
            {
                document.querySelector('.js-tile-7').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile7free = false;
                tile7 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-8').addEventListener('click', ()=>
        {
            if(tile8free)
            {
                document.querySelector('.js-tile-8').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile8free = false;
                tile8 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });

        document.querySelector('.js-tile-9').addEventListener('click', ()=>
        {
            if(tile9free)
            {
                document.querySelector('.js-tile-9').innerHTML = `<img class="move" src="image/tic-tac-circle.webp">`;
                tile9free = false;
                tile9 = 'player-move';
                checkGamestatus();
                let check = [tile1free, tile2free, tile3free, tile4free, tile5free, tile6free, tile7free, tile8free, tile9free];
                let countSpace = 0;
                for(let i = 0; i < check.length; i++)
                {
                    if(check[i] === true)
                    {
                        countSpace++;
                    }
                }
                if(countSpace === 9)
                {
                    
                }
                else
                {
                    setTimeout(computerMove, 1000);
                    setTimeout(checkGamestatus, 1100);
                }   
            }
        });
    });

});

score=0;
cross = true;
document.onkeydown = function (e) {

console.log(e.key);
if(e.key=='ArrowUp')
    {
           const dino = document.querySelector('.player');
        dino.classList.add('animateplayer');// for jump our wolf
        setTimeout(() => {
            dino.classList.remove('animateplayer'); //for rest wolf to the ground 
        }, 700);
    }

    if (e.key =='ArrowRight') 
       {  dino = document.querySelector('.player');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
       }
    if (e.key =='ArrowLeft') 
       { dino = document.querySelector('.player');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
       }

}

setInterval(()=>{

   let dino=document.querySelector(".player");
   const over=document.querySelector(".over");
   let wolf=document.querySelector('.wolf');
   let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
 
    let wx = parseInt(window.getComputedStyle(wolf, null).getPropertyValue('left'));
    let wy = parseInt(window.getComputedStyle(wolf, null).getPropertyValue('top'));

    const offsetX = Math.abs(dx - wx);
    const offsetY = Math.abs(dy - wy);
    console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        over.innerHTML = "Game Over"
        wolf.classList.remove('wolfanimation')
        // audiogo.play();
        // setTimeout(() => {
        //     audiogo.pause();
        //     audio.pause();
        // }, 1000);
    }

    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
           let aniDur = parseFloat(window.getComputedStyle(wolf, null).getPropertyValue('animation-duration'));
            let newDur = aniDur - 0.001;
            wolf.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }
},10);


function updateScore(score){


    scorecard.innerHTML='Yout Score :' + score;
}

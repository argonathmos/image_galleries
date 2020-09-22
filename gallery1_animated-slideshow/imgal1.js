const leavingImg = document.querySelector('.leave-left');
const enteringImg = document.querySelector('.enter-right');
let index;

window.setInterval(imgSlideStart,4200);

function imgSlideStart(){
    leavingImg.style.transition = "left 2s linear ";
    enteringImg.style.transition = " left 2s linear 0.1s";
    
    // The properties below should be visible after 2.1s due to the transition above.
    leavingImg.style.left = " -100% ";
    enteringImg.style.left = " 0 ";
    
    // So we wait 2100ms before resetting the attributes of the pictures
    setTimeout(() => { 
        index = Number(enteringImg.getAttribute('src').charAt(5));
        if( index < 7 ){
                leavingImg.setAttribute('src','pics/' + Number(index) + '.jpg');
                enteringImg.setAttribute('src','pics/' + Number(index+1) +'.jpg');
                index += 1;
        }else{
            leavingImg.setAttribute('src','pics/' + Number(index) + '.jpg');
            index = 0;
            enteringImg.setAttribute('src','pics/'+ index +'.jpg');
        }
        // Now that the src attributes have been reset, 
        // we need to shift the pictures (.leave-left and
        // .enter-right) back to their original position
        // And this with no transition (time = 0s)
        leavingImg.style.transition = "left 0s linear";
        enteringImg.style.transition = " left 0s linear";
        leavingImg.style.left = "0";
        enteringImg.style.left = "100%";
    }, 2100);
    
    

}
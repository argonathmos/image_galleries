const body = document.querySelector('body');
const left = document.querySelector('.container-left');
const right = document.querySelector('.container-right');

const leftImg = document.querySelector('.container-left img');
const midImg = document.querySelector('.container-middle img');
const rightImg = document.querySelector('.container-right img');


// Event listeners for user click.
left.addEventListener('click', decrement);
right.addEventListener('click', increment);

// Getting the number of the image that is displayed by default. 
i = Number(midImg.getAttribute('src').charAt(5));


function increment(){
    i = Number(midImg.getAttribute('src').charAt(5));
    i++;

    if(i < 7 & i >0){
        leftImg.setAttribute('src', 'pics/'+ Number(i-1)+'.jpg');
        midImg.setAttribute('src', 'pics/'+i+'.jpg');
        rightImg.setAttribute('src', 'pics/'+ Number(i+1)+'.jpg'); 
        
    
    }else if(i==7) {
        leftImg.setAttribute('src','pics/'+ Number(i-1)+'.jpg');
        midImg.setAttribute('src','pics/'+ i +'.jpg');
        rightImg.setAttribute('src','pics/'+0+'.jpg');
    }else if(i > 7){
        i=0;
        leftImg.setAttribute('src','pics/'+ 7+'.jpg');
        midImg.setAttribute('src','pics/'+ i +'.jpg');
        rightImg.setAttribute('src','pics/'+Number(i+1)+'.jpg');
    }

}


function decrement(){
    i = Number(midImg.getAttribute('src').charAt(5));
    i--;
    if(i < 7 & i >0){
        leftImg.setAttribute('src', 'pics/'+ Number(i-1)+'.jpg');
        midImg.setAttribute('src', 'pics/'+i+'.jpg');
        rightImg.setAttribute('src', 'pics/'+ Number(i+1)+'.jpg'); 
        
    
    }else if(i < 0 ) {
        i=7;
        leftImg.setAttribute('src','pics/'+ Number(i-1)+'.jpg');
        midImg.setAttribute('src','pics/'+ i +'.jpg');
        rightImg.setAttribute('src','pics/'+0+'.jpg');
        
        
    }else if(i == 0){
        leftImg.setAttribute('src','pics/'+ 7+'.jpg');
        midImg.setAttribute('src','pics/'+ i +'.jpg');
        rightImg.setAttribute('src','pics/'+Number(i+1)+'.jpg');
        
    }

}

// Starting the slidshow after the page has completely loaded with all content
body.addEventListener('load', setInterval(increment, 4000));
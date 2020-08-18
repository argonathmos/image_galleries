const left = document.querySelector('.container-left');
const right = document.querySelector('.container-right');

const leftImg = document.querySelector('.container-left img');
const midImg = document.querySelector('.container-middle img');
const rightImg = document.querySelector('.container-right img');


left.addEventListener('click', decrement);
right.addEventListener('click', increment);
i = Number(midImg.getAttribute('src').charAt(5));
console.log(i);

function increment(){
    i = Number(midImg.getAttribute('src').charAt(5));
    i++;
    console.log('i before I loop = '+ i);
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
    console.log('i after I loop = '+ i);
}


function decrement(){
    i = Number(midImg.getAttribute('src').charAt(5));
    i--;
    console.log('i before d loop = '+ i);
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
    console.log('i after d loop = '+ i);
    
}


const rock = document.querySelector('.rockImg');
const paper = document.querySelector('.paperImg');
const  scissors = document.querySelector('.scissorsImg');
const choose = document.querySelector('.choose');

let p = 0;
let c = 0;
let st= 0;
let pw = 0;
let cw = 0;


// Rock Function
rock.addEventListener('click',function(e){
    p = 1;

    rock.classList.add('purple');
    paper.classList.remove('purple');
    scissors.classList.remove('purple');
});

// Paper Function
paper.addEventListener('click',function(e){
    p = 2;

    paper.classList.add('purple');
    rock.classList.remove('purple');
    scissors.classList.remove('purple');
    
  });

// Scissors Function
scissors.addEventListener('click',function(e){
    p = 3;

    scissors.classList.add('purple');
    rock.classList.remove('purple');
    paper.classList.remove('purple');

  });
  

choose.addEventListener('click',function(e){
    c = computerPlay();
    console.log("Computer choose: ",c);


//if(pw<6 && cw<6){
//    if (p==1 && c==1){
//        console.log("st: ",st,"pw: ",pw,"cw: ",cw);
//    }
//    else if (p == 1 && c==2){
//        cw++;
//        console.log("st: ",st,"pw: ",pw,"cw: ",cw);
//    }
//    else if (p==1 && c==3){
//        pw++;
//        console.log("st: ",st,"pw: ",pw,"cw: ",cw);
//    }
//    else if (p == 2 && c==1){
//        pw++;
//        console.log("st: ",st,"pw: ",pw,"cw: ",cw);
//    }
//    else if (p==2 && c==2){
//        console.log("st: ",st,"pw: ",pw,"cw: ",cw);
//    }
//    else if (p == 2 && c==3){
//        cw++;
//        console.log("st: ",st,"pw: ",pw,"cw: ",cw);
//    }
//    else if (p==3 && c==1){
//        cw++;
//        console.log("st: ",st,"pw: ",pw,"cw: ",cw);
//    }
//    else if (p == 3 && c==2){
//        pw++;
//        console.log("st: ",st,"pw: ",pw,"cw: ",cw);
//    }
//    else if (p==3 && c==3){
//       
//        console.log("st: ",st,"pw: ",pw,"cw: ",cw);
//    }
//}
//if(pw==5 || cw==5){
//    if(pw>cw){
//        alert("You win");
//        cw=0;
//        pw=0;
//    }else{
//        alert("Computer win")
//        cw=0;
//        pw=0;
//    }
//}
});

function computerPlay(){
    return Math.floor(Math.random() *(4 - 1)) + 1;    
}


var modals = document.querySelectorAll('#images');


modals.forEach(function(trigger) {
    
      
    
  });

const rock = document.querySelector('.rockImg');
const paper = document.querySelector('.paperImg');
const  scissors = document.querySelector('.scissorsImg');
const choose = document.querySelector('.choose');

let p = 0;
let c = 0;


// Rock Function
rock.addEventListener('click',function(e){
  p = 1;

  if(p == 1){
    rock.classList.add('purple');
    paper.classList.remove('purple');
    scissors.classList.remove('purple');
}
});

// Paper Function
paper.addEventListener('click',function(e){
    p = 2;

    if(p == 2){
        paper.classList.add('purple');
        rock.classList.remove('purple');
        scissors.classList.remove('purple');
    }
  });

// Scissors Function
scissors.addEventListener('click',function(e){
    p = 3;

    if(p == 3){
        scissors.classList.add('purple');
        rock.classList.remove('purple');
        paper.classList.remove('purple');
    }
  });
  

choose.addEventListener('click',function(e){
    c = computerPlay();
    console.log(c);

if (p==1 && c==1)
    alert("Computer choose Rock \n Draw");
else if (p == 1 && c==2)
    alert("Computer choose Paper \n Computer win");
else if (p==1 && c==3)
    alert("Computer choose Scissors \n You win");
else if (p == 2 && c==1)
    alert("Computer choose Rock \n You win");
else if (p==2 && c==2)
    alert("Computer choose Paper \n Draw");
else if (p == 2 && c==3)
    alert("Computer choose Scissors \n Computer win");
else if (p==3 && c==1)
    alert("Computer choose Rock \n Computer win");
else if (p == 3 && c==2)
    alert("Computer choose Paper \n You win");
else if (p==3 && c==3)
    alert("Computer choose Scissors \n Draw");



});

function computerPlay(){
    return Math.floor(Math.random() *(4 - 1)) + 1;    
}






/// function playerPlay(){
///     let des = prompt("Enter Rock, Paper or Scissors");
///     let desision;
///     if (des == "Rock" || des == "rock")
///         desision = 1;
///     else if (des == "Paper" || des == "paper")
///         desision = 2;
///     else if (des == "Scissors" || des == "scissors")
///         desision = 3;
///     else
///         alert("Invalid Input");
///     return desision;
/// }
///let a = playerPlay();
///let b = computerPlay();


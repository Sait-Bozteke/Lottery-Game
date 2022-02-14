const TOTAL_BALLS=8;
const N_BALLS=6;
const BALL_MAXI=50;


const STAR_MAXI=13;
const STAR_1_INDEX=6;
const STAR_2_INDEX=7;


let my_8_numbers=[TOTAL_BALLS]



const my_balls=document.querySelectorAll(".balls")
const button_run=document.querySelector("#button_run")


button_run.addEventListener("click",()=>pick_8_numbers())

const pick_1_number=col =>{
let num;
if(col<N_BALLS){
    num=Math.floor((Math.random()*BALL_MAXI)+1)
}else{

    num=Math.floor((Math.random()*STAR_MAXI)+1)
}


return num;



}
const pick_8_numbers=()=>{
for(let col=0; col<TOTAL_BALLS; col++){
my_8_numbers[col]=pick_1_number(col)
my_balls[col].innerHTML=my_8_numbers[col]
my_8_numbers.sort((a, b) => a - b);

}
check_my_numbers()

}


const check_my_numbers=()=>{
let my_6_numbers=[N_BALLS]
my_6_numbers=my_8_numbers.slice(0,N_BALLS)

let star_1=my_8_numbers[STAR_1_INDEX]
let star_2=my_8_numbers[STAR_2_INDEX]

for(let col=0; col<N_BALLS; col++){
if(my_6_numbers[col]===my_6_numbers[col+1]||star_1===star_2){

pick_8_numbers();
return;


}


}
my_8_numbers=my_6_numbers.slice(0, N_BALLS)
my_8_numbers[STAR_1_INDEX]=star_1
my_8_numbers[STAR_2_INDEX]=star_2
display_my_numbers()
}



const display_my_numbers=()=>{

    for(let col=0; col<TOTAL_BALLS; col++){
        my_balls[col].innerHTML=my_8_numbers[col]
        
        }

}



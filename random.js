var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=30;
var boxcount=0;
document.getElementById('btn').addEventListener('click',function(){
   var guess= parseInt(document.getElementById('guessInput').value);

   if(guess===randomNumber){
    boxcount++;
    lock.src='box1.jpg';
display("Congradulations you open the box"+boxcount);
randomNumber=Math.floor(Math.random()*100)+1;
attempts=10;
setTimeout(()=> {
    lock.src='box.jpg';
    display("Guess the number to open Box "+boxcount+1);
    document.getElementById('guessInput').value='';

},5000);

   }
   else if(guess<randomNumber){
    display('Number is too low try a higher Number');
  
   }
   else{
    display('Number is too high try a Lower Number');
   }

attempts--;
if(attempts==0){
    display('Game Over! Try Again');
}
if(boxcount==5){
    display("Congradulations you won the game");
    document.getElementById('btn').disabled=true;
    document.getElementById('guessInput').disabled=true;
}
});
 
function display(msg){
    document.getElementById('msg').textContent=msg;

}


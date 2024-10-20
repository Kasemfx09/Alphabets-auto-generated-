
function abc(){ 
    document.getElementById('alphabet_auto_generated').addEventListener('click', function(){
        const alphabet=document.getElementById('alphabet'); 
        const alphabets='abcdefghijklmnopqrstuvwxyz';
        const alpha=alphabets.split('')    
        const index=Math.floor(Math.random()*25);
        const alphaLetter=alpha[index];
        alphabet.innerText=alphaLetter.toLocaleUpperCase();        
    });
    return alphaLetter
}

abc();

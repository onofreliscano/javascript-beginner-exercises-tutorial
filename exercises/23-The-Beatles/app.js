//Your code above ^^^
/* >>> (60*3)+10 = 190 >>> (60*3)+54 = 234*/

function sing() {
    var stanza = "";
    for (i=1; i<=12; i++) {
       
        if (i==5){
            stanza =  "whisper words of wisdom, ";
        }
        else if (i==11) {
            stanza =  "there will be an answer, ";
        }
        else {
            if (i==12) {
                stanza =  "let it be "
            }
            else {
                stanza =  "let it be, "
            //console.log(stanza)
            }    
        }
        console.log(stanza);
    }
}

sing();
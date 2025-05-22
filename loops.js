i = 0
while(i < 10){
    p = document.createElement('p');
    p.innerText = "Loop " + i;
    document.getElementById("while-loop-container").appendChild(p);
    i++;
}

for(i=0; i < 10; i++){
    p = document.createElement('p');
    p.innerText = 'Loop ' + i;
    document.getElementById("for-loop-container").appendChild(p);
}
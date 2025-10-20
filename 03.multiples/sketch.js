let rgb = [255, 0, 0];    

function setuop() {
    createCanvas(400, 400);
    }

function draw() {
    background(220);

    for(let i=0; i<=100; i=i+3){
        r = random(70)
        circle (100+r, i, i);  
    }
}

function mouseclicked() {
    if(select == 0){
        select = 1;
    }else
        select = 0;
}
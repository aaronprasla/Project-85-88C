canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;

player_object = '';

function player_update(){
    fabric.Image.fromURL('player.png', function(Img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
    });
}

function new_image(get_image){

    blockImg_object = '';

    fabric.Image.fromURL(get_image, function(Img){
        blockImg_object = Img;
    
        blockImg_object.scaleToWidth(block_image_width);
        blockImg_object.scaleToHeight(block_image_height);
        blockImg_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockImg_object);
        });
}

window.addEventListener('keydown', my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == "80"){
        console.log("Shift & P were pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        console.log("Width = " + block_image_width + " Height = " + block_image_height);
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keypressed == "77"){
        console.log("Shift & M were pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        console.log("Width = " + block_image_width + " Height = " + block_image_height);
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keypressed == "33"){
        console.log('Up');
        up();
    }
    if(keypressed == "34"){
        console.log('Down');
        down();
    }
    if(keypressed == "36"){
        console.log('Left');
        left();
    }
    if(keypressed == "35"){
        console.log('Right');
        right();
    }
    if(keypressed == "87"){
        console.log('w');
        new_image('wall.jpg');
    }
    if(keypressed == "67"){
        console.log('c');
        new_image('cloud.jpg');
    }
    if(keypressed == "68"){
        console.log('d');
        new_image('dark_green.png');
    }
    if(keypressed == "71"){
        console.log('g');
        new_image('ground.png');
    }
    if(keypressed == "76"){
        console.log('l');
        new_image('light_green.png');
    }
    if(keypressed == "82"){
        console.log('r');
        new_image('roof.jpg');
    }
    if(keypressed == "84"){
        console.log('t');
        new_image('trunk.jpg');
    }
    if(keypressed == "89"){
        console.log('y');
        new_image('yellow_wall.png');
    }
    if(keypressed == "85"){
        console.log('u');
        new_image('unique.png');
    }
}

function up(){

    if(player_y >= 0){

        player_y = player_y - block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("When up arrow is pressed X = " + player_x + " | Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){

    if(player_y <= 460){

        player_y = player_y + block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("When down arrow is pressed X = " + player_x + " | Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){

    if(player_x >= 0){

        player_x = player_x - block_image_width;
        console.log("block_image_width = " + block_image_width);
        console.log("When left arrow is pressed X = " + player_x + " | Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){

    if(player_x <= 900){

        player_x = player_x + block_image_width;
        console.log("block_image_width = " + block_image_width);
        console.log("When left arrow is pressed X = " + player_x + " | Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
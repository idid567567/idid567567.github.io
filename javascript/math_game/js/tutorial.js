function skip_tutorial(){
    tween_button_tutorial_sheet = game.add.tween(button_start_sheet).to({alpha:0},500,'Linear',true);
    button_tutorial_sheet.inputEnabled = false;
    button_start_sheet = game.add.tween(button_tutorial_sheet).to({alpha:0},500,'Linear',true);
    button_start_sheet.inputEnabled = false;    

    first_try = false;
}

function start_tutorial(){


    tween_button_tutorial_sheet = game.add.tween(button_start_sheet).to({alpha:0},500,'Linear',true);
    tween_button_tutorial_sheet.onComplete.add(completed_button_tutorial_sheet, this);
    button_tutorial_sheet.inputEnabled = false;
    show_up_continue_text = false;
    
    button_start_sheet = game.add.tween(button_tutorial_sheet).to({alpha:0},500,'Linear',true);
    button_start_sheet.inputEnabled = false;
}
 
var finger_pointer_tween,
    mark_tutorial_tween,
    get_fish_tutorial_tween,
    mark_tutorial_show_up_tween,
    mark_text_tween;

function completed_button_tutorial_sheet(){
    alertFX.play();
    mark_tutorial_show_up_tween = game.add.tween(mark_tutorial.scale).to({x:1,y:1},200,Phaser.Easing.Elastic.Out,true);
    //game.add.tween(mark_text.scale).to({x:1,y:1},200,Phaser.Easing.Elastic.Out,true);
    mark_tutorial_show_up_tween.onComplete.add(completed_mark_tutorial_show_up_tween, this);
    
    finger_pointer.alpha = 1;
    finger_pointer_tween = game.add.tween(finger_pointer).to({y:'+20'},500,'Linear',true,0,false,false).loop(true); 
    game.add.tween(get_fish_tutorial.scale).to({x:0.5,y:0.5},200,Phaser.Easing.Elastic.Out,true,200); 
}
function completed_mark_tutorial_show_up_tween(){
    mark_tutorial_tween = game.add.tween(mark_tutorial.scale).to({x:'-0.1',y:'-0.1'},400,'Quad.easeInOut',true,0,false,true).loop(true); 
    get_fish_tutorial_tween = game.add.tween(get_fish_tutorial).to({alpha:'-0.2'},400,'Quad.easeInOut',true,0,false,true).loop(true);
}

function startfishing_tutorial(){
    mark_tutorial_tween.stop();
    get_fish_tutorial_tween.stop();
    get_fish_tutorial.alpha = 0;
    finger_pointer.alpha = 0;
    finger_pointer_tween.stop();
    mark_tutorial.scale.setTo(0,0);
    mark_tutorial.inputEnabled = false;
    scorebar.alpha = 1;
    scorebar_tween = game.add.tween(scorebar).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
    
    question_pannel1_create_fx.alpha = 1;
    question_pannel1_create_fx_animation = question_pannel1_create_fx.animations.play("question_pannel1_create_fx",20,false);
    question_pannel2_create_fx.alpha = 1;
    question_pannel2_create_fx_animation = question_pannel2_create_fx.animations.play("question_pannel2_create_fx",20,false);
    question_pannel3_create_fx.alpha = 1;
    question_pannel3_create_fx_animation = question_pannel3_create_fx.animations.play("question_pannel3_create_fx",20,false);    
    
    tutorial_q1();
} 

var tutorial_number_4_tween;

function tutorial_q1(){
    
    question_green_pannel.animations.play("question_green_pannel_dyn",10,true);
    question_blue_pannel1.animations.play("question_blue_pannel_dyn1",10,true);
    question_blue_pannel2.animations.play("question_blue_pannel_dyn2",10,true);
    game.add.tween(question_green_pannel).to({alpha:1},500,'Linear',true,300);
    game.add.tween(question_blue_pannel1).to({alpha:1},500,'Linear',true,300);
    game.add.tween(question_blue_pannel2).to({alpha:1},500,'Linear',true,300);
    game.add.tween(bonds).to({alpha:1},300,'Linear',true,800);

    show_question_text(-1,0);
    show_question_text(4,1);
    show_question_text(2,2);  
    for(var i = 0;i<=2;i++){
        game.add.tween(answerpannel_tutorial[i]).to({alpha:0.9},500,'Linear',true,100*i);

    }

    show_number(3,0);
    show_number(4,1);
    show_number(6,2);
    
    game.add.tween(tutorial_number_2).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,1000);
    game.add.tween(plus_tutorial).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,1500);
    tutorial_number_4_tween = game.add.tween(tutorial_number_4).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,2000);
    tutorial_number_4_tween.onComplete.add(completed_tutorial_number_4_tween, this);
}

var equal_mark_tutorial_tween;

function completed_tutorial_number_4_tween(){
    game.add.tween(tutorial_number_2).to({x:'-400'},1500,'Quad.easeInOut',true,100);
    game.add.tween(tutorial_number_2.scale).to({x:0.5,y:0.5},1500,'Quad.easeInOut',true,100);

    
    game.add.tween(plus_tutorial).to({x:'-500'},1500,'Quad.easeInOut',true,100);
    game.add.tween(plus_tutorial.scale).to({x:0.5,y:0.5},1500,'Quad.easeInOut',true,100);


    game.add.tween(tutorial_number_4).to({x:'-600'},1500,'Quad.easeInOut',true,100);
    game.add.tween(tutorial_number_4.scale).to({x:0.5,y:0.5},1500,'Quad.easeInOut',true,100);

    
    game.add.tween(Qmark_tutorial).to({alpha:1},500,'Quad.easeInOut',true,1600);
    
    equal_mark_tutorial_tween = game.add.tween(equal_mark_tutorial).to({alpha:1},1000,'Quad.easeInOut',true,2200);
    game.add.tween(equal_mark_tutorial.scale).to({x:0.5,y:0.5},1000,'Quad.easeInOut',true,2200);
    
    game.add.tween(Qmark_tutorial).to({x:'-330',y:'+150'},1000,'Quad.easeInOut',true,2200);
    game.add.tween(Qmark_tutorial.scale).to({x:0.5,y:0.5},500,'Quad.easeInOut',true,2200);
    equal_mark_tutorial_tween.onComplete.add(completed_equal_mark_tutorial_tween, this);
    
}

var add_mode_text2_tween;

function completed_equal_mark_tutorial_tween(){

    add_mode_text2_tween = game.add.tween(add_mode_text2).to({alpha:1},500,'Linear',true,500);
    add_mode_text2_tween.onComplete.add(completed_add_mode_text2, this);
    tutorial_frame_sheet.alpha = 1;
    tutorial_frame_sheet.animations.play("tutorial_frame_sheet_dyn",10,false);

}

var finger_pointer2_tween;

function completed_add_mode_text2(){
    finger_pointer.x = questionpositionX+150;
    finger_pointer.y = buttonpositionY+50
    finger_pointer.alpha = 1;
    finger_pointer_tween = game.add.tween(finger_pointer).to({y:'+20'},500,'Linear',true,0,false,false).loop(true);  
    answerpannel_tutorial[2].events.onInputDown.add(correct_answer_tutorial);
    answerpannel_tutorial[2].inputEnabled = true;
}



function correct_answer_tutorial(){
    
    energy_transfer1_tutorial();
    game.add.tween(tutorial_frame_sheet).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(tutorial_number_2).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(plus_tutorial).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(tutorial_number_4).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(Qmark_tutorial).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(add_mode_text2).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(equal_mark_tutorial).to({alpha:0},500,'Quad.easeInOut',true);
    
    finger_pointer.alpha = 0;
    finger_pointer_tween.pause();
     
    answerpannel_tutorial[2].inputEnabled = false;
    anwser_pannel_light[2].alpha = correctFX;
    game.add.tween(anwser_pannel_light[2]).to({alpha:0},500,'Quad.easeOut',true);
    
    green_FX_sheet.animations.play("green_FX",20,false);
    green_FX_sheet.alpha = 1;
    rightFX.play();

}

var tutorial2_number_2_tween;

function tutorial_q2(){

    show_question_text(9,0);
    show_question_text(-1,1);
    show_question_text(2,2);  
    answerpannel_tutorial[0].inputEnabled = true;  

    show_number(7,0);
    show_number(5,1);
    show_number(2,2);
    
    game.add.tween(tutorial2_number_9).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,1000);
    tutorial2_number_2_tween = game.add.tween(tutorial2_number_2).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,1500);
    tutorial2_number_2_tween.onComplete.add(completed_tutorial2_number_2_tween, this);    
}

var Qmark_tutorial2_tween;


function completed_tutorial2_number_2_tween(){
    game.add.tween(tutorial2_number_9).to({x:'-550',y:'+150'},1500,'Quad.easeInOut',true,500);
    game.add.tween(tutorial2_number_9.scale).to({x:0.5,y:0.5},1500,'Quad.easeInOut',true,500);
    game.add.tween(tutorial2_number_2).to({x:'-300'},1500,'Quad.easeInOut',true,500);
    game.add.tween(tutorial2_number_2.scale).to({x:0.5,y:0.5},1500,'Quad.easeInOut',true,500);
    
    game.add.tween(minus_tutorial).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,2000);
    Qmark_tutorial2_tween = game.add.tween(Qmark_tutorial2).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,2000);
    Qmark_tutorial2_tween.onComplete.add(completed_Qmark_tutorial2_tween, this);    


}

var minus_mode_text2_tween;
var equal_mark_tutorial2_tween;

function completed_Qmark_tutorial2_tween(){

    game.add.tween(Qmark_tutorial2).to({x:'-480'},1000,'Linear',true,500);
    game.add.tween(Qmark_tutorial2.scale).to({x:0.5,y:0.5},1000,'Linear',true,500);
    
    equal_mark_tutorial2_tween = game.add.tween(equal_mark_tutorial).to({alpha:1},1000,'Linear',true,500);
    equal_mark_tutorial2_tween.onComplete.add(completed_equal_mark_tutorial2_tween, this);  
    
    minus_mode_text2_tween = game.add.tween(minus_mode_text2).to({alpha:1},500,'Linear',true,1500);
    minus_mode_text2_tween.onComplete.add(completed_minus_mode_text2, this);

}
function completed_equal_mark_tutorial2_tween(){
    tutorial_frame_sheet.alpha = 1;
    tutorial_frame_sheet.animations.play("tutorial_frame_sheet_dyn",10,false);
}
function completed_minus_mode_text2(){

    answerpannel_tutorial[0].events.onInputDown.add(correct_answer_tutorial2);
    answerpannel_tutorial[0].inputEnabled = true;
    finger_pointer.x = questionpositionX-150;
    finger_pointer.alpha = 1;
    finger_pointer_tween = game.add.tween(finger_pointer).to({y:'+20'},500,'Linear',true,0,false,false).loop(true);
}



function correct_answer_tutorial2(){
    energy_transfer2_tutorial();
    game.add.tween(tutorial_frame_sheet).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(tutorial2_number_9).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(tutorial2_number_2).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(minus_tutorial).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(Qmark_tutorial2).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(equal_mark_tutorial).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(minus_mode_text2).to({alpha:0},500,'Quad.easeInOut',true);

    finger_pointer.alpha = 0;
    finger_pointer_tween.stop();
    answerpannel_tutorial[0].inputEnabled = false;
    
    anwser_pannel_light[0].alpha = correctFX;
    game.add.tween(anwser_pannel_light[0]).to({alpha:0},500,'Quad.easeOut',true);
    
    blue_FX_sheet.animations.play("blue_FX",20,false);
    blue_FX_sheet.alpha = 1;
    rightFX.play();
}


function completed_start_game_text(){
    start_game_text_tween = game.add.tween(start_game_text).to({alpha:0.2},500,'Linear',true,0,false,false).loop(true);
    start_game_text.events.onInputDown.add(finish_tutorial);
    start_game_text.inputEnabled = true;    
}

function finish_tutorial(){
    show_up_start_game_text  = false;
    start_game_text.inputEnabled = false;
    start_game_text_tween.stop();
    start_game_text_tween = game.add.tween(start_game_text).to({alpha:0},500,'Linear',true);
    clean_pannel();


    game.add.tween(scorebar).to({alpha:0},500,'Quad.easeInOut',true);
    scorebar_tween.pause();

    for(var i = 0;i<=2;i++){
        game.add.tween(answerpannel_tutorial[i]).to({alpha:0},500,'Quad.easeInOut',true);
    }
   
    first_try = false;
}
// Helper vars
var hits = [0, 0]; // Golpes del dado
var game_score = [0, 0]; // Score del game
var set_score = [];
var match_score = {
    'game_score' : game_score,
    'set_score': set_score
}
var current_set = 1;
var ofender = 1;
var defender = 0;

// Helper functions
function get_current_player(attacker){

    if(attacker == 0){
        ofender = 0;
        defender = 1;
    } else {
        ofender = 1;
        defender = 0;
    }

    return [
        ofender,
        defender
    ];

}

function reset_hits(){ // Reset hits to 0,0 and its ux

    console.log("reset_hits");
    
    hits = [0, 0];
    $$('.roll').set('html', 1);
    $$('.dice').set('html', '');

    return hits;
}

function reset_game_score(){

    console.log("reset_game_score");

    game_score = [0, 0];
    $$('game_score').set('0 - 0');
    reset_hits();

    return game_score;
}

function add_set(defender){

    console.log("add_set");

    set_score.push(game_score);
    reset_game_score();

    console.log(set_score);
    return set_score;

}

function add_point(defender){ // Add point to defender player

    $$('#game_score').set('html', '');

    var current_point = game_score[defender]+1;

    switch (current_point){
        case 6:

            if(game_score[ofender] < 5){
                game_score[defender] = current_point;
                add_set(defender);
            } else {
                game_score[defender] = current_point;
            }

            break;
        
        case 7:
            game_score[defender] = current_point;
            add_set(defender);
    
        default:
            game_score[defender] = current_point;
            break;
    }

    setTimeout(function(){
        $$('#game_score').set('html', game_score[0]+"-"+game_score[1]);
    }, 1200);

    reset_hits();

    return hits;
}


function roll_dice(attacker){ // Tira el dado y empuja el array hacia la izquierda
    
    hits.shift();
    var new_hit = Math.floor(6*Math.random())+1;
    hits.push(new_hit);

    get_current_player(attacker);

    $$('#roll_'+attacker+'').set('html', hits[1]);
    $$('#tale').set('html', hits[0]+"-"+hits[1]);

    var diff = hits[1] - hits[0];

    $$('#dice_'+attacker+'').set('html', diff);
    $$('#dice_'+defender+'').set('html', '');

    if(diff < 1){
        add_point(defender);
    }

    return hits;
}


// Events
$$('.roll').addEvent('click', function(event){
    var attacker = event.target.id.split("roll_")[1];
    roll_dice(attacker);


});   

// Course


// Cuando se da el resultado 7-6 o 7-5 se guarda set, pero el game_score queda 7-0
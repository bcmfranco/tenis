// Helper vars
var hits = [1, 1];
var board = [0, 0];

// Helper functions
function reset_hits(){ // Reset hits to 1,1 and its ux
    
    hits = [1, 1];
    $$('.roll').set('html', 1);
    $$('.dice').set('html', '');

    return hits;
}

function add_point(defender){ // Add point to defender player

    $$('#game_score').set('html', '');

    if(defender == 0){
        board[0] = board[0]+15;
    } else {
        board[1] = board[1]+15; 
    }

    setTimeout(function(){
        $$('#game_score').set('html', board[0]+"-"+board[1]);
    }, 1200);

    reset_hits();

    return hits;
}


function roll_dice(attacker){ // Tira el dado y empuja el array hacia la izquierda
    
    hits.shift();
    var new_hit = Math.floor(6*Math.random())+1;
    hits.push(new_hit)

    if(attacker==0){
        var defender = 1;
    } else {
        var defender = 0;
    }

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
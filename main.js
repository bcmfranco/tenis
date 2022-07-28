// Helper vars
var hits = [1, 1]

// Helper functions
function add_point(defender){

    console.log(defender);

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
    $$('#dice_'+defender+'').set('html', 'x');

    if(diff < 0){
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
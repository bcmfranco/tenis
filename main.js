// Helper vars
var roll_1 = 1;
var roll_2 = 1;
var powers = [1, 1];

// Helper functions
function roll_dice(attacker){

    var roll_value = Math.floor(6*Math.random())+1;

    if(attacker==0){
        powers[0] = roll_value;
    } else {
        powers[1] = roll_value;
    }

    return powers;
}

// function new_attack(attacker){

//     var hit = Math.floor(6*Math.random())+1;

//     if(attacker==0){
//         var last_rolled = powers[1];
//     } else {
//         var last_rolled = powers[0];
//     }

//     var diff = hit - last_rolled;

//     // console.log(powers);
//     // console.log("last", last_rolled);
//     // console.log("hit", hit);
//     // console.log("diff", diff);

//     if(diff>0){
//         powers[attacker] = diff;
//         var attack_result = true;
//     } else {
//         powers = [1, 1];
//         var attack_result = false;
//     }

//     return [
//         attack_result,
//         powers
//     ]

// }



// Events
$$('.roll').addEvent('click', function(event){
    var attacker = event.target.id.split("roll_")[1];

    // console.log(attacker);
    // console.log(powers[0]);

    roll_dice(attacker);
    $$('#roll_'+attacker+'').set('html', powers[attacker]);

    // new_attack(attacker);

})


// Course
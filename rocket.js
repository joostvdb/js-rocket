var timer = null;
var coundownNumber = 10;

var changestate= function(state) {
    document.body.className = 'bodystate' + state;
    clearInterval (timer);
    coundownNumber = 10;
    document.getElementById ('countdown').innerHTML = coundownNumber;
    document.getElementById('nervous').className = 'nervous';
    document.getElementById('cantwait').className = 'cantwait';
    if (state ==2) {
        timer = setInterval(function() {
            coundownNumber = coundownNumber -1;
            document.getElementById ('countdown').innerHTML = coundownNumber; 
            if (coundownNumber >3 && coundownNumber <=5 ) {
                document.getElementById('nervous').className = 'nervous show';
                
            } else {
                document.getElementById('nervous').className = 'nervous';
            }
            if (coundownNumber >5 && coundownNumber <=7 ) {
                document.getElementById('cantwait').className = 'cantwait show';
            } else {
                document.getElementById('cantwait').className = 'cantwait';
            }

            if (coundownNumber <= 0) { changestate(3);
            }
        }, 1000);      
    }     else if (state == 3){
        var success = setTimeout(function() {
            var randomNumber = Math.round(Math.random()*10);
            console.log ('randomnumber:',randomNumber);
            if (randomNumber > 5) { changestate(4);}
            else { changestate (5);}
        }, 2000);
    }
}
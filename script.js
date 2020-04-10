   setTimeout(function() {
       location.href = 'rocket.html';
   }, 2000);
   
   
   var doCoolStuff = function () {
        var currentclassname = document.getElementById ('cool').className;
        if (currentclassname == 'cool') {
            document.getElementById ('cool').className= 'cool red';
        }
        else {document.getElementById ('cool').className= 'cool';}

    }

    var car = {
        make: 'VW',
        type: 'polo',
        color: 'blue',
        isTurnedOn: false,
        NumberOfWheels: 4,
        Seats: [
                'seat1',
                'seat2',
                'seat3',
                'seat4'
            ],
         turnOn: function(){
             this.isTurnedOn=true;
         },
         fly:function () {
             alert('fly');
         },
         switchcar:function (isOn) {
             console.log ('turncar' + isOn)
             if (isOn == true) {
                this.isTurnedOn=true; }
            else {this.isTurnedOn=false;}
             
         }

            
    };
   


        console.log ('hello there friends!');
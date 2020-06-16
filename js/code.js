const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Jul 04, 2020 16:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)



    $( function() {
      $( ".glitch-img" ).mgGlitch({
        destroy : false, // set 'true' to stop the plugin
                          glitch: true, // set 'false' to stop glitching
                          scale: true, // set 'false' to stop scaling
                          blend : true, // set 'false' to stop glitch blending
                          blendModeType : 'hue', // select blend mode type
                          glitch1TimeMin : 600, // set min time for glitch 1 elem
                          glitch1TimeMax : 900, // set max time for glitch 1 elem
                          glitch2TimeMin : 10, // set min time for glitch 2 elem
                          glitch2TimeMax : 115, // set max time for glitch 2 elem
                          zIndexStart : 8, // because of absolute position, set z-index base value
      });
    });
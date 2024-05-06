$(function () {
  // GENERATE RANDOM NUMBER FOR MEMBER AMOUNTS
  var randNum1 = Math.floor(Math.random() * 20 + 456);
  var randNum2 = Math.floor(Math.random() * 20 + 356);

  $("span.randomNumber").text(randNum1);
  $("span.randomNumber2").text(randNum2);

  //NEXT STEP
  $(".btn").on("click", function (event) {
    event.preventDefault();
    var goTo = $(this).attr("rel");

    if (goTo == "submitForm") {
      $("form").submit();
    } else if (goTo == "close-sign-up_popup") {
		document.querySelector(".sign-up_popup").classList.remove("active");
		resetTimer();

	} else {
		var currentSection = parseInt(goTo) - 1;
		$(".step" + currentSection).fadeOut("fast", function () {
			$(".step" + goTo).fadeIn("normal");
		});
		if (currentSection == 3) {
      tenMinutes = 60 * 10,
      display = document.querySelector('#time');
      startTimer(tenMinutes, display);
			run_loading_run_1("1000");
			run_loading_run_2("2200");
			run_loading_run_3("3300");
			run_loading_run_4("4400");
			run_loading_run_5("5550");
			document.querySelector(".sign-up_popup").classList.add("active");
		}
    }
  });

  /*RESULTS*/
  /* Run 1 */
  function run_loading_run_1(time_delay) {
    timeoutID1 = window.setTimeout(run_loading_1, time_delay);
  }
  function run_loading_1() {
    $(".number1").fadeIn();
  }

  /* Run 2 */
  function run_loading_run_2(time_delay) {
    timeoutID2 = window.setTimeout(run_loading_2, time_delay);
  }
  function run_loading_2() {
    $(".number2").fadeIn();
  }

  /* Run 3 */
  function run_loading_run_3(time_delay) {
    timeoutID3 = window.setTimeout(run_loading_3, time_delay);
  }
  function run_loading_3() {
    $(".number3").fadeIn();
  }

  /* Run 4 */
  function run_loading_run_4(time_delay) {
    timeoutID4 = window.setTimeout(run_loading_4, time_delay);
  }
  function run_loading_4() {
    $(".number4").fadeIn();
  }

  /* Run 5 */
  function run_loading_run_5(time_delay) {
    timeoutID5 = window.setTimeout(run_loading_5, time_delay);
  }
  function run_loading_5() {
    $(".loading").fadeOut();
    $("a.btnBig").fadeIn();
  }
});

$(window).load(function () {
  if ($(window).width() > 768) {
    setInterval(function () {
      $("body").animate({ "background-position": "center +=1px" }, 1);
    }, 20);
  }
});

//countdown start

var timer;
function startTimer(duration, display) {
    timer = duration;
    var minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function resetTimer() {
  timer = 60 * 10;
}


document.querySelector('.anmelden-btn').addEventListener('click', function (e) {
	e.preventDefault();
	bigBtnLink = document.querySelector('.btnBig').getAttribute('href');
	window.open('https://www.google.com', '_blank');	
	window.location.href= bigBtnLink;
});
  


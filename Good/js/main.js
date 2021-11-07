jQuery(document).ready(function( $ ) {

  $('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('.carousel').carousel();
  
  $('#accordion').collapse({toggle: false});

  // Charts
  if($('#canvas').length) {

    var doughnutData = [{
        value: 70,
        color: "#1abc9c"
      },
      {
        value: 30,
        color: "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
	};

	if($('#canvas2').length) {
    var doughnutData = [{
        value: 90,
        color: "#1abc9c"
      },
      {
        value: 10,
        color: "#ecf0f1"
      }
    ];
		var myDoughnut = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas3').length) {
    var doughnutData = [{
        value: 50,
        color: "#1abc9c"
      },
      {
        value: 50,
        color: "#ecf0f1"
      }
    ];
		var myDoughnut = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas4').length) {
    var doughnutData = [{
        value: 80,
        color: "#1abc9c"
      },
      {
        value: 20,
        color: "#ecf0f1"
      }
    ];
		var myDoughnut = new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(doughnutData);
	}
});

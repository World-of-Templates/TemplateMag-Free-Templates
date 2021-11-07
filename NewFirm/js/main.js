jQuery(document).ready(function($) {

  // Tabs
  $('#myTab a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
  });

  // Charts
  if ($('#canvas').length) {
    var doughnutData = [{
        value: 70,
        color: "#3498db"
      },
      {
        value: 30,
        color: "#f2f2f2"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
  }

  if ($('#canvas1').length) {
    var doughnutData = [{
        value: 90,
        color: "#3498db"
      },
      {
        value: 10,
        color: "#f2f2f2"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(doughnutData);
  }

  if ($('#canvas2').length) {
    var doughnutData = [{
        value: 55,
        color: "#3498db"
      },
      {
        value: 45,
        color: "#f2f2f2"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData);
  }

  if ($('#canvas3').length) {
    var doughnutData = [{
        value: 75,
        color: "#3498db"
      },
      {
        value: 25,
        color: "#f2f2f2"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData);
  }

  // Masonrey Portfolio
  if ($('#masonry').length) {
    var masonry = document.querySelector('#masonry');
    var msnry = new Masonry(masonry, {
      itemSelector: '.mitem'
    });
  }

});

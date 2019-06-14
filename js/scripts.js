$(".card").hover(
  function() {
    let cardbody = $(this).find(".card-body");
    cardbody.css("display", "block");
    cardbody.addClass("card-img-overlay");
    //console.log(cardbody);
  },
  function() {
    let cardbody = $(this).find(".card-body");
    cardbody.css("display", "none");
  }
);

//  SKill charts

new Chartist.Pie(
  ".ct-chart",
  {
    labels: ["Atom", "Bootstrap", "Github", "React"],
    series: [40, 10, 30, 20]
  },
  {
    donut: true,
    donutWidth: 60,
    donutSolid: true,
    startAngle: 270,
    showLabel: true,
    width: "400px",
    height: "300px"
  }
);

$(".list-group-item").hover(
  function() {
    let img = $(this).find("img");

    img.addClass("activeimg");
    //console.log(cardbody);
  },
  function() {
    let img = $(this).find("img");
    img.removeClass("activeimg");
  }
);

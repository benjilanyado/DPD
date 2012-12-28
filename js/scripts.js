$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px", "1881px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
 		$("#upbutton").fadeIn()
 		$("rightbutton").fadeIn()

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 4)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut()
 	}


}



  $("#downbutton, #keepexploring").click(function(event) {      	

  	event.preventDefault();

  	downclick()
    $("#keepexploring").fadeOut()


	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});


   $("#introcopy").on({
  'click': function(event) {

              event.preventDefault();               

               if($("#mapholder").css('display') == 'none'){
                  $("#introcopy").animate({"height": "420px"}, 700, function(){
                    $("#copyholder").fadeIn(function(){
                      $("#mapholder").fadeIn(function(){
                        $("#buttons").fadeIn()
                        $("#keepexploring").fadeIn()
                      })

                    })
                  })
                };

                if($("#mapholder").css('display') == 'block'){
                  $("#introcopy").animate({"height": "90px"}, 700, function(){
                    $("#copyholder, #mapholder, #close1").fadeOut()

                  })                  
                };
              }
                      
});


//TILE 2 

$("#itemA").click(function(event) {

  event.preventDefault(); 
  $("#english1").fadeToggle()
  $("#clickonme").fadeOut()

  });

$("#itemB").click(function(event) {

  event.preventDefault(); 
  $("#english2").fadeToggle()
  $("#clickonme").fadeOut()

  });

$("#itemC").click(function(event) {

  event.preventDefault(); 
  $("#english3").fadeToggle()
  $("#clickonme").fadeOut()

  });

$("#itemD").click(function(event) {

  event.preventDefault(); 
  $("#english4").fadeToggle()
  $("#clickonme").fadeOut()

  });

$("#itemE").click(function(event) {

  event.preventDefault(); 
  $("#english5").fadeToggle()
  $("#clickonme").fadeOut()

  });

$("#itemF").click(function(event) {

  event.preventDefault(); 
  $("#english6").fadeToggle()
  $("#clickonme").fadeOut()

  });

$("#itemG").click(function(event) {

  event.preventDefault(); 
  $("#english7").fadeToggle()
  $("#clickonme").fadeOut()

  });

$("#itemH").click(function(event) {

  event.preventDefault(); 
  $("#english8").fadeToggle()
  $("#clickonme").fadeOut()

  });

$("#itemI").click(function(event) {

  event.preventDefault(); 
  $("#english9").fadeToggle()
  $("#clickonme").fadeOut()

  });

var sliderImages = [  
  {     
        position: "0px",
        copy: "52-year old Lin Zhi Cheng's stall serves wok-cooked dishes to local workers in the heart of Central. Food is purchased from local markets, and each dish takes under three minutes to make - the most expensive costs HK$47 (£3.80)"
  }, {  
        position: "-350px",
        copy: "Ad hoc food stall licenses were first granted to the families of deceased and injured civil servants by the 1950s colonial Hong Kong government in the wake of the second world war. The large license ('<i>dai pai</i>') deeds were typically displayed on the front of the stalls, with a photograph of the owner"
  }, {  
        position: "-700px",
        copy: "Orders are placed at the table and ferried to and from the kitchen by dai pai dong workers - family and friends of the owner. Most dishes are wok-cooked with broths and sauces pre-made in the morning, and many include cheap offal cuts such as pig trotters and knuckles, and goose intestines"
  }, {  
        position: "-1050px",
        copy: "As Hong Kong diners' tastes have changed and food hygiene concerns grown, open air dai pai dong numbers have gradually fallen, with licensing laws prohibiting inheritance in 1956, and the cessation of new licenses in 1983. The current generation of owners will be the last to operate outdoors"
  }, {  
        position: "-1400px",
        copy: "While outdoor operation will cease, the cooking tradition continues, with many dai pai dongs relocating to cooked food centres across the city like the Haiphong Road Temporary Market  - see our selection of <a target='_blank'href='http://www.guardian.co.uk/travel/2012/jul/04/top-10-budget-restaurants-hong-kong'>cheap eats in Hong Kong<a/>, written by South China Morning Post food editor Susan Jung"
  }
  ]

var sliderCurrent = 0;

function rightclick() {

  sliderCurrent += 1

  $("#sliderpic").animate({"left": sliderImages[sliderCurrent].position}, 500)
  $("#slidercopy").html(sliderImages[sliderCurrent].copy)

  if (sliderCurrent==(sliderImages.length - 1)) {

    $("#rightslider").fadeOut()
  }


}

function leftclick() {


  sliderCurrent -= 1

  $("#sliderpic").animate({"left": sliderImages[sliderCurrent].position}, 500)
  $("#slidercopy").html(sliderImages[sliderCurrent].copy)

  if (sliderCurrent==(sliderImages.length - 5)) {

    $("#leftslider").fadeOut()
  }

}

  $("#rightslider").click(function(event) {

    event.preventDefault();
    rightclick();
    $("#leftslider").fadeIn()

        });

  $("#leftslider").click(function(event) {

    event.preventDefault();
    leftclick()
    $("#rightslider").fadeIn()

        });

    $("#info2").click(function(event) {

    event.preventDefault();
    $("#specials").fadeToggle(function(){

      $("#bluecopy").fadeIn()
    })

        });

     $("#info3").click(function(event) {

    event.preventDefault();
    $("#sliders").fadeToggle()

        });

 $("#info8").click(function(event) {

    event.preventDefault();
    $("#history").fadeToggle()

        });
// TILE 3 

$("#info4").click(function(event) {

  event.preventDefault(); 
  $("#foodpic4").fadeToggle();
  $("#foodexplain").fadeOut()

  });

$("#info5").click(function(event) {

  event.preventDefault(); 
  $("#foodpic7").fadeToggle()
  $("#foodexplain").fadeOut()

  });

$("#info6").click(function(event) {

  event.preventDefault(); 
  $("#foodpic5").fadeToggle()
  $("#foodexplain").fadeOut()

  });

$("#info7").click(function(event) {

  event.preventDefault(); 
  $("#foodpic6").fadeToggle()
  $("#foodexplain").fadeOut()

  });

// TILE 4


var trailImages = [  "0", "-240", "-480"];

var trailCurrent = 1

function rightTrailClick() {

  trailCurrent += 1

  $("#panelholder").animate({"left": trailImages[trailCurrent]}, 500)

  if (trailCurrent==(trailImages.length-1)) {

    $("#trailright").fadeOut()
  }

  if (trailCurrent==(trailImages.length -2)) {

    $("#trailleft").fadeIn()
  }
  
}

function leftTrailClick() {

  trailCurrent -= 1

  $("#panelholder").animate({"left": trailImages[trailCurrent]}, 500)

  if (trailCurrent==(trailImages.length - 3)) {

    $("#trailleft").fadeOut();
  }

  if (trailCurrent==(trailImages.length-2)) {

    $("#trailright").fadeIn()
  }
}


$("#trailright").click(function(event){

    event.preventDefault();
    rightTrailClick()


  });



$("#trailleft").click(function(event){

    event.preventDefault();
    leftTrailClick()


  });

 var mapOptions = {
          zoom: 8,

          center: new google.maps.LatLng(22.258, 114.1529),
          mapTypeControl: false,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          zoomControl: false,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
          },
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'),
                                      mapOptions);




}); //ready


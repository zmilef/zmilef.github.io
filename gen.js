

 // $(document).ready(function()
 // {
 //   function randPosX(){
 //         return Math.floor(Math.random()*500);
 //       };//end x
 //       function randPosY(){
 //         return Math.floor(Math.random()*800);
 //       };//end y
 //
 //    var folder = "STELLA_IMGS/";
 //
 //    $.ajax({
 //        url : folder,
 //        success: function (data) {
 //            $(data).find("a").attr("href", function (i, val) {
 //                if( val.match(/\.(jpe?g|png|gif)$/) ) {
 //                  var xPos = randPosX();
 //                  var yPos = randPosY();
 //                  console.log(xPos);
 //
 //                                     var div = document.createElement("div");
 //                                     $(div).attr("class", "drag");
 //                                     $.('body').append(div);
 //
 //                    $("body").append( " <div> <img style='position: absolute; top:"+xPos+"px; left:"+yPos+"px;' src='"+ folder + val +"'> </div>" ).find('div:last').addClass('drag');
 //                    // document.getElementById("exhibition").append( "<div> <div> <img src='"+ folder + val +"'> </div> </div>" ).find('div:last').addClass('drag');
 //
 //                    // document.getElementById("drag").apapendChild( "<div> <img src='"+ folder + val +"'> </div>" );
 //                }
 //            });
 //        }
 //    });
 //
 //  })




   $(document).ready(function()
   {
     function randPosX(){
           return Math.floor(Math.random()*500);
         };//end x
         function randPosY(){
           return Math.floor(Math.random()*1000);
         };//end y

      var folder = "STELLA_IMGS/";

      $.ajax({
          url : folder,
          success: function (data) {
              $(data).find("a").attr("href", function (i, val) {
                  if( val.match(/\.(jpe?g|png|gif)$/) ) {
                    var xPos = randPosX();
                    var yPos = randPosY();
                    console.log("x: " + xPos);
                    console.log("y: " + yPos);

                    var $divC = document.createElement("div");
                    $($divC).attr("class", "drag");
                    $('body').append($divC);

                    $($divC).append( "<div> <img style='position: relative; top:"+xPos+"px; left:"+yPos+"px;' src='"+ folder + val +"'> </div>" ).find('div:last').addClass('dragContainer');
                      // document.getElementById("exhibition").append( "<div> <div> <img src='"+ folder + val +"'> </div> </div>" ).find('div:last').addClass('drag');

                      // document.getElementById("drag").apapendChild( "<div> <img src='"+ folder + val +"'> </div>" );
                  }
              });
          }
      });

    })



  // $(document).ready(function()
  // {
  //
  //    var folder = "STELLA_IMGS/";
  //
  //    $.ajax({
  //        url : folder,
  //        success: function (data) {
  //            $(data).find("a").attr("href", function (i, val) {
  //                if( val.match(/\.(jpe?g|png|gif)$/) ) {
  //                   var div = document.createElement("div");
  //                   $(div).attr("class", "drag");
  //                   $.('body').append(div);
  //
  //                   $.(div).append( "<div> <img src='"+ folder + val +"'> </div> " ).find('div:last').addClass('dragContainer');
  //                }
  //            });
  //        }
  //    });
  //  })

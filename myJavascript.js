
$(document).ready(function () {


    $("#parentInfo").hide();
    $("#logo").hide();
    $("#div3").hide();
    $("#p1").hide();
    $("#p2").hide();
    $("#p4").hide();
    $("#p5").hide();
    $("#p6").hide();

   $("#age").click(function () {
       if ($("#age").val() <= 13)
           $("#parentInfo").show();
        else
           $("#parentInfo").hide();
    });

     $("#togphone").click(function () {
         $("#phone").toggle();

    });
     
    $("#div2").dblclick(function(){
         $(this).fadeOut();
         $("#logo").fadeIn();
     });

    $("#togaddress").dblclick(function () {
         $("#address").fadeToggle();

      });

     $("h2").dblclick(function(){
           $(this).fadeTo("slow", 0.5);
     });

     $("#div1").mouseenter(function(){
		var div=$(this);
		div.animate({height:'300px',opacity:'0.4'},"slow");
		div.animate({width:'300px',opacity:'0.8'},"slow");
		div.animate({height:'200px',opacity:'0.4'},"slow");
		div.animate({width:'250px',opacity:'0.8'},"slow");
		div.animate({left:'100px',height:'90px',width:'500px'},"slow");
		div.animate({fontSize:'3em'},"slow");
	});

     $("#div1").mouseleave(function(){
         $(this).stop(true,false);
      });

      $("#fname").keypress(function(){
		$("#div3").fadeIn("fast").fadeOut().fadeToggle("slow");	
       
     });

     $("#fname").keydown(function(){
       $(this).animate({fontSize:'+=1em'},"normal")
		.animate({fontSize:'-=1em'},"normal")
		.animate({opacity:'0.9'},"normal");
     });
      $("input").keyup(function(){
        // $(this).stop(true,true);

    });

      $("#email").blur(function(){
            $("#p1").show(function(){
                 $("#p1").text();
	 });
       });


      $("#phone").blur(function(){
            $("#p2").show(function(){
                 $("#p2").html();
	 });
       });

       $("#address").change(function(){
          $("#p5").show(function(){
			$("#span2").text($("#address").val());
       });
       });

       $("#netid").change(function(){
          $("#p4").show(function(){
			$("#span1").text($("#netid").attr("maxLength"));
         });
		});
	   
	   $("#sub").focus(function(){
			alert("Thank You for submitting your information. Now you can go to our Menu");
		   
	   });

});
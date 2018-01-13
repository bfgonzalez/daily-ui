$(document).ready(function() {
    $("#forgot-password").hide();
  
      $("#default-login").on("click", function() {
        $("#forgot-password").toggle(); 
        
        // animation for #email-container
        if ($("#email-container").css("opacity") == "1") {
            $("#email-container").stop().animate({opacity: "0"});
        } else {
            $("#email-container").stop().animate({opacity: "1"});
        }
        
        // animation for #login-container
        if ($("#login-container").css("bottom") == "20px") {
            $("#login-container").stop().animate({bottom: "1px"});
        } else {
            $("#login-container").stop().animate({bottom: "20px"});
        }
        
        // animation for button 
        if ($("button").css("bottom") == "20px") {
            $("button").stop().animate({bottom: "1px"});
        } else {
            $("button").stop().animate({bottom: "20px"});
        }
        
        // animation for #forgot-password 
        if ($("#forgot-password").css("bottom") == "15px") {
            $("#forgot-password").stop().animate({bottom: "1px"});
        } else {
          $("#forgot-password").stop().animate({bottom: "15px"});
        }
        // animation for #default-login 
        if ($("#default-login").css("bottom") == "10px") {
            $("#default-login").stop().animate({bottom: "1px"});
        } else {
            $("#default-login").stop().animate({bottom: "10px"});
        } 
        
        var currentPage = $("#default-login").text();
        var switchPage = currentPage == "Already have an account? Log in!" ? "Don't have an account? Create one!" : "Already have an account? Log in!";
        
        var currentHeader = $("h1").text();
        var switchHeader = currentHeader == "Welcome Back!" ? "Create Account" : "Welcome Back!";
        
        var currentButton = $("button").text();
        var switchButton = currentButton == "Log in" ? "Get Started" : "Log in";
       
        $("#default-login").text(switchPage);
        $("h1").text(switchHeader);
        $("button").text(switchButton);
         
      });
    
  
     
  });
$(document).ready(function() {
    $("#forgot-password").hide();
  
      $("#default-login").on("click", function() {
        $("#forgot-password").toggle(); 
        
        // animation for #email-container
        if ($("#email-container").css("opacity") == "1") {
            $("#email-container").animate({opacity: "0"});
        } else {
            $("#email-container").animate({opacity: "1"});
        }
        
        // animation for #login-container
        if ($("#login-container").css("bottom") == "30px") {
            $("#login-container").animate({bottom: "0"});
        } else {
            $("#login-container").animate({bottom: "30px"});
        }
        
        // animation for button 
        if ($("button").css("bottom") == "30px") {
            $("button").animate({bottom: "0"});
        } else {
            $("button").animate({bottom: "30px"});
        }
        
        // animation for #alt-login-container 
        if ($("#alt-login-container").css("bottom") == "30px") {
            $("#alt-login-container").animate({bottom: "0"});
        } else {
            $("#alt-login-container").animate({bottom: "30px"});
        }
        
        var currentPage = $("#default-login").text();
        var switchPage = currentPage == "Already have an account? Log in!" ? "Don't have an account? Create one!" : "Already have an account? Log in!";
        
        var currentHeader = $("h1").text();
        var switchHeader = currentHeader == "Welcome Back!" ? "Create an Account" : "Welcome Back!";
        
        var currentButton = $("button").text();
        var switchButton = currentButton == "Log in" ? "Get Started" : "Log in";
       
        $("#default-login").text(switchPage);
        $("h1").text(switchHeader);
        $("button").text(switchButton);
         
      });
    
  
     
  });
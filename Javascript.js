/*global $*/
 
//  $( document ).ready(function() {
//     console.log( "ready!" );

 $("#searchb").click(function() {
     console.log("searchb");
 
    let movie= $("#input1").val();

    $.ajax({
     
     
        url: `https://api.themoviedb.org/3/search/movie?api_key=a940e759d1db2087736ae02016ec33b2&query=${movie}`,
        method: "GET",
        success: function(response) {
            console.log("success");
            console.log(response.results[0].original_title);
            $("#title").append(response.results[0].original_title);
            $("#over").append(response.results[0].overview);
            $("#release").append(response.results[0].release_date);
            
            
            
        },
        error: function(xhr,status,error) {
            console.log("Error");
            console.log(error);
        }
    }); 
    
    
 });


$("#dropdownMenuButton").click(function() {
    $(".dropdown-menu").toggleClass("show");
});



// JS for the Drama HMTL

$(document).ready(function() {
   console.log( "ready!" );
    
    
    
     $.ajax({
     
     
        url: `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=a940e759d1db2087736ae02016ec33b2`,
        method: "GET",
        success: function(response) {
            console.log("success");
            console.log(response.results[0].original_title);
           
            
            
        },
        error: function(xhr,status,error) {
            console.log("Error");
            console.log(error);
        }
    });
});
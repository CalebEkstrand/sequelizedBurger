$(function() {
    $(".eat").on("click", function(event) {

      var id = $(this).val();

   
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
  
      }).then(
        function() {

          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

  
    // $(".delete-burger").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/burger/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted burger", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  
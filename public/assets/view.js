$(function() {
    $(".trashburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });

    $(".devourburger").on("click", function(event) {
        event.preventDefault();
        
      var id = $(this).data("id");

      var newDevourState = {
          devoured: true
      };

      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevourState
      }).then(
          function(data) {
              console.log("changed devoured to", newDevourState);
              location.reload();
          }
      );
  });

  $(".submitburger").on("click", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#name").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(data) {
            console.log("created new button");
            location.reload();
        }
    );
});

  });
  

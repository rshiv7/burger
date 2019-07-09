$(function() {
    $(".trashburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });
  });
  
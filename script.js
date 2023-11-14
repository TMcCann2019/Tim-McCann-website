document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById("LinkedIn");
    link.addEventListener('click', function(event){
      const confirmation = confirm("Are you sure you want to leave this page?");
      if (!confirmation) {
        event.preventDefault(); // Prevent the default behavior of the link
      }
    });
  });
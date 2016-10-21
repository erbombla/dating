$(document).ready(function() {
  $("form#date").submit(function(event) {
    var age = parseInt($("input#age").val());

    var gender = $("select#gender").val();
    if ( gender === 'male') || age > 35 {
      $( "#hardy" ).hide();
      $(" #malek" ).hide();
      $(" #keira" ).hide();
      $(" #dawson" ).show();
    }
    else if ( gender === 'male') || age < 33 {
      $( "#hardy" ).hide();
      $( "#malek").hide();
      $( "#dawson").hide();
      $( "#keira" ).show();
    }

    var nash = $("#nash").val();
    var newNash = parseInt(nash);

    if ( newNash === 1 ) {
      $( "#hardy" ).hide();
      $( "#malek" ).show();
    }
    else if ( newNash === 2) {
      $( "#malek" ).hide();
      $( "#hardy" ).show();
    }
    else {
      alert("Please select something");
    }
    event.preventDefault();
  });
});

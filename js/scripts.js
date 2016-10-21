$(document).ready(function() {
  $("form#date").submit(function(event) {
    var nash = $("#nash").val();
    var newNash = parseInt(nash);

    if ( newNash === 1 && gender === 'female' ) {
      $( "#hardy" ).hide();
      $( "#malek" ).show();
    }
    else if ( newNash === 2 && gender === 'female' ) {
      $( "#malek" ).hide();
      $( "#hardy" ).show();
    }
    if ( newNash === 1 && gender === 'male' ) {
      $( "#keira" ).hide();
      $( "#dawson" ).show();
    }
    else if ( newNash === 2 && gender === 'male' ) {
      $( "#dawson" ).hide();
      $( "#keira" ).show();
    }

    var gender = $("select#gender").val();
    var age = parseInt($("input#age").val());

    if ( gender === 'male' || age < 40 ) {
      $( "#hardy" ).hide();
      $(" #malek" ).hide();
      $(" #keira" ).hide();
      $(" #dawson" ).show();
    }
    else if ( gender === 'male' || age < 33 ) {
      $( "#hardy" ).hide();
      $( "#malek").hide();
      $( "#dawson").hide();
      $( "#keira" ).show();
    }
    if ( gender === 'female' || age < 40 ){
      $( "#dawson" ).hide();
      $(" #malek" ).hide();
      $(" #keira" ).hide();
      $(" #hardy" ).show();
    }
    else if ( gender === 'female' || age < 38 ) {
      $( "#hardy" ).hide();
      $( "#keira").hide();
      $( "#dawson").hide();
      $( "#malek" ).show();
    }

    event.preventDefault();
  });
});

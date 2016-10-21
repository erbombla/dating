$(document).ready(function() {
  $("form#date").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if ( gender === 'male' || age < 40 ) {
      $( "#hardy" ).hide();
      $(" #malek" ).hide();
      $(" #keira" ).hide();
      $(" #dawson" ).show();
    }
    else ( gender === 'male' || age < 33 ) {
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
    else ( gender === 'female' || age < 38 ) {
      $( "#hardy" ).hide();
      $( "#keira").hide();
      $( "#dawson").hide();
      $( "#malek" ).show();
    }

    var nash = $("#nash").val();
    var newNash = parseInt(nash);

    if ( newNash === 1 && gender === 'female' ) {
      $( "#hardy" ).hide();
      $( "#malek" ).show();
    }
    else ( newNash === 2 && gender === 'female' ) {
      $( "#malek" ).hide();
      $( "#hardy" ).show();
    }
    if ( newNash === 1 && gender === 'male' ) {
      $( "#keira" ).hide();
      $( "#dawson" ).show();
    }
    else ( newNash === 2 && gender === 'male' ) {
      $( "#dawson" ).hide();
      $( "#keira" ).show();
    }
    else {
      alert("Please select something");
    }
    event.preventDefault();
  });
});

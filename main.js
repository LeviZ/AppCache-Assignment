if (Modernizr.localstorage) {
  // window.localStorage is available!
} else {
  // no native support for HTML5 storage :(
  // maybe try dojox.storage or a third-party solution
}






$('#name').blur(function(){
  console.log("it works");
  localStorage.setItem("name", $(this).val())

});

$('#email').blur(function(){
  console.log("1");
  localStorage.setItem("email", $(this).val())
});

$('#class').blur(function(){
  console.log("2");
  localStorage.setItem("class", $(this).val())
});

$('#number').blur(function(){
  console.log("3");
  localStorage.setItem("number", $(this).val())
});

$('#chapter').blur(function(){
  console.log("4");
  localStorage.setItem("chapter", $(this).val())
});

$('#heading').blur(function(){
  console.log("5");
  localStorage.setItem("heading", $(this).val())
});

$('#issue').blur(function(){
  console.log("6");
  localStorage.setItem("issue", $(this).val())
});

$('#goal').blur(function(){
  console.log($(this).val());
  localStorage.setItem("goal", $(this).val())
});








//IMAGE FILE READER


window.onload = function() {
    var form1 = localStorage.getItem("name");
    $("#name").val(form1);
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
      var file = fileInput.files[0];
      var imageType = /image.*/;

      if (file.type.match(imageType)) {
        var reader = new FileReader();

        reader.onload = function(e) {
          fileDisplayArea.innerHTML = "";

          // Create a new image.
          var img = new Image();
          // Set the img src property using the data URL.
          img.src = reader.result;

          // Add the image to the page.
          fileDisplayArea.appendChild(img);
        }

        reader.readAsDataURL(file);
      } else {
        fileDisplayArea.innerHTML = "File not supported!";
      }
    });
}



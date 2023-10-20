function addInputBox_Event(objectName, comfirmText) {
    document.getElementById(objectName).addEventListener('input', (event) => {
      if (!event.target.value) {
        // input is empty
        document.getElementById(objectName).classList.remove("is-valid");
        document.getElementById(objectName).classList.remove("is-invalid");
      } else {
        // input has content
        var _value = $("#" + objectName + "").val();
        // console.log(_value);
        if (_value != comfirmText) {
          document.getElementById(objectName).classList.remove("is-valid")
          document.getElementById(objectName).classList.add("is-invalid");
        }else {
          document.getElementById(objectName).classList.remove("is-invalid")
          document.getElementById(objectName).classList.add("is-valid");
        }
      }
    });
}

function ConfirmEvent() {
    if (document.getElementById("Password_1").classList.contains("is-valid") && document.getElementById("Password_2").classList.contains("is-valid") && document.getElementById("Password_3").classList.contains("is-valid")){
        console.log("Correct");
        window.location.href='https://drive.google.com/file/d/10AzXzSJw7W3FbtUNzzIPzeXu6LHg87yG/view?usp=share_link';
    }else {
        console.log("failed");
        $("#exampleModal").modal("show");
    }
}

function serv() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
          console.log("desde el js",myJson)
        let dato =document.getElementById("identificador").value;

        const validacion = myJson.find(user=>user.id == dato);
        if(validacion === undefined || validacion === "undefined"){
            document.getElementById("c2").classList.remove("carta2");
        }
    
      });
  }
  function validarContrasena(){
      let contra1 = document.getElementById("password1").value;
      let contra2 = document.getElementById("password2").value;

      if(contra1 === contra2){
        document.getElementById("c3").classList.remove("carta2");
      }else{
        document.getElementById("c3").classList.add("carta2");   
      }

  }  
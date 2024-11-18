let perfilUsuario = JSON.parse(localStorage.getItem('perfil'));
if(perfilUsuario != null)
    document.getElementById("usuario").innerHTML = `<img
    src="https://i.pinimg.com/236x/2f/02/ba/2f02ba39bd7c8f5cabddd18a4b44afae.jpg"
    width="40px"
    height="40px"
    class="rounded-circle"
    alt=""
    />${perfilUsuario.usuario}`;
else
 console.log("no se encontro");
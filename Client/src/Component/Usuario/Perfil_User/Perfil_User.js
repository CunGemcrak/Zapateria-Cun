import React from 'react';
import "./Perfil_user.css"

const PerfilUser =()=>{
    return <>
        <body>
      <from>
        <h2>PERFIL USUARIO</h2>
        <div class="input-gruop">
          <div class="input-container">
            <input type='text' name='nombre' placeholder='Nombre'></input>
            
          </div>
          <div class="input-container">
            <input type='numero' name='N° documento' placeholder='N° Documento'></input>
            
          </div>
          <div class="input-container">
            <input type='email' name='correo' placeholder='Correo'></input>
            
          </div>
          <div class="input-container">
            <input type='telefono' name='telefono' placeholder='Telefono'></input>
            
          </div>
          <div class="button">
            <button>Editar</button>

          </div>
          


        </div>


      </from>
    </body>

    </>
}
export default PerfilUser;
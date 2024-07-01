import React from 'react';
import "./Perfil_user.css"
import NavMenu from '../../navMenu/NavMenu';

const PerfilUser =()=>{
    return <>
     <NavMenu className="nav-menu" />
    <div className='body-user-perfil'>
              <div className='from-perfil'>
                <h2>PERFIL USUARIO</h2>
                <div class="input-gruop">
                  <div class="input-container">
                    <input type='text' name='nombre' placeholder='Nombre'></input>
                    
                  </div>
                  <div class="input-container">
                    <input type='numero' name='correo' placeholder='Correo'></input>
                    
                  </div>
                  <div class="input-container">
                    <input type='email' name='celular' placeholder='Celular'></input>
                    
                  </div>
                  <div class="input-container">
                    <input type='telefono' name='direccion' placeholder='Direccion'></input>
                    
                  </div>
                  
                  <div className="btn-editar">Editar</div>

                  </div>
                  


                </div>


              </div>
    
</> 
}
export default PerfilUser;
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/default.css';
const LoginUser = ()=>{
      const  clickHandle = () => {
        alertify.alert('Mensaje de alerta', 'Este es un mensaje de alerta');
                
              }
  return <>
         <div onClick={clickHandle} > Este es el login User de Logue</div>
  </>
  }
  export default LoginUser





# **EstiloZAP** | Proyecto Desarrollo de Software 
# **Contexto del Proyecto**
        
# **Proyecto desarrollado por:**
<br/>
 <h2> 💼 Scrum-Master </h2>
 Mateo Jiménez Herrera* ficha *53305*
<br/>
 <h2> ⚙️ Desarrolladores Back </h2>
 - Cristian Ríos Caamaño ficha *53307*
<br/>
- Luis Alberto Buelvas Cogollo  ficha *53307* 
<br/>


<h2> ⚙️ Desarrolladores Front </h2>
- Camila Andrea Herrera Gamboa ficha *53307*
<br/>
- Mateo Jiménez Herrera ficha *53305*
<br/>
<br/>

**Introducción**
<br/>
Zapatería CUN es una iniciativa académica que busca desarrollar una plataforma digital para la venta de zapatos. El proyecto tiene como objetivo construir una Single Page Application (SPA) utilizando tecnologías modernas del stack de JavaScript, incluyendo React, Redux, Node.js, Express y Sequelize. Además, se enfoca en la implementación de principios de UX/UI para ofrecer una experiencia de usuario atractiva y funcional. Este proyecto permitirá a los estudiantes aplicar los conocimientos adquiridos durante la carrera, aprender mejores prácticas en el desarrollo de software y dominar el uso del workflow de GIT.

<br />

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.


<br />


---

## **⚠️ IMPORTANTE**

Es necesario contar minimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Actualmente las versiónes necesarias son:

-  **Node**: 12.18.3 o mayor
-  **NPM**: 6.14.16 o mayor

Para verificar que versión tienes instalada:

```bash
node -v
npm -v
```



Está permitido, **bajo tu responsabilidad**, actualizar las dependencias a versiones más actuales si lo deseas. Versiones más actuales podrían presentar configuraciones diferentes respecto a las versiones en las que venimos trabajando durante el bootcamp.


<br />

## **⚠️ TECNOLOGÍAS**

Para el desarrollo del ejercicio se implementan tecnologías como:

### **Front-end**
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) **React**
- ![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?logo=firebase&logoColor=white) **Firebase** (`firebase`: `^10.12.2`)
- ![React Icons](https://img.shields.io/badge/-React_Icons-61DAFB?logo=react&logoColor=white) **React Icons** (`react-icons`: `^5.2.1`)
- ![React Redux](https://img.shields.io/badge/-React_Redux-764ABC?logo=redux&logoColor=white) **React Redux** (`react-redux`: `^7.2.3`)
- ![React Router Dom](https://img.shields.io/badge/-React_Router_Dom-CA4245?logo=react-router&logoColor=white) **React Router Dom** (`react-router-dom`: `^6.23.1`)
- ![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white) **Redux** (`redux`: `^4.0.5`)
- ![Redux Thunk](https://img.shields.io/badge/-Redux_Thunk-764ABC?logo=redux&logoColor=white) **Redux Thunk** (`redux-thunk`: `^2.4.2`)
- ![Sass](https://img.shields.io/badge/-Sass-CC6699?logo=sass&logoColor=white) **Sass** (`sass`: `^1.77.1`)
- ![AlertifyJS](https://img.shields.io/badge/-AlertifyJS-FF9D00?logo=javascript&logoColor=white) **AlertifyJS** (`alertifyjs`: `^1.14.0`)
- ![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white) **Axios** (`axios`: `^1.7.0`)
- ![MercadoPago SDK React](https://img.shields.io/badge/-MercadoPago_SDK_React-339AF0?logo=mercadopago&logoColor=white) **MercadoPago SDK React** (`@mercadopago/sdk-react`: `^0.0.19`)

### **Back-end**
- ![Dotenv](https://img.shields.io/badge/-Dotenv-ECD53F?logo=dotenv&logoColor=white) **Dotenv** (`dotenv`: `^8.2.0`)
- ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white) **Express** (`express`: `^4.17.1`)
- ![MercadoPago](https://img.shields.io/badge/-MercadoPago-339AF0?logo=mercadopago&logoColor=white) **MercadoPago** (`mercadopago`: `^1.5.8`)
- ![Morgan](https://img.shields.io/badge/-Morgan-000000?logo=morgan&logoColor=white) **Morgan** (`morgan`: `^1.10.0`)
- ![MySQL2](https://img.shields.io/badge/-MySQL2-4479A1?logo=mysql&logoColor=white) **MySQL2** (`mysql2`: `^3.10.0`)
- 


<br />

## **⚠️ Funciones y Características**
### 📌 Nuestra aplicación muestra componentes para:

### 👤 **El usuario**:
1. Un usuario es el encargado de desarrollar las compras en las diferentes tiendas que brindan sus servicios. Los procesos de registro y compras se verifican con un correo que se envía automáticamente por el evento desarrollado.
    <ol>
        <li>📝 Registrar usuario</li>
        <li>🛠 Administrar sus datos</li>
        <li>🛒 Seleccionar elementos para su carrito de compras
            <ul>
                <li>🛍 Desarrollar una orden de su compra</li>
                <li>💳 Desarrollar el pago de la compra a través de la plataforma Mercado Pago</li>
            </ul>
        </li>
        <li>📜 Verificar las compras desarrolladas</li>
    </ol>

### 🏬 **La Tienda**:
<ol start="2">
    <li>📝 Registro de tienda</li>
    <li>🛠 Administración de datos</li>
    <li>👟 Creación de tarjeta de zapato para Stock</li>
    <li>📦 Administración de Stock para actualizar o modificar tarjetas o, en su defecto, ocultar al público o eliminar si es necesario</li>
    <li>✅ Verificación de órdenes, donde se identifica cuál es el estado de la orden (Aprobado, Rechazado, En Proceso)</li>
</ol>

### 📱 **La Aplicación**:
<ol start="3">
    <li>🔍 Filtros: Los filtros permiten seleccionar por palabras o características propias de las tarjetas de zapato que muestran el Stock de las diferentes tiendas</li>
</ol>

### 🚀 **Procesos Futuros**:
- Se plantea desarrollar un esquema de comentarios para conocer la opinión del cliente con respecto al proceso desarrollado.
- 

## 🌐 Modelo Entidad-Relación: Diseño Innovador para Nuestra Aplicación

![Modelo ER](https://github.com/CunGemcrak/Zapateria-Cun/assets/142614397/12c38c3c-512f-4d44-b260-c95396890171)



## 📊 Modelo Relacional: Estructura Eficiente para Gestionar Datos


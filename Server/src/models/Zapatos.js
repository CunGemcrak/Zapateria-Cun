const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Zapatos = sequelize.define('Zapatos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tienda: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        costo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        calidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        talla: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activo: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: false });

    // Sincronización y carga inicial de datos
    Zapatos.sync().then(() => {
        return Zapatos.bulkCreate([
            { tienda: "1", tipo: "Dama", 
                marca: "Adidas", costo: "1000", color: "rojo", modelo: "Sandalias", 
                calidad: "AAA", descripcion: "Estilo y calidad buena imagen ", 
                url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2FZandalia%20dama%20.jpeg?alt=media&token=97b9eab1-89ba-4cd0-a34b-8a4bc23b939e",
                 talla: "31", activo: "true"},
                 { tienda: "1", tipo: "Dama", 
                    marca: "Adidas", costo: "1000", color: "rojo", modelo: "Sandalias", 
                    calidad: "AAA", descripcion: "Amor a la calidad ", 
                    url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2FZandalia%20dama%202%20.jpeg?alt=media&token=73184e39-11ba-4151-bce7-7379bbf77d94",
                     talla: "31", activo: "true"},
        
        { tienda: "1", tipo: "Dama", 
                        marca: "Fila", costo: "1000", color: "blanco", modelo: "Sandalias", 
                        calidad: "AAA", descripcion: "Calidad ", 
                        url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fzandalia-dama.jpg?alt=media&token=dbe8a637-7db5-416b-8982-019722b57b43",
                         talla: "31", activo: "true"},
        
        { tienda: "1", tipo: "Dama", 
                            marca: "Nike", costo: "1000", color: "blanco", modelo: "Zapatilla", 
                            calidad: "AAA", descripcion: "Calidad ", 
                            url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fimages.jpeg?alt=media&token=0c5f752d-5ab7-4e56-835c-21706acfc384",
                             talla: "38", activo: "true"},
           
        { tienda: "1", tipo: "Dama", 
                                marca: "Vans", costo: "1000", color: "amarillo", modelo: "Zapatilla", 
                                calidad: "AAA", descripcion: "Estilo y calidad", 
                                url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fpolo-ralph-lauren-krosivki-thompson-816743524001-chornii.jpg?alt=media&token=30d2b6fd-b879-4cc0-a6f0-38e1f9b520a8",
                                 talla: "38", activo: "true"},

      { tienda: "1", tipo: "Dama", 
                                    marca: "Nike", costo: "1000", color: "azul", modelo: "Botas", 
                                    calidad: "AAA", descripcion: "botas", 
                                    url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2FD_NQ_NP_874019-MCO49195635337_022022-O.webp?alt=media&token=eaf5f296-4bdc-4ce7-b416-94d3fdf9c445",
                                     talla: "40", activo: "true"},
     
     { tienda: "1", tipo: "Dama", 
                                        marca: "Puma", costo: "1000", color: "azul", modelo: "Botas", 
                                        calidad: "AAA", descripcion: "lo mejor ", 
                                        url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fimages.jpeg?alt=media&token=b65249d4-6d44-4b75-80d2-9155d93a7003",
                                         talla: "40", activo: "true"},  
                                        
     { tienda: "1", tipo: "Dama", 
                                            marca: "Adidas", costo: "1000", color: "azul", modelo: "Formales", 
                                            calidad: "AAA", descripcion: "lo mejor genial", 
                                            url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fimages%20(1).jpeg?alt=media&token=0869e9d7-06fa-410b-9968-081bc848658e",
                                             talla: "30", activo: "true"}, 

     { tienda: "2", tipo: "Caballero", 
                                                marca: "Puma", costo: "1000", color:"Combinados", modelo: "Deportivos", 
                                                calidad: "AAA", descripcion: "lo mejor genial", 
                                                url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2F4c920747ed99e1878d8cb3fd6254d4d8.jpg?alt=media&token=98b387af-a105-4097-bbdf-2f8d9bc17851",
                                                 talla: "390", activo: "true"}, 
    { tienda: "2", tipo: "Caballero", 
                                                    marca: "Nike", costo: "1000", color:"Naranja", modelo: "Deportivos", 
                                                    calidad: "AAA", descripcion: "lo mejor genial", 
                                                    url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fnegro-25.jpg?alt=media&token=fd10d992-68ae-4ec3-88cc-a4d64e0c5205",
                                                     talla: "390", activo: "true"}, 
     { tienda: "2", tipo: "Caballero", 
                                                        marca: "Converse", costo: "1000", color:"Naranja", modelo: "Zapatilla", 
                                                        calidad: "AAA", descripcion: "lo mejor genial", 
                                                        url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fe57105804b71570069b2ecc97fb7d3fe.jpg?alt=media&token=a1a07cd6-303b-46a0-99b3-b0204a2137ac",
                                                         talla: "390", activo: "true"}, 

      { tienda: "2", tipo: "Caballero", 
                                                            marca: "New Balance", costo: "1000", color:"Naranja", modelo: "Zapatilla", 
                                                            calidad: "AAA", descripcion: "lo mejor genial", 
                                                            url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fnegro-25.jpg?alt=media&token=fd10d992-68ae-4ec3-88cc-a4d64e0c5205",
                                                             talla: "390", activo: "true"},

     { tienda: "2", tipo: "Caballero", 
                                                                marca: "Under Armour", costo: "1000", color:"Naranja", modelo: "Botas", 
                                                                calidad: "AAA", descripcion: "lo mejor genial", 
                                                                url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fsg-11134201-22120-3zocdht2m0kv4b.jpeg?alt=media&token=3a710b6b-6570-4cf3-ac14-151cf6b9aced",
                                                                 talla: "390", activo: "true"},

      { tienda: "2", tipo: "Caballero", 
                                                                    marca: "Under Armour", costo: "1000", color:"Negro", modelo: "Formales", 
                                                                    calidad: "AAA", descripcion: "lo mejor genial", 
                                                                    url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fimages%20(1).jpeg?alt=media&token=20b77ed2-4c52-49e7-82cd-5e0725aac217",
                                                                     talla: "390", activo: "true"},



               ]);
    }).catch(err => {
        console.error('Error en la sincronización de Zapatos:', err);
    });

    return Zapatos;
};

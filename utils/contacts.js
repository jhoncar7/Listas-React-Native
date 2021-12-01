const CANTIDAD_DATOS = 50;

const nombres = ['santiago', 'isabel', 'jhon', 'maria', 'jose', 'juan', 'pedro', 'jose', 'juan', 'pedro'];
const apellidos = ['altamura','carreño','lopez','gonzalez','getti','bustamante','bageri'];

const random = (max, min=0) => Math.floor(Math.random() * (max - min +1)) + min;
const generarNombre = ()=>`${nombres[random(nombres.length-1)]} ${apellidos[random(apellidos.length-1)]}`;
const generarTelefono = ()=>`${random(999,100)}-${random(999,100)}-${random(999,100)}`;

const crearContacto = ()=>{
    return{
        nombre: generarNombre(),
        telefono: generarTelefono()
    }
};

const contacts = Array.from({length: CANTIDAD_DATOS}, crearContacto).map((item,id)=>({...item,id}));
//la segunda parte del.map es para generar el id para el flatlist

export default contacts;
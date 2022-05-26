import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import NavBar from './componentes/NavBar';


function App() {

  const filtro = {
    in: '16%'
  }

  const [archivos, setArchivos]= useState([]);
  const [tablaArchivos, setTablaArchivos]= useState([]);
  const [busquedaar, setBusquedaar]= useState("");

const peticionGet=async()=>{
  await axios.get("http://localhost:4000/files/data")
  .then(response=>{
    setArchivos(response.data);
    setTablaArchivos(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

const handleChange=e=>{
  setBusquedaar(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaArchivos.filter((archivo)=>{
    if(archivo.file.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || archivo.file.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return archivo;
    }
  });
  setArchivos(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[])

  return (
    <div className="App">
      <NavBar/>

      <h2>Consultar Archivos</h2>
    
      <div className="containerInput">
        <input style={filtro}
          className="form-control inputBuscar"
          value={busquedaar}
          placeholder="Ingrese archivo"
          onChange={handleChange}
        />
        
      </div>

     <div className="table-responsive">
       <table className="table table-sm table-bordered">
         <thead>
           <tr>
             <th>File</th>
             <th>Text</th>
             <th>Number</th>             
             <th>Hex</th>                                    
           </tr>
         </thead>

         <tbody>
           {archivos && 
           archivos.map((archivo)=>(
             <tr key={archivo.id}>
               <td>{archivo.file}</td>
               <td>{archivo.text}</td>
               <td>{archivo.number}</td>    
               <td>{archivo.hex}</td>                                  
             </tr>
           ))}
         </tbody>

       </table>

     </div>
    </div>      
    
  );
}

export default App;

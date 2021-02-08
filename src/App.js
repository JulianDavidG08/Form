import './App.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


function App() {

  const { register, handleSubmit, errors } = useForm();

  const [arrayData, setArrayData] = useState([]);

  const onSubmit = data => {
      setArrayData([...arrayData, data])
  }

  console.log(arrayData);
  console.log(errors);


  return (
      <form className="container__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="section__one">
          <div className="section__one__date">
            <h2>Datos de la factura</h2>
          </div>
          <div className="section__one__consulting">
            <h2>Datos del consultorio</h2>
              <input 
                type="date" 
                id="start" 
                name="date-start"
                ref={register({ required: true })}
                min="2021-01-01" max="2031-12-31"></input>
              <input
                type="date" 
                id="start" 
                name="date-end"
                ref={register({ required: true })}
                min="2021-01-01" max="2031-12-31"></input>
          </div>
        </div>
          <input type="submit" value="Enviar data"/>

      </form>
  );
}

export default App;



// export default function App() {
  
  
//   return (
//     <form >
//       <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
//       <select name="Title" ref={register({ required: true })}>
//         <option value="Mr">Mr</option>
//         <option value="Mrs">Mrs</option>
//         <option value="Miss">Miss</option>
//         <option value="Dr">Dr</option>
//       </select>

//       <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
//       <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>

//     </form>
//   );
// }

import Style from './App.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


function App() {

  const { register, handleSubmit, errors } = useForm();

  const [arrayData, setArrayData] = useState([]);

  const onSubmit = data => {
      setArrayData([...arrayData, data]);
      console.log(data);
  }

  console.log(errors);


  return (
      <form className={Style.container__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={Style.flex__container__one}>
          <div className={Style.section__factura}>
            <h2>Datos de la factura</h2>
              <div className={Style.flex__container}>
                <input 
                  type="date" 
                  name="date-fecha"
                  ref={register}
                  min="2021-01-01" max="2031-12-31">
                </input>
                <input
                  type="date"
                  name="date-vencimiento"
                  ref={register}
                  min="2021-01-01" max="2031-12-31">
                </input>
                <select name="date-forma-pago" ref={register}>
                    <option value="Pago 1">Pago 1</option>
                    <option value="Pago 2">Pago 2</option>
                    <option value="Pago 3">Pago 3</option>
                </select>
              </div>
          </div>
          <div className={Style.section__consultorio}>
            <h2>Datos del consultorio</h2>
              <div className={Style.section__consultorio__head}>
                  <div className={Style.border__bottom__card}>Consultorio</div>
                  <div className={Style.border__bottom__card}>ID</div>
                  <div className={Style.border__bottom__card}>Código</div>
                  <div className={Style.border__bottom__card}>Teléfono</div>
              </div>
              <div className={Style.flex__container__site}>
                <div className={Style.border__bottom__card__one}>Dirección</div>
                <div className={Style.border__bottom__card__two}>Ciudd</div>
              </div>
              <div className={Style.flex__container__convenio}>
                <label for="date-convenio">Convenio</label>
                <select name="date-convenio" ref={register}>
                    <option value="value 1">value 1</option>
                    <option value="value 2">value 2</option>
                    <option value="value 3">value 2</option>
                </select>
              </div>
          </div>
        </div>


        <div className={Style.dotted__line}></div>

        <div className={Style.flex__container__two}>
          <div className={Style.flex__container__between}>
            <div><h3>Datos del tercero</h3></div>
            <div className={Style.flex__container__self}><a className={Style.buttonBaseBlack} href="#">Crear o editar tercero</a></div>
          </div>
          <div className={Style.flex__container__between}>
            <div className={Style.flex__column__input}>
              <label for="date-nombre">Nombre</label>
              <input 
                  type="text" 
                  name="date-nombre"
                  ref={register({ required: true })}
                  >
              </input>
            </div>
            
            <div className={Style.flex__column__input}>
              <label for="date-ID">ID</label>
              <select name="date-ID" ref={register}>
                  <option value="value 1">value 1</option>
                  <option value="value 2">value 2</option>
                  <option value="value 3">value 2</option>
              </select>
            </div>

            <div className={Style.flex__column__input}>
            <label for="date-telephone">Teléfono:</label>
            <input 
                type="tel" 
                name="date-telephone"
                ref={register}
                ></input>
            </div>
          </div>

          <div className={Style.flex__container__between}>
            <div className={Style.flex__column__input}>
              <label for="date-direccion">Dirección</label>
              <input 
                  type="text" 
                  name="date-direccion"
                  ref={register}
                  ></input>
            </div>

            <div className={Style.flex__column__input}>
              <label for="date-ciudad">Ciudad</label>
              <select name="date-ciudad" ref={register}>
                  <option value="value 1">value 1</option>
                  <option value="value 2">value 2</option>
                  <option value="value 3">value 2</option>
              </select>
            </div>

            <div className={Style.flex__column__input}>
              <label for="date-pago-paciente">Pago paciente:</label>
              <select name="date-pago-paciente" ref={register}>
                  <option value="value 1">value 1</option>
                  <option value="value 2">value 2</option>
                  <option value="value 3">value 2</option>
              </select>
            </div>
          </div>
        </div>

        <div className={Style.dotted__line}></div>

        <div className={Style.flex__container__three}>
          <div className={Style.container__three__item}>
            <div className={Style.three__item__line}></div>
            <div>Autorización número</div>
          </div>
          <div className={Style.container__three__item}>
            <div className={Style.three__item__line}></div>
            <div>Póliza número</div>
          </div>
          <div className={Style.container__three__item}>
            <div className={Style.three__item__line}></div>
            <div>Emisor</div>
          </div>
          <div className={Style.container__three__item}>
            <div className={Style.three__item__line}></div>
            <div>Firma y sello</div>
          </div>
        </div>

        <div className={Style.flex__container__four}>
          <div className={Style.container__four__item}>
            <div>Subtotal</div>
            <div className={Style.number}>0,00</div>
          </div>
          <div className={Style.container__four__item}>
            <div>Descuento</div>
            <div className={Style.number}>0,00</div>
          </div>
          <div className={Style.container__four__item}>
            <div>Impuesto</div>
            <div className={Style.number}>0,00</div>
          </div>
          <div className={Style.container__four__item__dark}>
            <div>Total</div>
            <div className={Style.number}>0,00</div>
          </div>
        </div>

      <div className={Style.leyenda}>
        <span>Leyenda LeyendaObservacion-Regimen Nota-resolucion Resolucion de fecha-nicial al fecha-final Fecha Expedicion: fecha</span>
      </div>


        <div className={Style.container__button}>
          <input className={Style.buttonBaseGreen} type="submit" value="Aprobar"/>
          <input className={Style.buttonBase} type="submit" value="Imprimir"/>
          <input className={Style.buttonBase} type="submit" value="Pagar"/>
          <input className={Style.buttonBase} type="submit" value="Enviar Dian"/>
          <input className={Style.buttonBaseTransparent} type="submit" value="Volver"/>

        </div>

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

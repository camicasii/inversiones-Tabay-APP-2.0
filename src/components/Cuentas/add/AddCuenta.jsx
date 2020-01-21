import React from 'react'
import Addtipo from './Addtipo'

export default function AddCuenta() {
    return (
        <div className="card">
        ID:"ID",
    ID_USERS:"ID_USERS",
    FECHA:"FECHA",
    DESCIPCION:"DESCIPCION",
    DEBE:"DEBE",
    HABER:"HABER",
    TIPO_PAGO:"TIPO_PAGO",
    BANCO:"BANCO",
    REF:"REF",
    URL:"URL",
    CONCEPTO:"CONCEPTO",
    CUENTA:"CUENTA"
            <div className="body">
            <form>
  <div class="form-row">  

</div>
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="Fecha">Fecha</label>
      <input type="date" class="form-control" id="Fecha"/>
    </div>    
    <div class="form-group col-md-6">
      <label for="DESCRIPCION">DESCRIPCION</label>
      <input type="text" class="form-control" id="DESCRIPCION"/>
    </div>
  </div>
  <Addtipo/>
  <div class="form-group">
    <label for="monto">monto</label>
    <input type="text" class="form-control" id="monto" placeholder="agregar monto"/>
  </div>
 
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        agregar refencia
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

            </div>
        </div>


    )
}

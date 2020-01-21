import React from "react";
import { useCuentas, Query } from "../../../Hook";
import TCHead from "./TCHead";
import TCBody from "./TCBody";

export default function ViewCuenta() {
  const { loading, data } = useCuentas(Query); 

  return (
    <table class="table">
      {!loading ? (
        <div>
          <TCHead query={Query} />
          <TCBody data={data.cuentas} />
        </div>
      ) : null}
    </table>
  );
}

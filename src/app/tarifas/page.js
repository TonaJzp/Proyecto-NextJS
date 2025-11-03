import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";

export default function TarifasPage() {
  return (
    <>
      <Breadcrumbs className="mb-4" segmentNameMap={{ tarifas: "Tarifas" }} />

       <div className="alert alert-info mb-6">
        <span className="font-medium">Promoción online:</span> Compra en la web y ahorra un 10% en tarifa general e infantil.
      </div>

      <h1 className="text-3xl font-bold mb-6">Entradas y precios</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card title="General" description="Desde 13 años en adelante. Acceso a todas las áreas.">
          <div className="text-4xl font-bold">19,90€</div>
          <div className="card-actions justify-end mt-4">
            <a className="btn btn-primary" href="/calendario">Comprar</a>
          </div>
        </Card>

        <Card title="Infantil" description="De 4 a 12 años. Menores de 4 entran gratis.">
          <div className="text-4xl font-bold">12,90€</div>
          <div className="card-actions justify-end mt-4">
            <a className="btn btn-primary" href="/calendario">Comprar</a>
          </div>
        </Card>

        <Card title="Familiar" description="2 adultos + 2 menores. Incluye foto recuerdo.">
          <div className="text-4xl font-bold">54,90€</div>
          <div className="card-actions justify-end mt-4">
            <a className="btn btn-primary" href="/calendario">Comprar</a>
          </div>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Tarifas especiales</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card title="Senior (+65)" description="Documento acreditativo requerido.">
          <div className="text-4xl font-bold">14,90€</div>
          <div className="card-actions justify-end mt-4">
            <a className="btn btn-outline" href="/calendario">Comprar</a>
          </div>
        </Card>

        <Card title="Estudiante" description="Con carné vigente. No acumulable a otras promos.">
          <div className="text-4xl font-bold">15,90€</div>
          <div className="card-actions justify-end mt-4">
            <a className="btn btn-outline" href="/calendario">Comprar</a>
          </div>
        </Card>

        <Card title="Diversidad funcional" description="Acompañante gratis si consta en acreditación.">
          <div className="text-4xl font-bold">12,90€</div>
          <div className="card-actions justify-end mt-4">
            <a className="btn btn-outline" href="/calendario">Comprar</a>
          </div>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Combos y extras</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card title="Entrada + menú" description="Menú del día en restaurante principal.">
          <div className="text-4xl font-bold">27,90€</div>
          <p className="text-sm opacity-80 mt-2">Incluye plato, bebida y postre.</p>
          <div className="card-actions justify-end mt-4">
            <a className="btn btn-primary" href="/calendario">Comprar</a>
          </div>
        </Card>

        <Card title="Encuentro educativo" description="Charla con cuidador y vista backstage.">
          <div className="text-4xl font-bold">12,00€</div>
          <p className="text-sm opacity-80 mt-2">Añádelo a tu entrada durante la compra.</p>
          <div className="card-actions justify-end mt-4">
            <a className="btn btn-outline" href="/calendario">Añadir</a>
          </div>
        </Card>

        <Card title="Parking" description="Aparcamiento oficial del zoo (día completo).">
          <div className="text-4xl font-bold">5,00€</div>
          <div className="card-actions justify-end mt-4">
            <a className="btn btn-outline" href="/calendario">Reservar</a>
          </div>
        </Card>
      </div>

      <section className="rounded-2xl bg-base-200 ring-1 ring-base-300 p-6 lg:p-8 mb-10">
        <h2 className="text-2xl font-semibold">Grupos y escuelas</h2>
        <p className="opacity-80 mt-1">
          Tarifas especiales para reservas de grupo. Se requiere un mínimo de 20 personas.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>Tipo de grupo</th>
                <th>Precio por persona</th>
                <th>Condiciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Escolares (4–17 años)</td>
                <td>9,50€</td>
                <td>1 docente gratis por cada 10 alumnos</td>
              </tr>
              <tr>
                <td>Adultos</td>
                <td>14,50€</td>
                <td>Reserva previa y mismo horario de acceso</td>
              </tr>
              <tr>
                <td>Asociaciones</td>
                <td>12,50€</td>
                <td>Acreditación y listado de asistentes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="/calendario">Solicitar fecha</a>
          <a className="btn btn-outline" href="/contacto">Contáctanos</a>
        </div>
      </section>

    

    </>
  );
}

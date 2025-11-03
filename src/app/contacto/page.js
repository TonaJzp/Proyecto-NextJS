import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";

export default function ContactoPage() {
  return (
    <>
      <Breadcrumbs className="mb-4" segmentNameMap={{ contacto: "Contacto"}} />
      <h1 className="text-3xl font-bold mb-6">Contacto y preguntas frecuentes</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Formulario de contacto */}
        <form className="bg-base-200 rounded-2xl p-6 ring-1 ring-base-300 space-y-4">
          <label className="form-control">
            <span className="label-text">Nombre</span>
            <input className="input input-bordered" placeholder="Tu nombre" />
          </label>
          <label className="form-control">
            <span className="label-text">Email</span>
            <input type="email" className="input input-bordered" placeholder="tucorreo@ejemplo.com" />
          </label>
          <label className="form-control">
            <span className="label-text">Mensaje</span>
            <textarea className="textarea textarea-bordered" rows={5} placeholder="¿En qué podemos ayudarte?" />
          </label>
          <button className="btn btn-primary">Enviar</button>
        </form>

        {/* FAQs como tarjetas */}
        <div className="space-y-4">
          <Card title="¿Se permite comida del exterior?">
            <p>Sí, en zonas de picnic. No en recintos de animales.</p>
          </Card>
          <Card title="¿Hay alquiler de carritos?">
            <p>Disponibles en la entrada principal, sujetos a disponibilidad.</p>
          </Card>
          <Card title="¿Puedo reingresar el mismo día?">
            <p>Sí, con sello o pulsera de control entregada al salir.</p>
          </Card>
        </div>
      </div>
    </>
  );
}

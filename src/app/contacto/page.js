// app/pagina5/page.js
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactoPage() {
  return (
    <>
      <Breadcrumbs className="mb-4" segmentNameMap={{ contacto: "Contacto" }} />
      <h1 className="text-3xl font-bold mb-8">Contacto</h1>

      {/* 👇 items-start evita que la columna izquierda crezca al expandir las FAQs */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <form className="bg-base-200 rounded-2xl p-6 lg:p-8 ring-1 ring-base-300 shadow-sm self-start h-fit">
          <h2 className="text-xl font-semibold">Escríbenos</h2>
          <p className="text-sm opacity-70 mb-6">Te respondemos en 24–48h laborables.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <label className="form-control">
              <span className="label-text">Nombre</span>
              <input className="input input-bordered w-full" placeholder="Tu nombre" />
            </label>
            <label className="form-control">
              <span className="label-text">Email</span>
              <input type="email" className="input input-bordered w-full" placeholder="tucorreo@ejemplo.com" />
            </label>
          </div>

          <label className="form-control mt-10">
            <span className="label-text mb-2">Mensaje</span>
            <textarea
              className="textarea textarea-bordered w-full min-h-[160px]"
              placeholder="¿En qué podemos ayudarte?"
            />
          </label>

          <div className="flex items-start gap-2 mt-4">
            <input id="consent" type="checkbox" className="checkbox checkbox-sm" />
            <label htmlFor="consent" className="text-sm opacity-70">Acepto la política de privacidad.</label>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className="btn btn-primary">Enviar</button>
            <button type="reset" className="btn btn-ghost">Limpiar</button>
          </div>
        </form>

        <div className="space-y-4 self-start">
          <div className="collapse collapse-plus bg-base-200 rounded-2xl ring-1 ring-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">¿Se permite comida del exterior?</div>
            <div className="collapse-content">
              <p>Sí, en zonas de picnic. No en recintos de animales.</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 rounded-2xl ring-1 ring-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">¿Hay alquiler de carritos?</div>
            <div className="collapse-content">
              <p>Disponibles en la entrada principal, sujetos a disponibilidad.</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 rounded-2xl ring-1 ring-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">¿Puedo reingresar el mismo día?</div>
            <div className="collapse-content">
              <p>Sí, con sello o pulsera de control entregada al salir.</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 rounded-2xl ring-1 ring-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">¿Cómo cambio o cancelo mi reserva?</div>
            <div className="collapse-content">
              <p>Desde el correo de confirmación encontrarás el enlace para gestionar cambios y cancelaciones. Sujeto a disponibilidad.</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 rounded-2xl ring-1 ring-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">¿Admiten mascotas?</div>
            <div className="collapse-content">
              <p>No, por seguridad y bienestar animal. Se permiten perros guía con acreditación.</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 rounded-2xl ring-1 ring-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">¿Qué métodos de pago aceptan?</div>
            <div className="collapse-content">
              <p>Tarjeta, móvil (contactless) y efectivo en taquillas. En la web: tarjeta y wallets habituales.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

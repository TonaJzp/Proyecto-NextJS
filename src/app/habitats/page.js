// app/pagina3/page.js
import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";

export default function HabitatsPage() {
  return (
    <>
      <Breadcrumbs className="mb-4" segmentNameMap={{ pagina3: "Hábitats" }} />
      <h1 className="text-3xl font-bold mb-2">Hábitats y especies</h1>
      <p className="opacity-80 mb-6">
        Recorre las zonas principales del parque y descubre qué animales podrás ver en cada una.
      </p>

      <section className="mb-8 rounded-2xl bg-base-200 ring-1 ring-base-300 p-4 md:p-6">
        <h2 className="text-xl font-semibold mb-3">Tipos de hábitat</h2>
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-lg"><span className="me-1">🐘</span>Sabana</span>
          <span className="badge badge-lg"><span className="me-1">🦜</span>Aviario</span>
          <span className="badge badge-lg"><span className="me-1">🦎</span>Terrario</span>
          <span className="badge badge-lg"><span className="me-1">🐠</span>Acuario</span>
          <span className="badge badge-lg"><span className="me-1">🦩</span>Humedal</span>
          <span className="badge badge-lg"><span className="me-1">🌳</span>Bosque</span>
        </div>
        <p className="text-sm opacity-70 mt-3">
          Estas categorías agrupan las zonas del zoo. Explora las tarjetas para ver más detalles.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Zonas exteriores</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            image="/Habitats/sabana.webp"
            title="Sabana africana"
            description="Leones, jirafas y cebras en una llanura abierta con miradores."
            actions={[{ label: "Comprar entradas", href: "/pagina4", color: "accent" }]}
          >
            <div className="mt-4" />
          </Card>

          <Card
            image="/Habitats/pradera.webp"
            title="Pradera de herbívoros"
            description="Zebras y jirafas pastando en praderas verdes con amplias vistas."
            actions={[{ label: "Horarios", href: "/horario" }]}
          >
            <div className="mt-4" />
          </Card>

          <Card
            image="/Habitats/lago.webp"
            title="Lago de flamencos"
            description="Colonia de flamencos en aguas someras y pasarelas perimetrales."
            actions={[{ label: "Visitar", href: "/calendario", color: "secondary" }]}
          >
            <div className="mt-4" />
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Zonas interiores</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            image="/Habitats/terrario.webp"
            title="Terrario tropical"
            description="Camaleones, serpientes y ranas entre rocas, troncos y microclimas húmedos."
            actions={[{ label: "Visitar", href: "/calendario", color: "secondary" }]}
          >
            <div className="mt-4" />
          </Card>

          <Card
            image="/Habitats/acuario.webp"
            title="Acuario de arrecife"
            description="Cardúmenes de peces tropicales y corales en peceras panorámicas."
            actions={[{ label: "Comprar entradas", href: "/pagina4", color: "accent" }]}
          >
            <div className="mt-4" />
          </Card>

          <Card
            image="/Habitats/aviario.webp"
            title="Aviario panorámico"
            description="Pasarela elevada sobre la copa de los árboles para observar aves."
            actions={[{ label: "Horarios", href: "/reloj" }]}
          >
            <div className="mt-4" />
          </Card>
        </div>
      </section>
    </>
  );
}

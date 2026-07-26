import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard } from '@/routes';

export default function Dashboard() {
  const { auth } = usePage().props;

  return (
    <>
      <Head title="Dashboard" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 p-8">
        <section className="flex flex-col justify-between gap-6 rounded-3xl border border-[#A439E620] bg-[#A439E60A] p-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-[#A439E6]">
              Panel de control
            </p>

            <h1 className="text-4xl font-bold">
              ¡Bienvenido de nuevo, {auth.user.name}!
            </h1>

            <p className="mt-3 max-w-2xl text-neutral-500 dark:text-neutral-400">
              Administra tus publicaciones, revisa el rendimiento de tus
              noticias y mantén informada a la comunidad de Matamoros.
            </p>
          </div>

          <Link
            href="#"
            className="purple-btn purple-underline flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold transition"
          >
            + Publicar noticia
          </Link>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
            <p className="text-sm text-neutral-500">Noticias publicadas</p>
            <h2 className="mt-2 text-4xl font-bold">18</h2>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
            <p className="text-sm text-neutral-500">Borradores</p>
            <h2 className="mt-2 text-4xl font-bold">4</h2>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
            <p className="text-sm text-neutral-500">Vistas este mes</p>
            <h2 className="mt-2 text-4xl font-bold">12.4K</h2>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
            <p className="text-sm text-neutral-500">Reacciones</p>
            <h2 className="mt-2 text-4xl font-bold">847</h2>
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-neutral-200 p-6 dark:border-neutral-800">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Publicaciones recientes
              </h2>

              <button className="purple-underline">
                Ver todas
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Nuevo parque comenzará su construcción en agosto',
                  status: 'Publicado',
                },
                {
                  title: 'Suspenden clases por tormenta tropical',
                  status: 'Borrador',
                },
                {
                  title: 'Anuncian feria gastronómica en el centro',
                  status: 'Publicado',
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-neutral-200 p-5 transition hover:border-[#A439E6] hover:bg-[#A439E608] dark:border-neutral-800"
                >
                  <div>
                    <h3 className="font-semibold">{post.title}</h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      Hace {index + 1} días
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-4 py-1 text-sm ${
                      post.status === 'Publicado'
                        ? 'bg-green-500/10 text-green-600'
                        : 'bg-yellow-500/10 text-yellow-600'
                    }`}
                  >
                    {post.status}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-neutral-200 p-6 dark:border-neutral-800">
              <h2 className="mb-4 text-xl font-semibold">
                Acciones rápidas
              </h2>

              <div className="flex flex-col gap-3">
                <button className="purple-btn purple-underline rounded-xl py-3">
                  Nueva noticia
                </button>

                <button className="rounded-xl border border-neutral-300 py-3 transition hover:border-[#A439E6] hover:text-[#A439E6] dark:border-neutral-700">
                  Gestionar categorías
                </button>

                <button className="rounded-xl border border-neutral-300 py-3 transition hover:border-[#A439E6] hover:text-[#A439E6] dark:border-neutral-700">
                  Ver estadísticas
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 p-6 dark:border-neutral-800">
              <h2 className="mb-4 text-xl font-semibold">
                Actividad reciente
              </h2>

              <ul className="space-y-4 text-sm text-neutral-500">
                <li>✓ Se publicó una noticia hace 2 horas.</li>
                <li>📝 Guardaste un borrador ayer.</li>
                <li>👀 Tu noticia más reciente recibió 340 vistas.</li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}

Dashboard.layout = {
  breadcrumbs: [
    {
      title: 'Dashboard',
      href: dashboard(),
    },
  ],
};
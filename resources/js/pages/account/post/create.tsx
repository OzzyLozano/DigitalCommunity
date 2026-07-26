import { Head, router, useForm, usePage } from '@inertiajs/react';
import { Building2, ImagePlus, Link2, Save, Send } from 'lucide-react';

import { dashboard } from '@/routes';
import { store } from '@/routes/post';

type Company = {
  id: number;
  name: string;
};

type Account = {
  id: number;
  name: string;
  lastname: string;
};

type Props = {
  company: Company;
  account: Account;
};

export default function CreatePost({ company, account }: Props) {
  const { auth } = usePage().props;

  const { data, setData } = useForm({
    title: '',
    description: '',
    content: '',
    assets: [] as File[],
    sources: [''],
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('started')

    router.post(store(auth.user.id), data, {
      onSuccess: () => {
        console.log('success')
      },
      onError: () => {
        console.log('error')
      },
      onFinish: () => {
        console.log('finished c:')
      },
    })
  }

  return (
    <>
      <Head title="Nueva publicación" />

      <form className="mx-auto flex max-w-6xl flex-col gap-8 p-8">
        <header className="flex items-center justify-between gap-8 rounded-3xl border border-[#A439E620] p-8">
          <div>
            <h1 className="text-4xl font-bold">
              Nueva publicación
            </h1>

            <div className="mt-3 flex items-center gap-6 text-neutral-500">
              <div className="flex items-center gap-2">
                <Building2 size={18} />
                {company.name}
              </div>

              <div>
                Autor: {account.name} {account.lastname}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              className="rounded-xl border px-5 py-3 transition hover:border-[#A439E6]"
            >
              <Save size={18} className="mr-2 inline" />
              Guardar borrador
            </button>

            <button
              onClick={submit}
              className="rounded-xl bg-[#A439E6] px-5 py-3 font-medium text-white transition hover:bg-violet-700"
            >
              <Send size={18} className="mr-2 inline" />
              Publicar
            </button>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <section className="space-y-6 rounded-3xl border p-8">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Título
              </label>

              <input
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                placeholder="Escribe un título llamativo..."
                className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-[#A439E6]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Resumen
              </label>

              <textarea
                rows={3}
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                placeholder="Describe brevemente la noticia..."
                className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-[#A439E6]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Contenido
              </label>

              <textarea
                rows={18}
                value={data.content}
                onChange={(e) => setData('content', e.target.value)}
                placeholder="Escribe aquí el contenido completo..."
                className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-[#A439E6]"
              />
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border p-6">
              <h2 className="mb-4 text-xl font-bold">
                Imágenes
              </h2>

              <label className="flex h-48 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition hover:border-[#A439E6]">
                <ImagePlus
                  size={40}
                  className="mb-3 text-[#A439E6]"
                />

                <span className="font-medium">
                  Agregar imágenes
                </span>

                <span className="text-sm text-neutral-500">
                  PNG, JPG o WEBP
                </span>

                <input
                  type="file"
                  multiple
                  hidden
                />
              </label>
            </div>

            <div className="rounded-3xl border p-6">
              <h2 className="mb-4 text-xl font-bold">
                Fuentes
              </h2>

              {data.sources.map((source, index) => (
                <input
                  key={index}
                  value={source}
                  onChange={(e) => {
                    const sources = [...data.sources];
                    sources[index] = e.target.value;
                    setData('sources', sources);
                  }}
                  placeholder="https://..."
                  className="mb-3 w-full rounded-xl border px-4 py-3 outline-none transition focus:border-[#A439E6]"
                />
              ))}

              <button
                type="button"
                onClick={() =>
                  setData('sources', [...data.sources, ''])
                }
                className="flex items-center gap-2 text-[#A439E6] hover:underline"
              >
                <Link2 size={18} />
                Agregar fuente
              </button>
            </div>

            <div className="rounded-3xl border p-6">
              <h2 className="mb-4 text-xl font-bold">
                Vista previa
              </h2>

              <div className="rounded-2xl bg-[#A439E608] p-5">
                <p className="mb-2 text-sm font-semibold text-[#A439E6]">
                  Borrador
                </p>

                <h3 className="text-xl font-bold">
                  {data.title || 'Sin título'}
                </h3>

                <p className="mt-3 text-sm text-neutral-600">
                  {data.description || 'Sin descripción'}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </form>
    </>
  );
}

CreatePost.layout = {
  breadcrumbs: [
    {
      title: 'Dashboard',
      href: dashboard(),
    },
    {
      title: 'Nueva publicación',
    },
  ],
};

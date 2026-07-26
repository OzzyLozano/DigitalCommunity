import { Head, Link, usePage } from '@inertiajs/react';
import { Building2, Globe, Mail, MapPin, Newspaper, Phone, Users } from 'lucide-react';

import { dashboard } from '@/routes';
import { create } from '@/routes/post';

type Role = {
  id: number;
  type: string;
};

type Account = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  role: Role;
};

type Post = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

type Company = {
  id: number;
  name: string;
  description: string;
  address: string;
  email: string;
  phone: string;
  // website: string;

  accounts: Account[];
  posts: Post[];
};

type Props = {
  company: Company;
};

export default function Company({ company }: Props) {
  const { auth } = usePage().props;

  return (
    <>
      <Head title={company.name} />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8">
        <section className="overflow-hidden rounded-3xl border border-[#A439E620]">
          <div className="h-40 bg-gradient-to-r from-[#A439E6] to-violet-700" />
          <div className="relative px-8 pb-8">
            <div className="absolute -top-14 flex h-28 w-28 items-center justify-center rounded-3xl border-4 border-white bg-[#A439E6] text-4xl font-bold text-white shadow-lg">
              {company.name}
            </div>
            <div className="flex flex-col gap-6 pt-20 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h1 className="text-4xl font-bold">
                  {company.name}
                </h1>
                {company.description && (
                  <p className="mt-4 max-w-3xl">
                    {company.description}
                  </p>
                )}
              </div>
              <button className="rounded-xl bg-[#A439E6] px-6 py-3 font-medium text-white transition hover:bg-violet-700">
                Editar información
              </button>
            </div>
          </div>
        </section>
        <section className="grid gap-5 md:grid-cols-3">
          <StatCard
            icon={<Newspaper size={26} />}
            title="Noticias"
            value={company.posts.length}
          />
          <StatCard
            icon={<Users size={26} />}
            title="Miembros"
            value={company.accounts.length}
          />
          <StatCard
            icon={<Building2 size={26} />}
            title="Empresa"
            value="Activa"
          />
        </section>
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <section className="rounded-3xl border p-8">
            <h2 className="mb-8 text-2xl font-bold">
              Información
            </h2>
            <div className="space-y-6">
              <Info
                icon={<Building2 size={18} />}
                label="Nombre"
                value={company.name}
              />
              <Info
                icon={<Mail size={18} />}
                label="Correo"
                value={company.email}
              />
              <Info
                icon={<Phone size={18} />}
                label="Teléfono"
                value={company.phone}
              />
              {company.address && (
                <Info
                  icon={<MapPin size={18} />}
                  label="Dirección"
                  value={company.address}
                />
              )}
              {/* {company.website && (
                <Info
                  icon={<Globe size={18} />}
                  label="Sitio web"
                  value={company.website}
                />
              )} */}
            </div>
          </section>
          <aside className="rounded-3xl border py-8 px-4">
            <h2 className="mb-6 text-2xl font-bold">
              Miembros
            </h2>
            <div className="space-y-4">
              {company.accounts.map((member) => (
                <div
                  key={member.id}
                  className="rounded-2xl border p-4 transition hover:border-[#A439E6]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">
                        {member.name} {member.lastname}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {member.email}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#A439E610] px-3 py-1 text-sm text-[#A439E6]">
                      {member.role.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
        <section className="rounded-3xl border p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Últimas noticias
            </h2>
            <Link href={create(auth.user.id)} className="rounded-lg bg-[#A439E6] px-5 py-2 text-white transition hover:bg-violet-700">
              Nueva publicación
            </Link>
          </div>
          {company.posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed py-16 text-center text-neutral-500">
              Esta empresa aún no ha publicado noticias.
            </div>
          ) : (
            <div className="space-y-4">
              {company.posts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl border p-5 transition hover:border-[#A439E6]"
                >
                  <h3 className="text-lg font-semibold">
                    {post.title}
                  </h3>
                  <p className="mt-2">
                    {post.description}
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">
                    Publicado el{' '}
                    {new Date(post.created_at).toLocaleDateString()}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-3xl border p-6 transition hover:border-[#A439E6]">
      <div className="mb-4 text-[#A439E6]">
        {icon}
      </div>
      <p className="text-sm text-neutral-500">
        {title}
      </p>
      <h3 className="mt-2 text-3xl font-bold">
        {value}
      </h3>
    </div>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 text-[#A439E6]">
        {icon}
      </div>
      <div>
        <p className="text-sm text-neutral-500">
          {label}
        </p>
        <p className="font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}

Company.layout = {
  breadcrumbs: [
    {
      title: 'Dashboard',
      href: dashboard(),
    },
    {
      title: 'Mi Empresa',
    },
  ],
};

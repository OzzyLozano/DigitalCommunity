import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, home, login } from '@/routes';
import '@/css/welcome.css'
import LogoIcon from '@/components/mine/icons/logo';
import { useState } from 'react';

import { articles, categories } from '@/components/mine/mock-news';

export default function Welcome() {
  const { auth } = usePage().props;
  const [newsFilter, setNewsFilter] = useState<string>('all')
  const newsTypes: Record<string, string> = {
    all: 'Todo',
    politics: 'Política',
    community: 'Comunidad',
    events: 'Eventos',
    education: 'Educación',
    transit: 'Tráfico',
    weather: 'Clima',
    food: 'Comida',
  }

  const visible = newsFilter === 'all' ? articles : articles.filter((a) => a.category === newsFilter);

  return (
    <>
      <Head title="Welcome" />
      <main className="flex min-h-screen flex-col items-center bg-[#FDFDFC] px-6 text-[#fff] lg:justify-center lg:px-8 dark:bg-[#0a0a0a]">
        <header className="bg-[#0a0a0aa0] glass fixed top-0 w-full flex justify-evenly items-center px-4 h-[4.5rem]">
          <nav className='flex items-end gap-6'>
            <Link href={home()} className='flex items-end gap-2 text-xl'>
              <LogoIcon />
              <p className="purple-underline">
                Noticias Locales
              </p>
            </Link>
            <a href="#inicio" className='purple-underline'>Inicio</a>
            <a href="#noticias" className='purple-underline'>Noticias</a>
          </nav>
          <nav className="flex items-center justify-end gap-4">
            {auth.user ? (
              <Link
                href={dashboard()}
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href={login()}
                  className="px-4 py-2 hover:text-[#A439E6] transition hover:bg-[#0a0a0a0a] dark:hover:bg-[#fdfdfc0a]"
                >
                  Log in
                </Link>
              </>
            )}
          </nav>
        </header>

        <section id='inicio' className="welcome">
          <h1 className='title text-center'>
            Noticias locales<br />
            a <span className='purple'>tu alcance.</span>
          </h1>
          <p className='text-2xl'>
            Encuentra las últimas <span className='purple'>noticias y eventos</span> de todo tipo sucediendo en <span className='purple'>tu localidad.</span>
          </p>
          <div className="flex items-center gap-8">
            <a href="#noticias" className='purple-underline mt-1'>Ver noticias &#9; &darr;</a>
            <Link href={login()} className='purple-btn purple-underline'>Inicia Sesión</Link>
          </div>
        </section>

        <section id='noticias' className="news lg:px-8">
          <h2 className="title">Actualmente, en Matamoros...</h2>
          <ul className="flex gap-2 m-0 p-0">
            {Object.entries(newsTypes).map(([key, label], index) => {
              const selected: boolean = newsFilter === key
              const classes = 'purple-underline px-4 pt-2 pb-1 rounded-full hover:cursor-pointer'
              const selectedClasses = 'bg-[#A439E6] text-[#fff] pointer-events-none'
              return (
                <li key={index}>
                  <button className={`${classes} ${selected ? selectedClasses : ''}`} onClick={() => setNewsFilter(key)}>
                    {label}
                  </button>
                </li>
              )
            })}
          </ul>

          <div className={`grid`}>
            {visible.map((article) => (
              <article className={`flex flex-col gap-2 glass bg-[#A439E60f] px-8 py-4`}>
                <span className={`text-[#A439E6] capitalize font-semibold`}>{article.category}</span>
                <h3 className={`text-xl font-bold`}>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className={`flex justify-end`}>
                  <span>{article.author}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

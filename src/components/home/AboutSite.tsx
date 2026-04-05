import React from 'react';

const concepts = [
  {
    icon: '⚡',
    title: 'Скорость',
    desc: 'Загрузка страниц менее 1 секунды',
  },
  {
    icon: '🛡',
    title: 'Надежность',
    desc: 'Статичный сайт, минимальные требования',
  },
  {
    icon: '✦',
    title: 'Минимализм',
    desc: 'Без лишних скриптов и рекламы',
  },
  {
    icon: '📄',
    title: 'Markdown',
    desc: 'Записи в формате .md и .mdx',
  },
  {
    icon: '🗄',
    title: 'База данных',
    desc: 'Не использовать, пока мало данных',
  },
  {
    icon: '📱',
    title: 'Адаптивность',
    desc: 'Подстройка под любые устройства',
  },
];

export default function AboutSite() {
  return (
    <section className="relative py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Концепция сайта</h2>
          <p className="text-gray-500 text-lg">Основные технические принципы</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {concepts.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="text-cyan-400 font-semibold mb-1.5 text-lg">
                {item.title}
              </h4>
              <p className="text-gray-500 text-base m-0 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

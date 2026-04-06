import React from 'react';
import Link from '@docusaurus/Link';
import {
  SiDocker,
  SiLinux,
  SiPython,
  SiKubernetes,
  SiGooglehome,
} from '@icons-pack/react-simple-icons';
import Icon from '@mdi/react';
import { mdiAccessPointNetwork, mdiInfinity } from '@mdi/js';

const topics = [
  {
    name: 'Linux',
    icon: <SiLinux size={32} />,
    to: '/blog/tags/linux',
    color: 'from-amber-400/20 to-amber-400/5',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-400/40',
    desc: 'Команды, настройка, администрирование',
  },
  {
    name: 'Python',
    icon: <SiPython size={32} />,
    to: '/blog/tags/python',
    color: 'from-blue-400/20 to-blue-400/5',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-400/40',
    desc: 'Скрипты, автоматизация',
  },
  {
    name: 'DevOps',
    icon: <Icon path={mdiInfinity} size="32px" />,
    to: '/blog/tags/devops',
    color: 'from-green-400/20 to-green-400/5',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-400/40',
    desc: 'CI/CD, автоматизация, инфраструктура',
  },
  {
    name: 'Kubernetes',
    icon: <SiKubernetes size={32} />,
    to: '/blog/tags/kubernetes',
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-500',
    borderHover: 'hover:border-blue-500/40',
    desc: 'Оркестрация',
  },
  {
    name: 'Docker',
    icon: <SiDocker size={32} />,
    to: '/blog/tags/docker',
    color: 'from-sky-400/20 to-sky-400/5',
    iconColor: 'text-sky-400',
    borderHover: 'hover:border-sky-400/40',
    desc: 'Контейнеризация, образы, compose',
  },
  {
    name: 'Homelab',
    icon: <SiGooglehome size={32} />,
    to: '/blog/tags/homelab',
    color: 'from-purple-400/20 to-purple-400/5',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-400/40',
    desc: 'Домашняя лаборатория, серверы',
  },
  {
    name: 'Networks',
    icon: <Icon path={mdiAccessPointNetwork} size="32px" />,
    to: '/blog/tags/networks',
    color: 'from-rose-400/20 to-rose-400/5',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-400/40',
    desc: 'Сети, маршрутизация, протоколы',
  },
];

export default function TopicsSection() {
  return (
    <section className="relative py-24 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] to-[#0f0f0f] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Основные темы</h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Записи в блоге по тегам
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.name}
              to={topic.to}
              className={`group relative flex items-center gap-4 p-5 rounded-xl
                bg-white/[0.02] border border-white/[0.06]
                ${topic.borderHover} hover:bg-white/[0.04]
                transition-all duration-300
                no-underline text-gray-300 hover:text-white hover:no-underline`}
            >
              <div
                className={`shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center ${topic.iconColor} transition-transform duration-300 group-hover:scale-110`}
              >
                {topic.icon}
              </div>
              <div>
                <span className="block font-semibold text-base">{topic.name}</span>
                <span className="block text-sm text-gray-500 mt-0.5">{topic.desc}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-7 py-3
              border border-white/10 hover:border-cyan-500/40
              text-gray-400 hover:text-cyan-400
              rounded-xl text-sm font-medium transition-all duration-300
              no-underline hover:no-underline hover:bg-cyan-500/[0.05]"
          >
            Все записи блога →
          </Link>
        </div>
      </div>
    </section>
  );
}

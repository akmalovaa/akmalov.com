import React from 'react';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';
import {
  SiDocker,
  SiLinux,
  SiPython,
  SiKubernetes,
  SiGooglehome,
} from '@icons-pack/react-simple-icons';
import Icon from '@mdi/react';
import { mdiAccessPointNetwork, mdiInfinity, mdiMonitorDashboard } from '@mdi/js';

const topics = [
  {
    name: 'Linux',
    tag: 'linux',
    icon: <SiLinux size={32} />,
    color: 'from-amber-400/20 to-amber-400/5',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-400/40',
    desc: 'Команды, настройка, администрирование',
  },
  {
    name: 'Python',
    tag: 'python',
    icon: <SiPython size={32} />,
    color: 'from-blue-400/20 to-blue-400/5',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-400/40',
    desc: 'Скрипты, автоматизация',
  },
  {
    name: 'DevOps',
    tag: 'devops',
    icon: <Icon path={mdiInfinity} size="32px" />,
    color: 'from-green-400/20 to-green-400/5',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-400/40',
    desc: 'CI/CD, автоматизация, инфраструктура',
  },
  {
    name: 'Kubernetes',
    tag: 'kubernetes',
    icon: <SiKubernetes size={32} />,
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-500',
    borderHover: 'hover:border-blue-500/40',
    desc: 'Оркестрация',
  },
  {
    name: 'Docker',
    tag: 'docker',
    icon: <SiDocker size={32} />,
    color: 'from-sky-400/20 to-sky-400/5',
    iconColor: 'text-sky-400',
    borderHover: 'hover:border-sky-400/40',
    desc: 'Контейнеризация, образы, compose',
  },
  {
    name: 'Homelab',
    tag: 'homelab',
    icon: <SiGooglehome size={32} />,
    color: 'from-purple-400/20 to-purple-400/5',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-400/40',
    desc: 'Домашняя лаборатория, серверы',
  },
  {
    name: 'Networks',
    tag: 'networks',
    icon: <Icon path={mdiAccessPointNetwork} size="32px" />,
    color: 'from-rose-400/20 to-rose-400/5',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-400/40',
    desc: 'Сети, маршрутизация, протоколы',
  },
  {
    name: 'Monitoring',
    tag: 'monitoring',
    icon: <Icon path={mdiMonitorDashboard} size="32px" />,
    color: 'from-teal-400/20 to-teal-400/5',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-400/40',
    desc: 'Метрики, алерты, дашборды',
  },
];

type BlogData = {
  tagCounts: Record<string, number>;
};

export default function TopicsSection() {
  const { tagCounts } = usePluginData('blog-data') as BlogData;

  return (
    <section className="relative py-24 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] to-[#0f0f0f] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Основные темы</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Записи в блоге по тегам
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topics.map((topic) => {
            const count = tagCounts?.[topic.tag] ?? 0;
            return (
              <Link
                key={topic.name}
                to={`/blog/tags/${topic.tag}`}
                className={`group relative flex items-center gap-4 p-5 rounded-xl
                  bg-white/[0.02] border border-white/10
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
                  <span className="block text-sm text-gray-400 mt-0.5">{topic.desc}</span>
                </div>
                {count > 0 && (
                  <span className="ml-auto self-start shrink-0 text-xs tabular-nums text-gray-400">
                    {count}
                    <span className="sr-only"> записей</span>
                  </span>
                )}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

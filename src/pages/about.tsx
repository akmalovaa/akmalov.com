import React from 'react';
import Layout from '@theme/Layout';
import Icon from '@mdi/react';
import { mdiCertificate } from '@mdi/js';
import {
  SiAnsible,
  SiTerraform,
  SiPulumi,
  SiKubernetes,
  SiDocker,
  SiPrometheus,
  SiGrafana,
  SiPostgresql,
  SiProxmox,
  SiPython,
  SiGitlab,
  SiTelegram,
  SiGithub,
} from '@icons-pack/react-simple-icons';

const skills = [
  {
    category: 'Конфигурации',
    items: [
      { name: 'Ansible', icon: <SiAnsible size={14} /> },
      { name: 'Terraform', icon: <SiTerraform size={14} /> },
      { name: 'Pulumi', icon: <SiPulumi size={14} /> },
    ],
  },
  {
    category: 'Оркестрация',
    items: [
      { name: 'Kubernetes', icon: <SiKubernetes size={14} /> },
      { name: 'Docker', icon: <SiDocker size={14} /> },
    ],
  },
  {
    category: 'Мониторинг',
    items: [
      { name: 'Prometheus', icon: <SiPrometheus size={14} /> },
      { name: 'Grafana', icon: <SiGrafana size={14} /> },
      { name: 'Loki' },
      { name: 'OpenTelemetry' },
    ],
  },
  {
    category: 'Базы данных',
    items: [{ name: 'PostgreSQL', icon: <SiPostgresql size={14} /> }],
  },
  {
    category: 'Виртуализация',
    items: [{ name: 'Proxmox', icon: <SiProxmox size={14} /> }],
  },
  {
    category: 'Облака',
    items: [{ name: 'Yandex.Cloud' }, { name: 'Timeweb' }],
  },
  {
    category: 'Языки',
    items: [{ name: 'Python', icon: <SiPython size={14} /> }],
  },
  {
    category: 'CI/CD',
    items: [{ name: 'GitLab', icon: <SiGitlab size={14} /> }],
  },
];

const certs = [
  { name: 'MTCNA', desc: 'MikroTik Certified Network Associate', href: '/certs/MTCNA.pdf' },
  { name: 'MTCRE', desc: 'Certified Routing Engineer', href: '/certs/MTCRE.pdf' },
  { name: 'MTCTCE', desc: 'Certified Traffic Control Engineer', href: '/certs/MTCTCE.pdf' },
  { name: 'MTCSE', desc: 'Certified Security Engineer', href: '/certs/MTCSE.pdf' },
  { name: 'MTCSWE', desc: 'Certified Switching Engineer', href: '/certs/MTCSWE.pdf' },
  { name: 'Cisco', desc: 'Routing', href: '/certs/cisco.pdf' },
];

const contacts = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/akmalov-artur/', icon: <span className="text-lg font-bold leading-none">in</span>, bg: 'bg-blue-600 hover:bg-blue-500' },
{ name: 'Telegram', href: 'https://t.me/AAkmalov', icon: <SiTelegram size={18} />, bg: 'bg-sky-500 hover:bg-sky-400' },
  { name: 'GitHub', href: 'https://github.com/akmalovaa', icon: <SiGithub size={18} />, bg: 'bg-gray-700 hover:bg-gray-600' },
];

export default function About(): JSX.Element {
  return (
    <Layout title="About">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Profile */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="shrink-0">
            <img
              src="/img/avatar.jpg"
              alt="Акмалов Артур"
              className="w-48 h-48 rounded-2xl object-cover border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/10"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">Акмалов Артур</h1>
            <p className="text-lg text-cyan-400 font-medium mb-4">
              Инженер по разработке и сопровождению сервисов
            </p>
            <p className="text-gray-400 leading-relaxed text-base mb-4">
              Люблю автоматизировать, разбираться в деталях и находить простые решения для сложных задач.
              Работаю с DevOps-инструментами, пишу на Python, увлекаюсь AI и слежу за тем, как он меняет подход к разработке и эксплуатации.
            </p>
            <p className="text-gray-400 leading-relaxed text-base mb-4">
              Своя серверная дома (homelab) — для изучения OpenSource проектов и экспериментов.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Стараюсь писать инструкции, полезные заметки, интересные статьи у себя на сайте и сторонних ресурсах.
            </p>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Ключевые области</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
              >
                <h3 className="text-cyan-400 font-semibold text-base mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-white/[0.06] text-gray-300 hover:bg-white/[0.10] transition-colors"
                    >
                      {item.icon && <span className="opacity-70">{item.icon}</span>}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">GitHub</h2>
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/akmalovaa" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://github.akmalov.com/api?username=akmalovaa&theme=tokyonight&count_private=true&show_icons=true"
                  alt="GitHub stats"
                  className="rounded-lg"
                />
              </a>
              <a href="https://github.com/akmalovaa" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://github.akmalov.com/api/top-langs/?theme=tokyonight&count_private=true&show_icons=true&layout=compact"
                  alt="Top languages"
                  className="rounded-lg"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Сертификаты</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((cert) => (
              <a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]
                  hover:border-cyan-500/40 hover:bg-cyan-500/[0.03] transition-all duration-300 no-underline"
              >
                <Icon path={mdiCertificate} size="24px" className="text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-cyan-400 font-bold text-base group-hover:text-cyan-300 transition-colors">
                    {cert.name}
                  </span>
                  <p className="text-gray-500 text-sm mt-1 mb-0">{cert.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contacts */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Контакты</h2>
          <div className="flex flex-wrap gap-4">
            {contacts.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-white font-medium text-base
                  transition-all duration-300 no-underline hover:no-underline hover:text-white shadow-lg hover:scale-105 ${c.bg}`}
              >
                {c.icon}
                {c.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

import { Briefcase, GraduationCap, BookOpen, ExternalLink, Calendar, Building, Award, Rocket } from 'lucide-react';

export default function Sections() {
  return (
    <main className="relative -mt-10 md:-mt-16">
      <About />
      <Experience />
      <Education />
      <Publications />
      <Projects />
    </main>
  );
}

function SectionShell({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <p className="text-teal-700/80 font-medium tracking-wide uppercase text-xs">{eyebrow}</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">{title}</h2>
        <div className="mt-6 md:mt-8">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <SectionShell id="about" eyebrow="About" title="Healthcare leadership with academic rigor and community impact">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 text-slate-700 leading-relaxed">
          <p>
            Dr. Fatuma Ayan Aden is a medical doctor and public health leader committed to advancing equitable healthcare systems, strengthening community-based interventions, and mentoring the next generation of health professionals.
          </p>
          <p className="mt-4">
            Her work bridges clinical practice, health policy, and academic research, with a focus on maternal and child health, preventive medicine, and health systems strengthening in underserved communities.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
          <h3 className="font-semibold text-slate-900">Core Focus Areas</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Public health leadership & policy</li>
            <li>• Community health programs</li>
            <li>• Academic teaching & mentorship</li>
            <li>• Research and evidence-based practice</li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

function Experience() {
  const items = [
    {
      title: 'Clinical Lead, Primary Healthcare',
      org: 'Regional Health Services',
      duration: '2021 — Present',
      impact: 'Led multi-disciplinary teams delivering integrated primary care and preventive services across urban and rural clinics.'
    },
    {
      title: 'Lecturer, Public Health',
      org: 'School of Medicine & Health Sciences',
      duration: '2019 — Present',
      impact: 'Designed and delivered curricula on epidemiology, research methods, and community health; supervised undergraduate research.'
    },
    {
      title: 'Program Coordinator, Maternal & Child Health',
      org: 'Nonprofit Health Initiative',
      duration: '2017 — 2019',
      impact: 'Coordinated outreach programs, increasing antenatal coverage and immunization rates through community partnerships.'
    }
  ];

  return (
    <SectionShell id="experience" eyebrow="Experience" title="Professional experience and leadership roles">
      <ol className="relative border-l border-slate-200 ml-3">
        {items.map((item, idx) => (
          <li key={idx} className="ml-6 mb-8">
            <span className="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-white shadow">
              <Briefcase className="h-4 w-4" />
            </span>
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <span className="text-slate-400">•</span>
                <div className="flex items-center gap-1 text-slate-700 text-sm"><Building className="h-4 w-4" />{item.org}</div>
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                <Calendar className="h-4 w-4" /> {item.duration}
              </div>
              <p className="mt-3 text-slate-700 text-sm leading-relaxed">{item.impact}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

function Education() {
  const items = [
    { degree: 'Master of Public Health (MPH)', inst: 'University of Global Health', note: 'Health Policy & Management' },
    { degree: 'Doctor of Medicine (MD)', inst: 'College of Medicine', note: 'Honors in Community Health' },
    { degree: 'Certificates', inst: 'Global Training Programs', note: 'Epidemiology, Monitoring & Evaluation, Leadership' }
  ];

  return (
    <SectionShell id="education" eyebrow="Education & Certifications" title="Academic background and professional training">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-teal-700">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-medium">{it.inst}</span>
            </div>
            <h3 className="mt-2 font-semibold text-slate-900">{it.degree}</h3>
            <p className="mt-1 text-sm text-slate-700">{it.note}</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-slate-500">
              <Award className="h-4 w-4" /> Recognitions: Excellence in Teaching & Community Service
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Publications() {
  const pubs = [
    {
      title: 'Strengthening Primary Care for Maternal and Child Health',
      venue: 'Journal of Public Health Practice',
      year: '2023',
      link: '#'
    },
    {
      title: 'Community-based Approaches to Vaccination Uptake',
      venue: 'Global Health Reports',
      year: '2022',
      link: '#'
    },
    {
      title: 'Health Systems Resilience in Low-resource Settings',
      venue: 'International Health Policy Review',
      year: '2021',
      link: '#'
    }
  ];

  return (
    <SectionShell id="publications" eyebrow="Publications & Research" title="Selected publications and research contributions">
      <div className="space-y-4">
        {pubs.map((p, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-slate-900 font-medium">
                <BookOpen className="h-4 w-4 text-teal-700" />
                {p.title}
              </div>
              <p className="text-sm text-slate-600 mt-1">{p.venue} • {p.year}</p>
            </div>
            <div className="flex items-center gap-3">
              <a href={p.link} className="inline-flex items-center gap-1 text-sm text-teal-700 hover:underline">
                View <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href="#" className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm hover:border-teal-300">
          Google Scholar <ExternalLink className="h-4 w-4" />
        </a>
        <a href="#" className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-4 py-2 text-sm text-white shadow hover:bg-teal-700">
          Download CV
        </a>
      </div>
    </SectionShell>
  );
}

function Projects() {
  const projects = [
    {
      name: 'Community Health Outreach Program',
      desc: 'Designed and led outreach clinics delivering preventive screenings, health education, and referrals in underserved areas.',
    },
    {
      name: 'Maternal Wellness Initiative',
      desc: 'Implemented evidence-based antenatal care packages that improved adherence and outcomes for expecting mothers.',
    },
    {
      name: 'Youth Health Ambassadors',
      desc: 'Mentored student volunteers to promote mental health, hygiene, and vaccination awareness in schools.',
    },
  ];

  return (
    <SectionShell id="projects" eyebrow="Projects & Initiatives" title="Selected programs and leadership initiatives">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-teal-700">
              <Rocket className="h-5 w-5" />
              <span className="text-sm font-medium">Health Impact</span>
            </div>
            <h3 className="mt-2 font-semibold text-slate-900">{proj.name}</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">{proj.desc}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

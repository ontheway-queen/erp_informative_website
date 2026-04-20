import Image from 'next/image';
import DemoRequest from './DemoRequest';
import HeaderScrollState from './HeaderScrollState';
import LanguageToggle from './LanguageToggle';
import PricingPlans from './PricingPlans';

const modules = [
  {
    title: 'Finance | ফাইন্যান্স',
    text: 'General ledger, receivables, budgeting, tax, and cash flow stay connected. | হিসাব, বাজেট, ট্যাক্স ও ক্যাশ ফ্লো এক জায়গা থেকে দেখা যায়।',
  },
  {
    title: 'Inventory | ইনভেন্টরি',
    text: 'Stock, purchase orders, warehouses, batches, and reorder rules become visible. | স্টক, অর্ডার, গুদাম ও রি-অর্ডার সহজে ট্র্যাক করা যায়।',
  },
  {
    title: 'Sales & CRM | সেলস ও সিআরএম',
    text: 'Leads, quotes, orders, customers, and service move through one pipeline. | লিড, কোটেশন, অর্ডার ও কাস্টমার সার্ভিস এক ফ্লোতে চলে।',
  },
  {
    title: 'HR & Payroll | এইচআর ও পেরোল',
    text: 'Employee records, attendance, leave, payroll, and performance become easier. | কর্মী তথ্য, হাজিরা, ছুটি ও বেতন ব্যবস্থাপনা সহজ হয়।',
  },
  {
    title: 'Manufacturing | ম্যানুফ্যাকচারিং',
    text: 'BOM, production planning, work orders, costing, and quality checks stay aligned. | উৎপাদন পরিকল্পনা, কস্টিং ও কোয়ালিটি কন্ট্রোল যুক্ত থাকে।',
  },
  {
    title: 'Supply Chain | সাপ্লাই চেইন',
    text: 'Procurement, vendors, logistics, demand, and deliveries become measurable. | ক্রয়, ভেন্ডর, ডেলিভারি ও লজিস্টিকস সমন্বিত হয়।',
  },
];

const benefits = [
  'One source of truth for business data | ব্যবসার সব ডেটার একটি নির্ভরযোগ্য উৎস',
  'Less duplicate entry and fewer manual errors | ডুপ্লিকেট এন্ট্রি ও ভুল কমে যায়',
  'Faster month-end closing and reporting | রিপোর্টিং ও মাস শেষে হিসাব দ্রুত হয়',
  'Clear inventory, order, and production visibility | স্টক, অর্ডার ও উৎপাদন পরিষ্কার দেখা যায়',
  'Better compliance, audit trails, and approvals | অনুমোদন, অডিট ও কমপ্লায়েন্স শক্তিশালী হয়',
  'Scalable processes as the company grows | ব্যবসা বড় হলে প্রসেসও সহজে স্কেল করে',
];

const steps = [
  'Map current process and pain points | বর্তমান প্রসেস ও সমস্যা ম্যাপ করুন',
  'Define modules, users, reports, and integrations | মডিউল, ইউজার, রিপোর্ট ও ইন্টিগ্রেশন ঠিক করুন',
  'Clean and migrate master data | ডেটা পরিষ্কার করে মাইগ্রেট করুন',
  'Configure workflows, permissions, and approvals | ওয়ার্কফ্লো, পারমিশন ও অনুমোদন সেট করুন',
  'Train teams with real scenarios | বাস্তব কাজ দিয়ে টিমকে ট্রেনিং দিন',
  'Go live in phases and improve continuously | ধাপে ধাপে লাইভ করে নিয়মিত উন্নতি করুন',
];

const kpis = [
  { value: '30-50%', label: 'manual work reduction target | ম্যানুয়াল কাজ কমানোর লক্ষ্য' },
  { value: '24/7', label: 'shared data access | সব সময় ডেটা অ্যাক্সেস' },
  { value: '1 view', label: 'finance, stock, sales, delivery | এক ভিউতে সব অপারেশন' },
  { value: 'Weeks', label: 'saved through automated reports | রিপোর্ট অটোমেশনে সময় বাঁচে' },
];

const industries = [
  {
    title: 'Retail & Ecommerce | রিটেইল ও ই-কমার্স',
    text: 'Unify POS, online orders, stock, returns, customer data, and finance. | POS, অনলাইন অর্ডার, স্টক, রিটার্ন, কাস্টমার ডেটা ও ফাইন্যান্স একসাথে করুন।',
  },
  {
    title: 'Manufacturing | ম্যানুফ্যাকচারিং',
    text: 'Control production plans, raw materials, machine usage, quality, and costing. | উৎপাদন পরিকল্পনা, কাঁচামাল, মেশিন ব্যবহার, কোয়ালিটি ও কস্টিং নিয়ন্ত্রণ করুন।',
  },
  {
    title: 'Distribution | ডিস্ট্রিবিউশন',
    text: 'Track warehouses, delivery routes, purchase cycles, sales teams, and collections. | গুদাম, ডেলিভারি রুট, ক্রয় চক্র, সেলস টিম ও কালেকশন ট্র্যাক করুন।',
  },
  {
    title: 'Service Business | সার্ভিস বিজনেস',
    text: 'Manage projects, support tickets, billing, resources, contracts, and customer history. | প্রজেক্ট, সাপোর্ট টিকেট, বিলিং, রিসোর্স, কন্ট্রাক্ট ও কাস্টমার হিস্ট্রি ম্যানেজ করুন।',
  },
];

const comparisons = [
  {
    before: 'Manual spreadsheet updates | ম্যানুয়াল স্প্রেডশিট আপডেট',
    after: 'Live dashboards and automated reports | লাইভ ড্যাশবোর্ড ও অটোমেটেড রিপোর্ট',
  },
  {
    before: 'Separate finance, sales, and stock data | ফাইন্যান্স, সেলস ও স্টক আলাদা ডেটা',
    after: 'One connected operational database | একটি কানেক্টেড অপারেশনাল ডেটাবেস',
  },
  {
    before: 'Slow approvals and unclear responsibility | ধীর অনুমোদন ও অস্পষ্ট দায়িত্ব',
    after: 'Workflow rules with audit trails | অডিট ট্রেইলসহ ওয়ার্কফ্লো রুল',
  },
  {
    before: 'Decisions based on old information | পুরোনো তথ্যের ওপর সিদ্ধান্ত',
    after: 'Real-time visibility for managers | ম্যানেজারদের জন্য রিয়েল-টাইম ভিজিবিলিটি',
  },
];

const faqs = [
  {
    question: 'Who needs ERP? | কার ERP দরকার?',
    answer: 'Any growing company that manages orders, inventory, people, finance, approvals, or multiple branches can benefit from ERP. | যে ব্যবসায় অর্ডার, স্টক, কর্মী, হিসাব, অনুমোদন বা একাধিক ব্রাঞ্চ আছে, তাদের ERP দরকার হতে পারে।',
  },
  {
    question: 'Is ERP only for large companies? | ERP কি শুধু বড় কোম্পানির জন্য?',
    answer: 'No. Small and medium businesses can start with core modules and scale gradually. | না। ছোট ও মাঝারি ব্যবসা প্রয়োজনীয় মডিউল দিয়ে শুরু করে ধীরে ধীরে স্কেল করতে পারে।',
  },
  {
    question: 'How long does implementation take? | ইমপ্লিমেন্টেশন কতদিন লাগে?',
    answer: 'It depends on modules, data quality, integrations, and training scope. A phased rollout is usually safer. | মডিউল, ডেটা, ইন্টিগ্রেশন ও ট্রেনিংয়ের ওপর সময় নির্ভর করে। ধাপে ধাপে লাইভ করা সাধারণত নিরাপদ।',
  },
  {
    question: 'What should be prepared before ERP? | ERP শুরুর আগে কী প্রস্তুতি দরকার?',
    answer: 'Document processes, clean master data, define approval rules, and assign owners for each department. | প্রসেস ডকুমেন্ট, মাস্টার ডেটা পরিষ্কার, অনুমোদন রুল এবং প্রতিটি বিভাগের দায়িত্বশীল ব্যক্তি ঠিক করুন।',
  },
];

function LangText({ en, bn }: { en: string; bn: string }) {
  return (
    <>
      <span className='lang-en'>{en}</span>
      <span className='lang-bn'>{bn}</span>
    </>
  );
}

function PipeText({ text }: { text: string }) {
  const [en, bn = en] = text.split(' | ');

  return <LangText en={en} bn={bn} />;
}

export default function Home() {
  return (
    <main>
      <HeaderScrollState />
      <a
        className='floatingDemoButton'
        href='#demo'
        aria-label='Go to request a demo form'
      >
        <LangText en='Request Demo' bn='ডেমো চাই' />
      </a>

      <header className='hero' id='top'>
        <nav className='nav' aria-label='Main navigation'>
          <a className='brand' href='#top'>
            <Image
              src='/erp_logo.png'
              alt='ERP Compass logo'
              width={240}
              height={75}
              priority
            />
          </a>
          <input className='navMenuToggle' id='navMenuToggle' type='checkbox' />
          <label className='menuButton' htmlFor='navMenuToggle' aria-label='Toggle navigation menu'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </label>
          <div className='navLinks'>
            <a href='#modules'><LangText en='Modules' bn='মডিউল' /></a>
            <a href='#benefits'><LangText en='Benefits' bn='সুবিধা' /></a>
            <a href='#implementation'><LangText en='Implementation' bn='বাস্তবায়ন' /></a>
            <a href='#selection'><LangText en='Selection' bn='নির্বাচন' /></a>
            <a href='#pricing'><LangText en='Pricing' bn='প্রাইসিং' /></a>
            <a className='navDemoButton' href='#demo'>
              <LangText en='Request Demo' bn='ডেমো চাই' />
            </a>
          </div>
          <LanguageToggle />
        </nav>

        <section className='heroContent'>
          <div className='heroPanel'>
            <div className='heroCopy'>
              <div className='heroChips' aria-label='ERP highlights'>
                <span><LangText en='Real-time data' bn='রিয়েল-টাইম ডেটা' /></span>
                <span><LangText en='Smart workflows' bn='স্মার্ট ওয়ার্কফ্লো' /></span>
                <span><LangText en='Connected teams' bn='কানেক্টেড টিম' /></span>
              </div>
              <p className='eyebrow'>
                <LangText en='Enterprise Resource Planning' bn='ইআরপি সফটওয়্যার' />
              </p>
              <h1>
                <LangText
                  en='Run finance, people, inventory, sales, and operations from one connected system.'
                  bn='ফাইন্যান্স, ইনভেন্টরি, সেলস, এইচআর ও অপারেশন এক স্মার্ট সিস্টেমে চালান।'
                />
              </h1>
              <p className='heroText'>
                <LangText
                  en='ERP gives growing companies a single operational backbone. It replaces scattered spreadsheets and disconnected software with shared data, controlled workflows, and real-time decisions.'
                  bn='ERP ব্যবসার সব ডেটা, অনুমোদন ও রিপোর্টকে এক জায়গায় এনে দ্রুত সিদ্ধান্ত নিতে সাহায্য করে।'
                />
              </p>
              <div className='heroActions'>
                <a className='primaryButton' href='#demo'>
                  <LangText en='Request demo' bn='ডেমো চাই' />
                </a>
                <a className='secondaryButton' href='#selection'>
                  <LangText en='Choose wisely' bn='সঠিকভাবে বাছাই করুন' />
                </a>
                <a className='secondaryButton' href='#modules'>
                  <LangText en='Explore ERP' bn='ERP দেখুন' />
                </a>
              </div>
              <div className='heroStats' aria-label='ERP impact highlights'>
                <strong>360° <small><LangText en='Business View' bn='বিজনেস ভিউ' /></small></strong>
                <strong>12+ <small><LangText en='ERP Modules' bn='ERP মডিউল' /></small></strong>
                <strong>24/7 <small><LangText en='Data Access' bn='ডেটা অ্যাক্সেস' /></small></strong>
              </div>
            </div>

            <div className='heroDashboard' aria-label='ERP dashboard preview'>
              <div className='dashboardTop'>
                <span><LangText en='Live ERP Control' bn='লাইভ ERP কন্ট্রোল' /></span>
                <strong>98%</strong>
              </div>
              <div className='dashboardChart' aria-hidden='true'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className='dashboardList'>
                <div>
                  <span><LangText en='Finance' bn='ফাইন্যান্স' /></span>
                  <p><LangText en='Cash flow synced' bn='ক্যাশ ফ্লো সিঙ্কড' /></p>
                </div>
                <div>
                  <span><LangText en='Inventory' bn='ইনভেন্টরি' /></span>
                  <p><LangText en='Stock alerts ready' bn='স্টক অ্যালার্ট রেডি' /></p>
                </div>
                <div>
                  <span><LangText en='Approval' bn='অনুমোদন' /></span>
                  <p><LangText en='Workflow moving' bn='ওয়ার্কফ্লো চলছে' /></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className='intro sectionBand animatedSection'>
        <div>
          <p className='eyebrow'><LangText en='What ERP Means' bn='ERP কী' /></p>
          <h2>
            <LangText
              en='ERP is the nervous system of a company.'
              bn='ERP হলো একটি প্রতিষ্ঠানের ডিজিটাল নার্ভ সিস্টেম।'
            />
          </h2>
        </div>
        <p>
          <LangText
            en='Every department creates data. ERP connects that data so a sale can update inventory, trigger procurement, affect cash flow, inform production, and appear in management reports without five separate manual updates.'
            bn='প্রতিটি বিভাগের ডেটা ERP একসাথে যুক্ত করে, তাই সেলস, স্টক, ক্রয়, উৎপাদন ও রিপোর্ট একসাথে আপডেট হয়।'
          />
        </p>
      </section>

      <section className='visualSplit animatedSection'>
        <Image
          src='https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80'
          alt='Team reviewing business planning data together'
          width={1400}
          height={930}
        />
        <div className='splitContent'>
          <p className='eyebrow'><LangText en='Why It Matters' bn='কেন দরকার' /></p>
          <h2>
            <LangText
              en='Disconnected tools slow down decisions.'
              bn='আলাদা আলাদা টুল সিদ্ধান্ত নেওয়া ধীর করে।'
            />
          </h2>
          <p>
            <LangText
              en='Without ERP, teams often argue over whose spreadsheet is correct. With ERP, leaders can see orders, costs, stock, receivables, delivery status, and employee activity through the same trusted data model.'
              bn='ERP থাকলে অর্ডার, খরচ, স্টক, পাওনা, ডেলিভারি ও টিম অ্যাক্টিভিটি একই ডেটা থেকে দেখা যায়।'
            />
          </p>
          <div className='proofGrid'>
            {kpis.map((item) => (
              <div className='proofItem' key={item.label}>
                <strong>{item.value}</strong>
                <span><PipeText text={item.label} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='sectionWrap animatedSection' id='modules'>
        <div className='sectionHead'>
          <p className='eyebrow'><LangText en='Core ERP Modules' bn='প্রধান ERP মডিউল' /></p>
          <h2>
            <LangText
              en='Choose modules by business process, not buzzwords.'
              bn='বাজওয়ার্ড নয়, আপনার কাজের প্রসেস অনুযায়ী মডিউল বেছে নিন।'
            />
          </h2>
          <p>
            <LangText
              en='The best ERP setup starts with the work people actually do every day. These modules usually form the foundation.'
              bn='ভালো ERP সেটআপ শুরু হয় আপনার টিম প্রতিদিন যে কাজ করে সেই বাস্তব প্রসেস থেকে।'
            />
          </p>
        </div>
        <div className='moduleGrid'>
          {modules.map((module, index) => (
            <article className='moduleCard' key={module.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3><PipeText text={module.title} /></h3>
              <p><PipeText text={module.text} /></p>
            </article>
          ))}
        </div>
      </section>

      <section className='benefits animatedSection' id='benefits'>
        <div className='benefitImage'>
          <Image
            src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
            alt='Analytics dashboard on a laptop'
            width={1200}
            height={800}
          />
        </div>
        <div className='benefitContent'>
          <p className='eyebrow'><LangText en='Business Benefits' bn='ব্যবসায়িক সুবিধা' /></p>
          <h2>
            <LangText
              en='ERP turns daily activity into usable intelligence.'
              bn='ERP দৈনন্দিন কাজকে ব্যবহারযোগ্য বিজনেস ইনসাইটে বদলে দেয়।'
            />
          </h2>
          <p>
            <LangText
              en='A well-implemented ERP does more than store transactions. It creates accountability, shortens handoffs, and helps teams understand the impact of each decision.'
              bn='ভালোভাবে ইমপ্লিমেন্ট করা ERP শুধু ডেটা রাখে না, দায়িত্ব, গতি ও সিদ্ধান্তের প্রভাবও পরিষ্কার করে।'
            />
          </p>
          <ul className='checkList'>
            {benefits.map((benefit) => (
              <li key={benefit}><PipeText text={benefit} /></li>
            ))}
          </ul>
        </div>
      </section>

      <section className='industryShowcase sectionWrap animatedSection'>
        <div className='sectionHead'>
          <p className='eyebrow'><LangText en='ERP By Industry' bn='ইন্ডাস্ট্রি অনুযায়ী ERP' /></p>
          <h2>
            <LangText
              en='Different businesses need different ERP priorities.'
              bn='ভিন্ন ব্যবসার ERP প্রয়োজনও ভিন্ন হয়।'
            />
          </h2>
          <p>
            <LangText
              en='A strong ERP website should help visitors imagine their own business inside the system.'
              bn='ভালো ERP সাইট ভিজিটরকে নিজের ব্যবসার প্রসেস ERP-র ভেতরে কল্পনা করতে সাহায্য করে।'
            />
          </p>
        </div>
        <div className='industryGrid'>
          {industries.map((industry) => (
            <article className='industryCard' key={industry.title}>
              <h3><PipeText text={industry.title} /></h3>
              <p><PipeText text={industry.text} /></p>
            </article>
          ))}
        </div>
      </section>

      <section className='implementation sectionWrap animatedSection' id='implementation'>
        <div className='sectionHead'>
          <p className='eyebrow'><LangText en='Implementation Roadmap' bn='বাস্তবায়ন পরিকল্পনা' /></p>
          <h2>
            <LangText
              en='A successful ERP launch is a business change project.'
              bn='সফল ERP লঞ্চ আসলে একটি বিজনেস চেঞ্জ প্রজেক্ট।'
            />
          </h2>
          <p>
            <LangText
              en='Software matters, but process ownership, clean data, training, and leadership support usually decide whether the project succeeds.'
              bn='সফটওয়্যার গুরুত্বপূর্ণ, কিন্তু পরিষ্কার ডেটা, ট্রেনিং ও নেতৃত্বের সাপোর্ট সফলতা ঠিক করে।'
            />
          </p>
        </div>
        <div className='timeline'>
          {steps.map((step, index) => (
            <div className='timelineItem' key={step}>
              <span>{index + 1}</span>
              <p><PipeText text={step} /></p>
            </div>
          ))}
        </div>
      </section>

      <section className='comparisonBand animatedSection'>
        <div className='comparisonInner'>
          <div className='sectionHead'>
            <p className='eyebrow'><LangText en='Before vs After ERP' bn='ERP আগে ও পরে' /></p>
            <h2>
              <LangText
                en='ERP replaces scattered work with controlled intelligence.'
                bn='ERP ছড়ানো-ছিটানো কাজকে নিয়ন্ত্রিত ইন্টেলিজেন্সে বদলে দেয়।'
              />
            </h2>
          </div>
          <div className='comparisonGrid'>
            {comparisons.map((item) => (
              <article className='comparisonRow' key={item.before}>
                <div>
                  <strong><LangText en='Before' bn='আগে' /></strong>
                  <p><PipeText text={item.before} /></p>
                </div>
                <span aria-hidden='true'>→</span>
                <div>
                  <strong><LangText en='After ERP' bn='ERP পরে' /></strong>
                  <p><PipeText text={item.after} /></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='operationsPanel animatedSection'>
        <Image
          src='https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1500&q=80'
          alt='Warehouse operations with organized storage aisles'
          width={1500}
          height={1000}
        />
        <div className='operationsText'>
          <p className='eyebrow'><LangText en='ERP In Action' bn='বাস্তবে ERP' /></p>
          <h2>
            <LangText
              en='From customer order to warehouse dispatch, every step stays traceable.'
              bn='কাস্টমার অর্ডার থেকে ডেলিভারি পর্যন্ত প্রতিটি ধাপ ট্র্যাক করা যায়।'
            />
          </h2>
          <p>
            <LangText
              en='Sales confirms demand, inventory reserves stock, procurement fills shortages, finance checks payment, and logistics prepares delivery. ERP makes that chain visible before problems become expensive.'
              bn='সেলস, স্টক, ক্রয়, ফাইন্যান্স ও লজিস্টিকস একসাথে কাজ করে, তাই সমস্যা বড় হওয়ার আগেই দেখা যায়।'
            />
          </p>
        </div>
      </section>

      <section className='intelligenceLayer sectionWrap animatedSection'>
        <div>
          <p className='eyebrow'><LangText en='ERP Intelligence Layer' bn='ERP ইন্টেলিজেন্স লেয়ার' /></p>
          <h2>
            <LangText
              en='Make every department visible through one digital command center.'
              bn='একটি ডিজিটাল কমান্ড সেন্টার থেকে প্রতিটি বিভাগকে দৃশ্যমান করুন।'
            />
          </h2>
          <p>
            <LangText
              en='Dashboards, alerts, approvals, audit trails, and role-based access help leaders understand what is happening before it becomes a problem.'
              bn='ড্যাশবোর্ড, অ্যালার্ট, অনুমোদন, অডিট ট্রেইল ও রোল-বেইজড অ্যাক্সেস সমস্যা বড় হওয়ার আগেই বুঝতে সাহায্য করে।'
            />
          </p>
        </div>
        <div className='commandGrid'>
          <div className='commandHeader'>
            <span><LangText en='Command Center' bn='কমান্ড সেন্টার' /></span>
            <strong>98%</strong>
          </div>
          <div className='commandPulse' aria-hidden='true'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span><LangText en='Live KPIs' bn='লাইভ KPI' /></span>
          <span><LangText en='Approval alerts' bn='অনুমোদন অ্যালার্ট' /></span>
          <span><LangText en='Role access' bn='রোল অ্যাক্সেস' /></span>
          <span><LangText en='Audit trail' bn='অডিট ট্রেইল' /></span>
          <span><LangText en='Forecasting' bn='ফোরকাস্টিং' /></span>
          <span><LangText en='Branch view' bn='ব্রাঞ্চ ভিউ' /></span>
        </div>
      </section>

      <section className='selection sectionWrap animatedSection' id='selection'>
        <div className='sectionHead'>
          <p className='eyebrow'><LangText en='How To Select ERP' bn='ERP নির্বাচন' /></p>
          <h2>
            <LangText
              en='Ask sharper questions before you buy.'
              bn='কেনার আগে সঠিক প্রশ্ন করুন।'
            />
          </h2>
        </div>
        <div className='selectionGrid'>
          <article>
            <h3><LangText en='Fit' bn='উপযোগিতা' /></h3>
            <p>
              <LangText
                en='Does it match your industry, approval rules, tax needs, reporting style, and growth plan?'
                bn='আপনার ইন্ডাস্ট্রি, ট্যাক্স, রিপোর্ট ও গ্রোথ প্ল্যানের সাথে মেলে কি?'
              />
            </p>
          </article>
          <article>
            <h3><LangText en='Usability' bn='ব্যবহার সহজতা' /></h3>
            <p>
              <LangText
                en='Can daily users complete work quickly, or will the system create hidden spreadsheet workarounds?'
                bn='ইউজাররা দ্রুত কাজ করতে পারবে, নাকি আবার স্প্রেডশিটে ফিরে যাবে?'
              />
            </p>
          </article>
          <article>
            <h3><LangText en='Integration' bn='সংযোগ' /></h3>
            <p>
              <LangText
                en='Can it connect with ecommerce, POS, banks, barcode scanners, payroll, BI tools, and customer portals?'
                bn='ই-কমার্স, POS, ব্যাংক, বারকোড, পেরোল ও BI টুলের সাথে যুক্ত হবে কি?'
              />
            </p>
          </article>
          <article>
            <h3><LangText en='Total Cost' bn='মোট খরচ' /></h3>
            <p>
              <LangText
                en='Include licenses, setup, customization, data migration, training, support, hosting, and future changes.'
                bn='লাইসেন্স, সেটআপ, কাস্টমাইজেশন, ডেটা মাইগ্রেশন, ট্রেনিং ও সাপোর্ট ধরুন।'
              />
            </p>
          </article>
        </div>
      </section>

      <PricingPlans />

      <section className='faqSection sectionWrap animatedSection'>
        <div className='sectionHead'>
          <p className='eyebrow'><LangText en='ERP FAQ' bn='ERP প্রশ্নোত্তর' /></p>
          <h2>
            <LangText
              en='Answer the questions buyers already have.'
              bn='ক্রেতাদের সাধারণ প্রশ্নের উত্তর দিন।'
            />
          </h2>
        </div>
        <div className='faqGrid'>
          {faqs.map((faq) => (
            <article className='faqItem' key={faq.question}>
              <h3><PipeText text={faq.question} /></h3>
              <p><PipeText text={faq.answer} /></p>
            </article>
          ))}
        </div>
      </section>

      <DemoRequest />

      <section className='cta animatedSection'>
        <p className='eyebrow'><LangText en='Final Takeaway' bn='শেষ কথা' /></p>
        <h2>
          <LangText
            en='ERP is not just software. It is the operating discipline of the business.'
            bn='ERP শুধু সফটওয়্যার নয়, এটি ব্যবসা চালানোর একটি স্মার্ট ডিসিপ্লিন।'
          />
        </h2>
        <p>
          <LangText
            en='Start with clear processes, clean data, and measurable outcomes. Then choose technology that supports how the company should work tomorrow.'
            bn='পরিষ্কার প্রসেস, ভালো ডেটা ও মাপা যায় এমন ফলাফল দিয়ে শুরু করুন, তারপর প্রযুক্তি নির্বাচন করুন।'
          />
        </p>
        <a className='primaryButton' href='#top'>
          <LangText en='Back to top' bn='উপরে যান' />
        </a>
      </section>

      <footer className='siteFooter'>
        <div className='footerGlow' aria-hidden='true'></div>
        <div className='footerInner'>
          <div className='footerBrand'>
            <a href='#top' aria-label='Back to top'>
              <Image
                src='/erp_logo.png'
                alt='ERP logo'
                width={220}
                height={69}
              />
            </a>
            <p>
              <LangText
                en='A connected ERP information hub for finance, inventory, HR, sales, operations, reporting, and business intelligence.'
                bn='ফাইন্যান্স, ইনভেন্টরি, এইচআর, সেলস, অপারেশন, রিপোর্টিং ও বিজনেস ইন্টেলিজেন্সের জন্য একটি কানেক্টেড ERP ইনফরমেশন হাব।'
              />
            </p>
            <div className='footerSocials' aria-label='Social and contact links'>
              <a href='https://m360ict.com/' target='_blank' rel='noreferrer'>Web</a>
              <a href='https://www.linkedin.com/company/m360-ict' target='_blank' rel='noreferrer'>in</a>
              <a href='mailto:sup.m360ict@gmail.com'>Mail</a>
              <a href='tel:+8809638336699'>Call</a>
            </div>
          </div>

          <div className='footerLinks'>
            <h2><LangText en='Explore' bn='এক্সপ্লোর' /></h2>
            <a href='#modules'><LangText en='ERP Modules' bn='ERP মডিউল' /></a>
            <a href='#benefits'><LangText en='Benefits' bn='সুবিধা' /></a>
            <a href='#implementation'><LangText en='Implementation' bn='বাস্তবায়ন' /></a>
            <a href='#pricing'><LangText en='Pricing Plans' bn='প্রাইসিং প্ল্যান' /></a>
            <a href='#demo'><LangText en='Request Demo' bn='ডেমো চাই' /></a>
          </div>

          <div className='footerSupport'>
            <div className='supportHeader'>
              <p className='eyebrow'>Support Details</p>
              <h2>Contact Support</h2>
            </div>
            <div className='supportCards'>
              <a className='supportCard' href='tel:+8809638336699'>
                <span>Call</span>
                <p>09638-336699, 01958398325, 01958398313, +880 1958-398308</p>
              </a>
              <div className='supportCard'>
                <span>Timing</span>
                <p>10:00AM to 06:00PM</p>
              </div>
              <a className='supportCard' href='mailto:sup.m360ict@gmail.com'>
                <span>Email</span>
                <p>sup.m360ict@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className='footerBottom'>
          <p>© 2026 ERP Informative Website. All rights reserved.</p>
          <p>
            Developed by <a href='https://m360ict.com/' target='_blank' rel='noreferrer'>M360ICT</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

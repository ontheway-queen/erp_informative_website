import Image from 'next/image';
import DemoRequest from './DemoRequest';
import HeaderScrollState from './HeaderScrollState';
import LanguageToggle from './LanguageToggle';
import PricingPlans from './PricingPlans';

const actualModules = [
  {
    title: 'Dashboard',
    bn: 'ড্যাশবোর্ড',
    text: 'Daily collection, expense, profit, receivable, and account balance in one screen.',
  },
  {
    title: 'Invoice',
    bn: 'ইনভয়েস',
    text: 'Create sales invoices, manage billing flow, and follow payment status.',
  },
  {
    title: 'Subscription',
    bn: 'সাবস্ক্রিপশন',
    text: 'Handle recurring packages, renewals, and customer plan tracking.',
  },
  {
    title: 'Quotation',
    bn: 'কোটেশন',
    text: 'Prepare proposals quickly and convert approved quotations into invoicing flow.',
  },
  {
    title: 'Money Receipt',
    bn: 'মানি রিসিপ্ট',
    text: 'Record received payments with proper reference and collection history.',
  },
  {
    title: 'Accounts',
    bn: 'অ্যাকাউন্টস',
    text: 'Maintain branch-wise accounts, receivables, and balance monitoring.',
  },
  {
    title: 'Client',
    bn: 'ক্লায়েন্ট',
    text: 'Track total, active, inactive, and account-linked client information.',
  },
  {
    title: 'Cheque Management',
    bn: 'চেক ম্যানেজমেন্ট',
    text: 'Manage cheque issue, deposit, clearance, and status updates.',
  },
  {
    title: 'Loan Investment',
    bn: 'লোন ইনভেস্টমেন্ট',
    text: 'Monitor investments, loan entries, and recovery movement from one place.',
  },
  {
    title: 'Expense',
    bn: 'খরচ',
    text: 'Control operational expense entries and compare them with collections.',
  },
  {
    title: 'Payroll',
    bn: 'পেরোল',
    text: 'Organize staff salary, pay cycle, and related finance records.',
  },
  {
    title: 'Configuration',
    bn: 'কনফিগারেশন',
    text: 'Set up branches, permissions, master data, and workflow defaults.',
  },
  {
    title: 'Report',
    bn: 'রিপোর্ট',
    text: 'Generate summary, performance, collection, expense, and account reports.',
  },
  {
    title: 'Administration',
    bn: 'অ্যাডমিনিস্ট্রেশন',
    text: 'Control users, roles, approvals, and secure system-wide management.',
  },
];

const solutionOutcomes = [
  {
    title: 'Faster Collection Control',
    bn: 'দ্রুত কালেকশন কন্ট্রোল',
    text: 'See what is collected, what is pending, and where follow-up is needed without checking multiple places.',
  },
  {
    title: 'Clear Client Tracking',
    bn: 'পরিষ্কার ক্লায়েন্ট ট্র্যাকিং',
    text: 'Keep client status, active accounts, and payment relationships visible in one connected flow.',
  },
  {
    title: 'Daily Financial Clarity',
    bn: 'দৈনিক ফিন্যান্স ক্ল্যারিটি',
    text: 'Understand expense, profit, and due position every day so decisions can be made faster.',
  },
  {
    title: 'Better Team Coordination',
    bn: 'ভালো টিম কো-অর্ডিনেশন',
    text: 'Billing, receipt, accounts, and reporting stay aligned so teams work from the same information.',
  },
  {
    title: 'Stronger Management View',
    bn: 'শক্তিশালী ম্যানেজমেন্ট ভিউ',
    text: 'Give owners and managers a clean dashboard view of business performance, client movement, and collection progress.',
  },
  {
    title: 'Less Manual Confusion',
    bn: 'কম ম্যানুয়াল কনফিউশন',
    text: 'Reduce spreadsheet dependency and make routine business tracking easier for every day operations.',
  },
];

const dashboardStats = [
  { value: '20+', en: 'Core modules', bn: 'মূল মডিউল' },

  { value: '24/7', en: 'Branch visibility', bn: 'ব্রাঞ্চ ভিজিবিলিটি' },
  { value: 'Live', en: 'Receivable insights', bn: 'লাইভ রিসিভেবল ইনসাইট' },
];

const summaryCards = [
  {
    title: 'Today Collection',
    bn: 'আজকের কালেকশন',
    value: 'Collections tracked instantly',
  },
  {
    title: 'Today Expenses',
    bn: 'আজকের খরচ',
    value: 'Expense decisions stay visible',
  },
  {
    title: 'Today Profit',
    bn: 'আজকের লাভ',
    value: 'Profit can be compared daily',
  },
  {
    title: 'Total Receivable',
    bn: 'মোট রিসিভেবল',
    value: 'Outstanding amount remains measurable',
  },
];

const workflows = [
  {
    title: 'Sales to Billing',
    bn: 'সেলস থেকে বিলিং',
    text: 'Quotation, invoice, subscription, and money receipt stay connected so your billing cycle does not break.',
  },
  {
    title: 'Client to Collection',
    bn: 'ক্লায়েন্ট থেকে কালেকশন',
    text: 'Client profile, receivable view, and receipt history help your team follow every payment clearly.',
  },
  {
    title: 'Expense to Profit',
    bn: 'খরচ থেকে লাভ',
    text: 'Expense entries and collection data show daily and monthly profitability from the same operational layer.',
  },
  {
    title: 'Accounts to Reporting',
    bn: 'অ্যাকাউন্টস থেকে রিপোর্টিং',
    text: 'Account balance, branch records, cheque movement, and reports stay ready for management review.',
  },
];

const journeySteps = [
  {
    label: '01',
    title: 'Capture Demand',
    bn: 'চাহিদা ধরুন',
    text: 'Start with quotation and subscription so the sales conversation moves into a structured ERP process.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: '02',
    title: 'Bill and Receive',
    bn: 'বিলিং ও রিসিভ',
    text: 'Invoice and money receipt work together to make every collection event visible inside the same system.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: '03',
    title: 'Review Operations',
    bn: 'অপারেশন রিভিউ',
    text: 'Accounts, expense, cheque management, and reports give management a clean control layer.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
];

const reportBlocks = [
  {
    title: 'Collection Snapshot',
    bn: 'কালেকশন স্ন্যাপশট',
    text: 'Inspired by your existing right-side cards, this section highlights today and this month at a glance.',
  },
  {
    title: 'Balance Status',
    bn: 'ব্যালেন্স স্ট্যাটাস',
    text: 'Branch account names, account numbers, and balance conditions can be introduced like the real ERP table.',
  },
  {
    title: 'Client Summary',
    bn: 'ক্লায়েন্ট সামারি',
    text: 'Total, active, and inactive client counts communicate growth without inventing unrelated modules.',
  },
];

const showcasePanels = [
  {
    title: 'Client and Collection Experience',
    bn: 'ক্লায়েন্ট ও কালেকশন এক্সপেরিয়েন্স',
    text: 'Give visitors a clean visual story of how client records, outstanding receivables, and money receipts stay connected.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Accounts and Reporting View',
    bn: 'অ্যাকাউন্টস ও রিপোর্টিং ভিউ',
    text: 'Use report-style panels and account summaries to present the software as a practical finance control center.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
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

export default function Home() {
  return (
    <main className='erpLanding'>
      <HeaderScrollState />
      <a
        className='floatingDemoButton'
        href='#demo'
        aria-label='Go to request a demo form'
      >
        <LangText en='Request Demo' bn='ডেমো চাই' />
      </a>

      <header className='hero erpHero' id='top'>
        <nav className='nav' aria-label='Main navigation'>
          <a className='brand' href='#top'>
            <Image
              src='/erp_logo.png'
              alt='ERP logo'
              width={240}
              height={75}
              priority
            />
          </a>
          <input className='navMenuToggle' id='navMenuToggle' type='checkbox' />
          <label
            className='menuButton'
            htmlFor='navMenuToggle'
            aria-label='Toggle navigation menu'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </label>
          <div className='navLinks'>
            <a href='#modules'>
              <LangText en='Modules' bn='মডিউল' />
            </a>
            <a href='#dashboard-view'>
              <LangText en='Dashboard View' bn='ড্যাশবোর্ড ভিউ' />
            </a>
            <a href='#workflow'>
              <LangText en='Workflow' bn='ওয়ার্কফ্লো' />
            </a>
            <a href='#reports'>
              <LangText en='Reports' bn='রিপোর্ট' />
            </a>
            <a href='#pricing'>
              <LangText en='Pricing' bn='প্রাইসিং' />
            </a>
            <a className='navDemoButton' href='#demo'>
              <LangText en='Request Demo' bn='ডেমো চাই' />
            </a>
          </div>
          <LanguageToggle />
        </nav>

        <section className='heroContent erpHeroContent'>
          <div className='heroPanel erpHeroPanel'>
            <div className='heroCopy'>
              <div className='heroChips' aria-label='Actual ERP highlights'>
                <span>
                  <LangText
                    en='Actual module-based design'
                    bn='রিয়েল মডিউল-বেসড ডিজাইন'
                  />
                </span>
                <span>
                  <LangText
                    en='Collection and account focused'
                    bn='কালেকশন ও অ্যাকাউন্ট ফোকাসড'
                  />
                </span>
                <span>
                  <LangText
                    en='Admin-ready workflows'
                    bn='অ্যাডমিন-রেডি ওয়ার্কফ্লো'
                  />
                </span>
              </div>
              <p className='eyebrow'>
                <LangText
                  en='ERP Informative Website'
                  bn='ইআরপি ইনফরমেটিভ ওয়েবসাইট'
                />
              </p>
              <h1>
                <LangText
                  en='One smart ERP solution for collection, accounts, clients, and daily business control.'
                  bn='collection, accounts, client আর daily business control-এর জন্য এক smart ERP solution।'
                />
              </h1>
              <p className='heroText'>
                <LangText
                  en='This landing design is now based on your actual dashboard structure: collection, expense, profit, receivable, client summary, account balance, and the exact modules shown in your ERP sidebar.'
                  bn='এই landing design এখন আপনার আসল dashboard structure অনুযায়ী সাজানো: collection, expense, profit, receivable, client summary, account balance, আর sidebar-এ থাকা exact module list.'
                />
              </p>
              <div className='heroActions'>
                <a className='primaryButton' href='#modules'>
                  <LangText en='Explore modules' bn='মডিউল দেখুন' />
                </a>
                <a className='secondaryButton' href='#demo'>
                  <LangText en='Book live demo' bn='লাইভ ডেমো বুক করুন' />
                </a>
              </div>
              <div className='heroStats'>
                {dashboardStats.map((item) => (
                  <strong key={item.en}>
                    {item.value}
                    <small>
                      <LangText en={item.en} bn={item.bn} />
                    </small>
                  </strong>
                ))}
              </div>
            </div>

            <aside
              className='heroDashboard erpDashboardPreview'
              aria-label='Actual ERP dashboard inspired preview'
            >
              <div className='laptopMockup'>
                <div className='laptopScreen'>
                  <div className='laptopCamera' aria-hidden='true'></div>
                  <div className='erpPreviewTop'>
                    <div className='erpMainMock'>
                      <div className='erpTopStrip'>
                        <div className='erpTopDots' aria-hidden='true'>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <strong>ERP</strong>
                      </div>
                      <div className='erpChartMock' aria-hidden='true'>
                        <span className='short'></span>
                        <span className='empty'></span>
                        <span className='empty'></span>
                        <span className='tall'></span>
                        <span className='empty'></span>
                      </div>
                    </div>
                    <div className='erpDailyCards'>
                      {summaryCards.slice(0, 3).map((card) => (
                        <div
                          key={card.title}
                          className={`erpMetricCard ${card.title === 'Today Collection' ? 'erpMetricCardPrimary' : ''}`}
                        >
                          <h3>
                            <LangText en={card.title} bn={card.bn} />
                          </h3>
                          <strong>
                            {card.title === 'Today Collection' ? '24,500' : '0.00'}
                          </strong>
                        </div>
                      ))}
                      <div className='erpCompactPanel'>
                        <p className='erpCompactTitle'>
                          <LangText en='Active Modules' bn='অ্যাকটিভ মডিউল' />
                        </p>
                        <div className='erpModulePills'>
                          <span>Invoice</span>
                          <span>Receipt</span>
                          <span>Accounts</span>
                          <span>Client</span>
                        </div>
                        <div className='erpRecentList'>
                          <div>
                            <strong>INV-2045</strong>
                            <span>Collected</span>
                          </div>
                          <div>
                            <strong>CL-27</strong>
                            <span>Active</span>
                          </div>
                          <div>
                            <strong>Due Alert</strong>
                            <span>1 follow-up</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='erpSummaryStack erpMonthlyCards'>
                    <div className='erpMetricCard wide'>
                      <h3>
                        <LangText en='Month' bn='মাস' />
                      </h3>
                      <strong>1000.00 BDT</strong>
                    </div>
                    <div className='erpMetricCard wide'>
                      <h3>
                        <LangText en='Received' bn='রিসিভড' />
                      </h3>
                      <strong>1000.00 BDT</strong>
                    </div>
                    <div className='erpMetricCard wide'>
                      <h3>
                        <LangText en='Pending' bn='পেন্ডিং' />
                      </h3>
                      <strong>0.00 BDT</strong>
                    </div>
                    <div className='erpMetricCard wide'>
                      <h3>
                        <LangText en='Total Due' bn='মোট ডিউ' />
                      </h3>
                      <strong>18460267.00 BDT</strong>
                    </div>
                  </div>
                  <div className='erpPreviewBottom compactBottom'>
                    <div className='clientStatsPanel heroClientStats heroClientStatsWide'>
                      <article>
                        <small>
                          <LangText en='Total Client' bn='মোট ক্লায়েন্ট' />
                        </small>
                        <strong>27</strong>
                      </article>
                      <article>
                        <small>
                          <LangText
                            en='Active Client'
                            bn='অ্যাকটিভ ক্লায়েন্ট'
                          />
                        </small>
                        <strong>26</strong>
                      </article>
                      <article>
                        <small>
                          <LangText
                            en='Inactive Client'
                            bn='ইনঅ্যাকটিভ ক্লায়েন্ট'
                          />
                        </small>
                        <strong>01</strong>
                      </article>
                    </div>
                    <div className='erpStatusBar'>
                      <div>
                        <span>Collection</span>
                        <strong>On Track</strong>
                      </div>
                      <div>
                        <span>Receivable</span>
                        <strong>Watch</strong>
                      </div>
                      <div>
                        <span>Branches</span>
                        <strong>Live</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='laptopBase' aria-hidden='true'></div> */}
            </aside>
          </div>
        </section>
      </header>

      <section
        className='sectionWrap actualModuleSection animatedSection'
        id='modules'
      >
        <div className='actualModuleShowcase'>
          <div className='actualModuleHero actualModuleHeroClean'>
            <p className='eyebrow'>
              <LangText en='What You Actually Get' bn='আপনি আসলে কী পাবেন' />
            </p>
            <h2>
              <LangText
                en='A clearer way to monitor revenue flow, customer activity, finance records, and everyday operations.'
                bn='revenue flow, customer activity, finance record আর everyday operation monitor করার জন্য আরও পরিষ্কার একটি way।'
              />
            </h2>
            <p>
              <LangText
                en='Every part of the business stays easier to track, easier to follow up, and easier to manage from one connected flow.'
                bn='business-er প্রতিটি part এক connected flow-তে track করা, follow-up করা আর manage করা সহজ হয়ে যায়।'
              />
            </p>
            <div className='actualModuleMiniStats'>
              <span>
                <strong>Daily</strong>
                <small>control</small>
              </span>
              <span>
                <strong>Client</strong>
                <small>visibility</small>
              </span>
              <span>
                <strong>Faster</strong>
                <small>follow-up</small>
              </span>
            </div>
          </div>

          <div className='actualModuleGrid'>
            {solutionOutcomes.map((item, index) => (
              <article className='actualModuleCard' key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>
                  <LangText en={item.title} bn={item.bn} />
                </h3>
                <p>
                  <LangText en={item.text} bn={item.text} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='sectionWrap journeySection animatedSection'>
        <div className='sectionHead'>
          <p className='eyebrow'>
            <LangText en='Interactive Journey' bn='ইন্টারঅ্যাকটিভ জার্নি' />
          </p>
          <h2>
            <LangText
              en='Let users feel how one action moves naturally to the next inside your ERP.'
              bn='user jeno feel korte pare, apnar ERP-te ekta action kivabe naturally next step-e jay।'
            />
          </h2>
        </div>
        <div className='journeyTimeline'>
          {journeySteps.map((step) => (
            <article className='journeyCard' key={step.title}>
              <div className='journeyImageWrap'>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={1200}
                  height={800}
                />
                <div className='journeyOverlay'>
                  <span>{step.label}</span>
                </div>
              </div>
              <div className='journeyContent'>
                <h3>
                  <LangText en={step.title} bn={step.bn} />
                </h3>
                <p>
                  <LangText en={step.text} bn={step.text} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className='sectionWrap dashboardViewSection animatedSection'
        id='dashboard-view'
      >
        <div className='dashboardViewIntro'>
          <div>
            <p className='eyebrow'>
              <LangText en='Dashboard Story' bn='ড্যাশবোর্ড স্টোরি' />
            </p>
            <h2>
              <LangText
                en='Built around the numbers your users see first every morning.'
                bn='প্রতিদিন সকালেই যেসব সংখ্যা user-ra প্রথমে দেখে, design-ta এখন সেগুলোকেই কেন্দ্র করে।'
              />
            </h2>
            <p>
              <LangText
                en='Collection, expense, profit, receivable, balance status, and client counts form the public-facing message of the product.'
                bn='collection, expense, profit, receivable, balance status আর client count-ই এখন product-er public-facing message তৈরি করে।'
              />
            </p>
          </div>
          <div className='dashboardKpiRail'>
            {summaryCards.map((card) => (
              <article key={card.title}>
                <small>
                  <LangText en={card.title} bn={card.bn} />
                </small>
                <strong>Live View</strong>
              </article>
            ))}
          </div>
        </div>

        <div className='dashboardFeatureBoard'>
          <div className='balanceTableMock'>
            <div className='mockHeader'>
              <h3>
                <LangText
                  en='Current Balance Status'
                  bn='কারেন্ট ব্যালেন্স স্ট্যাটাস'
                />
              </h3>
            </div>
            <div className='mockRow mockLabels'>
              <span>SL</span>
              <span>Account</span>
              <span>Branch</span>
              <span>Balance</span>
            </div>
            <div className='mockRow'>
              <span>1</span>
              <span>Corporate Billing</span>
              <span>Dilkusha</span>
              <span className='negative'>BDT -94,070</span>
            </div>
            <div className='mockRow'>
              <span>2</span>
              <span>Operations</span>
              <span>Dhaka North</span>
              <span className='negative'>BDT -2,890</span>
            </div>
            <div className='mockRow'>
              <span>3</span>
              <span>Receivable Desk</span>
              <span>Head Office</span>
              <span>BDT 11,800</span>
            </div>
          </div>

          <div className='clientStatsPanel'>
            <article>
              <small>
                <LangText en='Total Client' bn='মোট ক্লায়েন্ট' />
              </small>
              <strong>27</strong>
            </article>
            <article>
              <small>
                <LangText en='Active Client' bn='অ্যাকটিভ ক্লায়েন্ট' />
              </small>
              <strong>26</strong>
            </article>
            <article>
              <small>
                <LangText en='Inactive Client' bn='ইনঅ্যাকটিভ ক্লায়েন্ট' />
              </small>
              <strong>01</strong>
            </article>
          </div>
        </div>
      </section>

      <section className='showcaseBand animatedSection'>
        <div className='showcaseInner'>
          {showcasePanels.map((panel, index) => (
            <article
              className={`showcaseCard ${index % 2 === 1 ? 'reverse' : ''}`}
              key={panel.title}
            >
              <div className='showcaseVisual'>
                <Image
                  src={panel.image}
                  alt={panel.title}
                  width={1400}
                  height={900}
                />
              </div>
              <div className='showcaseText'>
                <p className='eyebrow'>
                  <LangText
                    en='Interactive Section'
                    bn='ইন্টারঅ্যাকটিভ সেকশন'
                  />
                </p>
                <h2>
                  <LangText en={panel.title} bn={panel.bn} />
                </h2>
                <p>
                  <LangText en={panel.text} bn={panel.text} />
                </p>
                <div className='showcaseHighlights'>
                  <span>
                    <LangText en='Layered cards' bn='লেয়ার্ড কার্ড' />
                  </span>
                  <span>
                    <LangText
                      en='Image-backed trust'
                      bn='ইমেজ-ব্যাকড ট্রাস্ট'
                    />
                  </span>
                  <span>
                    <LangText en='Better user flow' bn='বেটার ইউজার ফ্লো' />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className='sectionWrap workflowSection animatedSection'
        id='workflow'
      >
        <div className='sectionHead'>
          <p className='eyebrow'>
            <LangText en='Operational Flow' bn='অপারেশনাল ফ্লো' />
          </p>
          <h2>
            <LangText
              en='The site narrative now follows your actual business flow.'
              bn='site-er narrative এখন আপনার actual business flow follow করে।'
            />
          </h2>
        </div>
        <div className='workflowGrid'>
          {workflows.map((item) => (
            <article key={item.title}>
              <h3>
                <LangText en={item.title} bn={item.bn} />
              </h3>
              <p>
                <LangText en={item.text} bn={item.text} />
              </p>
            </article>
          ))}
        </div>
        <div className='flowConnector' aria-hidden='true'>
          <span>Quotation</span>
          <span>Invoice</span>
          <span>Receipt</span>
          <span>Accounts</span>
          <span>Reports</span>
        </div>
      </section>

      <section
        className='sectionWrap reportsSection animatedSection'
        id='reports'
      >
        <div className='sectionHead'>
          <p className='eyebrow'>
            <LangText
              en='Report-led Presentation'
              bn='রিপোর্ট-লেড প্রেজেন্টেশন'
            />
          </p>
          <h2>
            <LangText
              en='Reports, account summaries, and client counts are now central visual elements.'
              bn='report, account summary আর client count এখন central visual element।'
            />
          </h2>
        </div>
        <div className='reportFocusGrid'>
          {reportBlocks.map((block) => (
            <article key={block.title}>
              <h3>
                <LangText en={block.title} bn={block.bn} />
              </h3>
              <p>
                <LangText en={block.text} bn={block.text} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <PricingPlans />
      <DemoRequest />

      <section className='cta animatedSection'>
        <p className='eyebrow'>
          <LangText en='Final Takeaway' bn='শেষ কথা' />
        </p>
        <h2>
          <LangText
            en='This design now reflects the real ERP product your visitors will actually log into.'
            bn='এই design এখন সেই real ERP product-কেই reflect করে, যেটাতে visitor-ra আসলে login করবে।'
          />
        </h2>
        <p>
          <LangText
            en='The homepage focuses on your authentic modules, authentic dashboard patterns, and authentic finance-client-reporting story.'
            bn='homepage এখন authentic module, authentic dashboard pattern, আর authentic finance-client-reporting story-কেই focus করে।'
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
                en='A focused ERP website for billing, collection, accounts, clients, reporting, payroll, administration, and operational visibility.'
                bn='billing, collection, accounts, client, reporting, payroll, administration আর operational visibility-কেন্দ্রিক একটি ERP website।'
              />
            </p>
          </div>

          <div className='footerLinks'>
            <h2>
              <LangText en='Explore' bn='এক্সপ্লোর' />
            </h2>
            <a href='#modules'>
              <LangText en='Actual Modules' bn='আসল মডিউল' />
            </a>
            <a href='#dashboard-view'>
              <LangText en='Dashboard View' bn='ড্যাশবোর্ড ভিউ' />
            </a>
            <a href='#workflow'>
              <LangText en='Workflow' bn='ওয়ার্কফ্লো' />
            </a>
            <a href='#reports'>
              <LangText en='Reports' bn='রিপোর্ট' />
            </a>
            <a href='#demo'>
              <LangText en='Request Demo' bn='ডেমো চাই' />
            </a>
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
          <p>© 2026 ERP. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a href='https://m360ict.com/' target='_blank' rel='noreferrer'>
              M360ICT
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

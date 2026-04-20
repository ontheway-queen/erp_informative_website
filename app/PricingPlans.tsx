const plans = [
  {
    nameEn: "Monthly",
    nameBn: "মাসিক",
    taglineEn: "Ideal for new businesses.",
    taglineBn: "নতুন ব্যবসার জন্য উপযুক্ত।",
    price: "USD 99",
    periodEn: "Per month",
    periodBn: "প্রতি মাসে",
    noteEn: "Core ERP setup",
    noteBn: "কোর ERP সেটআপ",
    accent: "violet",
    features: [
      ["Finance & inventory basics", "ফাইন্যান্স ও ইনভেন্টরি বেসিক"],
      ["Sales order tracking", "সেলস অর্ডার ট্র্যাকিং"],
      ["Web portal access", "ওয়েব পোর্টাল অ্যাক্সেস"],
      ["Basic reports", "বেসিক রিপোর্ট"],
      ["Email support", "ইমেইল সাপোর্ট"],
    ],
  },
  {
    nameEn: "Yearly",
    nameBn: "বার্ষিক",
    taglineEn: "Perfect for growing teams.",
    taglineBn: "গ্রোইং টিমের জন্য পারফেক্ট।",
    price: "USD 1,990",
    periodEn: "Per year",
    periodBn: "প্রতি বছরে",
    noteEn: "Advanced ERP workflow",
    noteBn: "অ্যাডভান্সড ERP ওয়ার্কফ্লো",
    accent: "rose",
    features: [
      ["Finance, inventory, CRM", "ফাইন্যান্স, ইনভেন্টরি, CRM"],
      ["HR and approval flows", "এইচআর ও অনুমোদন ফ্লো"],
      ["Role-based dashboard", "রোল-বেইজড ড্যাশবোর্ড"],
      ["Custom reports", "কাস্টম রিপোর্ট"],
      ["Priority support", "প্রায়োরিটি সাপোর্ট"],
    ],
  },
];

function LangText({ en, bn }: { en: string; bn: string }) {
  return (
    <>
      <span className="lang-en">{en}</span>
      <span className="lang-bn">{bn}</span>
    </>
  );
}

export default function PricingPlans() {
  return (
    <section className="pricingSection sectionWrap animatedSection" id="pricing">
      <div className="sectionHead pricingHead">
        <p className="eyebrow">
          <LangText en="ERP Pricing" bn="ERP প্রাইসিং" />
        </p>
        <h2>
          <LangText
            en="Choose a plan that matches your ERP journey."
            bn="আপনার ERP যাত্রার সাথে মানানসই প্ল্যান বেছে নিন।"
          />
        </h2>
        <p>
          <LangText
            en="Start simple, then scale modules, users, reports, integrations, and support as the business grows."
            bn="সহজভাবে শুরু করুন, তারপর ব্যবসা বাড়ার সাথে মডিউল, ইউজার, রিপোর্ট, ইন্টিগ্রেশন ও সাপোর্ট স্কেল করুন।"
          />
        </p>
        <div className="pricingLabel">
          <LangText en="Pricing" bn="প্রাইসিং" />
        </div>
      </div>

      <div className="pricingGrid simplePricingGrid">
        {plans.map((plan) => (
          <article className={`priceCard ${plan.accent}`} key={plan.nameEn}>
            <div className="priceTop">
              <h3>
                <LangText en={plan.nameEn} bn={plan.nameBn} />
              </h3>
              <p>
                <LangText en={plan.taglineEn} bn={plan.taglineBn} />
              </p>
              <strong>{plan.price}</strong>
              <span>
                <LangText en={plan.periodEn} bn={plan.periodBn} />
              </span>
              <small>
                <LangText en={plan.noteEn} bn={plan.noteBn} />
              </small>
            </div>
            <ul>
              {plan.features.map(([en, bn]) => (
                <li key={en}>
                  <LangText en={en} bn={bn} />
                </li>
              ))}
            </ul>
            <a className="priceButton" href="#demo">
              <LangText en="Get Started" bn="শুরু করুন" />
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

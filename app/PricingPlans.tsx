"use client";

import { useState } from "react";

type BillingMode = "monthly" | "yearly";

const plans = [
  {
    nameEn: "Starter",
    nameBn: "স্টার্টার",
    taglineEn: "Ideal for new businesses.",
    taglineBn: "নতুন ব্যবসার জন্য উপযুক্ত।",
    monthly: "USD 99",
    yearly: "USD 990",
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
    nameEn: "Professional",
    nameBn: "প্রফেশনাল",
    taglineEn: "Perfect for growing teams.",
    taglineBn: "গ্রোইং টিমের জন্য পারফেক্ট।",
    monthly: "USD 199",
    yearly: "USD 1,990",
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
  {
    nameEn: "Enterprise",
    nameBn: "এন্টারপ্রাইজ",
    taglineEn: "Built for large companies.",
    taglineBn: "বড় প্রতিষ্ঠানের জন্য তৈরি।",
    monthly: "Contact Us",
    yearly: "Contact Us",
    noteEn: "Custom ERP ecosystem",
    noteBn: "কাস্টম ERP ইকোসিস্টেম",
    accent: "cyan",
    features: [
      ["Full ERP suite", "সম্পূর্ণ ERP স্যুট"],
      ["Multi-branch operation", "মাল্টি-ব্রাঞ্চ অপারেশন"],
      ["Web + mobile access", "ওয়েব + মোবাইল অ্যাক্সেস"],
      ["Advanced integrations", "অ্যাডভান্সড ইন্টিগ্রেশন"],
      ["24/7 expert support", "২৪/৭ এক্সপার্ট সাপোর্ট"],
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
  const [billingMode, setBillingMode] = useState<BillingMode>("monthly");

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
        <div className="billingToggle" aria-label="Choose billing period">
          <button
            type="button"
            className={billingMode === "monthly" ? "active" : ""}
            onClick={() => setBillingMode("monthly")}
          >
            <LangText en="Monthly" bn="মাসিক" />
          </button>
          <button
            type="button"
            className={billingMode === "yearly" ? "active" : ""}
            onClick={() => setBillingMode("yearly")}
          >
            <LangText en="Yearly" bn="বার্ষিক" />
          </button>
        </div>
      </div>

      <div className="pricingGrid">
        {plans.map((plan) => (
          <article className={`priceCard ${plan.accent}`} key={plan.nameEn}>
            <div className="priceTop">
              <h3>
                <LangText en={plan.nameEn} bn={plan.nameBn} />
              </h3>
              <p>
                <LangText en={plan.taglineEn} bn={plan.taglineBn} />
              </p>
              <strong>{billingMode === "monthly" ? plan.monthly : plan.yearly}</strong>
              <span>
                <LangText
                  en={billingMode === "monthly" ? "Per month" : "Per year"}
                  bn={billingMode === "monthly" ? "প্রতি মাসে" : "প্রতি বছরে"}
                />
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

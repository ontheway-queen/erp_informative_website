"use client";

import { FormEvent, useState } from "react";

function LangText({ en, bn }: { en: string; bn: string }) {
  return (
    <>
      <span className="lang-en">{en}</span>
      <span className="lang-bn">{bn}</span>
    </>
  );
}

export default function DemoRequest() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="demoRequest animatedSection" id="demo">
      <div className="demoIntro">
        <p className="eyebrow"><LangText en="Request A Demo" bn="ডেমো রিকোয়েস্ট" /></p>
        <h2>
          <LangText
            en="See how ERP can match your real workflow."
            bn="আপনার বাস্তব কাজের সাথে ERP কীভাবে মেলে তা দেখুন।"
          />
        </h2>
        <p>
          <LangText
            en="Share a few details about your company, and the demo can focus on the modules, reports, and approval flows that matter most."
            bn="আপনার কোম্পানির কিছু তথ্য দিলে ডেমোটি প্রয়োজনীয় মডিউল, রিপোর্ট ও অনুমোদন ফ্লো অনুযায়ী সাজানো যাবে।"
          />
        </p>
        <div className="demoHighlights" aria-label="Demo focus areas">
          <span><LangText en="Process review" bn="প্রসেস রিভিউ" /></span>
          <span><LangText en="Module mapping" bn="মডিউল ম্যাপিং" /></span>
          <span><LangText en="Implementation guidance" bn="বাস্তবায়ন গাইড" /></span>
        </div>
      </div>

      <form className="demoForm" onSubmit={handleSubmit}>
        <label>
          <LangText en="Full name" bn="নাম" />
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          <LangText en="Work email" bn="অফিস ইমেইল" />
          <input name="email" type="email" placeholder="name@company.com" required />
        </label>
        <label>
          <LangText en="Company" bn="কোম্পানি" />
          <input name="company" type="text" placeholder="Company name" required />
        </label>
        <label>
          <LangText en="ERP interest" bn="কোন মডিউল দরকার" />
          <select className="lang-en" name="interest" defaultValue="">
            <option value="" disabled>
              Select a module
            </option>
            <option>Finance and accounting</option>
            <option>Inventory and warehouse</option>
            <option>Sales, CRM, and service</option>
            <option>HR and payroll</option>
            <option>Manufacturing and supply chain</option>
            <option>Full ERP suite</option>
          </select>
          <select className="lang-bn" name="interest_bn" defaultValue="">
            <option value="" disabled>
              মডিউল নির্বাচন করুন
            </option>
            <option>ফাইন্যান্স ও অ্যাকাউন্টিং</option>
            <option>ইনভেন্টরি ও গুদাম</option>
            <option>সেলস, সিআরএম ও সার্ভিস</option>
            <option>এইচআর ও পেরোল</option>
            <option>উৎপাদন ও সাপ্লাই চেইন</option>
            <option>সম্পূর্ণ ERP</option>
          </select>
        </label>
        <label className="wideField">
          <LangText en="What should the demo cover?" bn="ডেমোতে কী দেখতে চান?" />
          <textarea
            name="message"
            placeholder="Tell us about your current tools, pain points, or target modules."
            rows={4}
          />
        </label>
        <button className="primaryButton" type="submit">
          <LangText en="Send demo request" bn="রিকোয়েস্ট পাঠান" />
        </button>
        {submitted ? (
          <p className="formSuccess" role="status">
            <LangText
              en="Thanks. Your demo request is ready."
              bn="ধন্যবাদ, আপনার ডেমো রিকোয়েস্ট প্রস্তুত।"
            />
          </p>
        ) : (
          <p className="formNote">
            <LangText
              en="No commitment. A focused demo should explain value before it asks for change."
              bn="কোনো কমিটমেন্ট নেই। আগে ভ্যালু বুঝুন, তারপর সিদ্ধান্ত নিন।"
            />
          </p>
        )}
      </form>
    </section>
  );
}

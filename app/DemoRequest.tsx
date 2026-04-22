'use client';

import { FormEvent, useState } from 'react';

function LangText({ en, bn }: { en: string; bn: string }) {
  return (
    <>
      <span className='lang-en'>{en}</span>
      <span className='lang-bn'>{bn}</span>
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
    <section className='demoRequest animatedSection' id='demo'>
      <div className='demoIntro'>
        <p className='eyebrow'>
          <LangText en='Request A Demo' bn='\u09a1\u09c7\u09ae\u09cb \u09b0\u09bf\u0995\u09cb\u09df\u09c7\u09b8\u09cd\u099f' />
        </p>
        <h2>
          <LangText
            en='See how ERP can match your real workflow.'
            bn='\u0986\u09aa\u09a8\u09be\u09b0 \u09ac\u09be\u09b8\u09cd\u09a4\u09ac \u0995\u09be\u099c\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 ERP \u0995\u09c0\u09ad\u09be\u09ac\u09c7 \u09ae\u09c7\u09b2\u09c7 \u09a4\u09be \u09a6\u09c7\u0996\u09c1\u09a8\u0964'
          />
        </h2>
        <p>
          <LangText
            en='Share a few details about your company, and the demo can focus on the modules, reports, and approval flows that matter most.'
            bn='\u0986\u09aa\u09a8\u09be\u09b0 \u0995\u09cb\u09ae\u09cd\u09aa\u09be\u09a8\u09bf\u09b0 \u0995\u09bf\u099b\u09c1 \u09a4\u09a5\u09cd\u09af \u09a6\u09bf\u09b2\u09c7 \u09a1\u09c7\u09ae\u09cb\u099f\u09bf \u09aa\u09cd\u09b0\u09df\u09cb\u099c\u09a8\u09c0\u09df \u09ae\u09a1\u09bf\u0989\u09b2, \u09b0\u09bf\u09aa\u09cb\u09b0\u09cd\u099f \u0993 \u0985\u09a8\u09c1\u09ae\u09cb\u09a6\u09a8 \u09ab\u09cd\u09b2\u09cb \u0985\u09a8\u09c1\u09af\u09be\u09df\u09c0 \u09b8\u09be\u099c\u09be\u09a8\u09cb \u09af\u09be\u09ac\u09c7\u0964'
          />
        </p>
        <div className='demoHighlights' aria-label='Demo focus areas'>
          <span>
            <LangText en='Process review' bn='\u09aa\u09cd\u09b0\u09b8\u09c7\u09b8 \u09b0\u09bf\u09ad\u09bf\u0989' />
          </span>
          <span>
            <LangText en='Module mapping' bn='\u09ae\u09a1\u09bf\u0989\u09b2 \u09ae\u09cd\u09af\u09be\u09aa\u09bf\u0982' />
          </span>
          <span>
            <LangText en='Implementation guidance' bn='\u09ac\u09be\u09b8\u09cd\u09a4\u09ac\u09be\u09df\u09a8 \u0997\u09be\u0987\u09a1' />
          </span>
        </div>
      </div>

      <form className='demoForm' onSubmit={handleSubmit}>
        <label>
          <LangText en='Full name' bn='\u09a8\u09be\u09ae' />
          <input name='name' type='text' placeholder='Your name' required />
        </label>
        <label>
          <LangText en='Work email' bn='\u0985\u09ab\u09bf\u09b8 \u0987\u09ae\u09c7\u0987\u09b2' />
          <input
            name='email'
            type='email'
            placeholder='name@company.com'
            required
          />
        </label>
        <label>
          <LangText en='Company' bn='\u0995\u09cb\u09ae\u09cd\u09aa\u09be\u09a8\u09bf' />
          <input
            name='company'
            type='text'
            placeholder='Company name'
            required
          />
        </label>
        <label>
          <LangText en='Mobile number' bn='\u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u09a8\u09ae\u09cd\u09ac\u09b0' />
          <input
            name='mobile'
            type='tel'
            placeholder='01XXXXXXXXX'
            required
          />
        </label>
        <label className='wideField'>
          <LangText
            en='What should the demo cover?'
            bn='\u09a1\u09c7\u09ae\u09cb\u09a4\u09c7 \u0995\u09c0 \u09a6\u09c7\u0996\u09a4\u09c7 \u099a\u09be\u09a8?'
          />
          <textarea
            name='message'
            placeholder='Tell us about your current tools, pain points, or target modules.'
            rows={4}
          />
        </label>
        <button className='primaryButton' type='submit'>
          <LangText en='Send demo request' bn='\u09b0\u09bf\u0995\u09cb\u09df\u09c7\u09b8\u09cd\u099f \u09aa\u09be\u09a0\u09be\u09a8' />
        </button>
        {submitted ? (
          <p className='formSuccess' role='status'>
            <LangText
              en='Thanks. Your demo request is ready.'
              bn='\u09a7\u09a8\u09cd\u09af\u09ac\u09be\u09a6, \u0986\u09aa\u09a8\u09be\u09b0 \u09a1\u09c7\u09ae\u09cb \u09b0\u09bf\u0995\u09cb\u09df\u09c7\u09b8\u09cd\u099f \u09aa\u09cd\u09b0\u09b8\u09cd\u09a4\u09c1\u09a4\u0964'
            />
          </p>
        ) : (
          <p className='formNote'>
            <LangText
              en='No commitment. A focused demo should explain value before it asks for change.'
              bn='\u0995\u09cb\u09a8\u09cb \u0995\u09ae\u09bf\u099f\u09ae\u09c7\u09a8\u09cd\u099f \u09a8\u09c7\u0987\u0964 \u0986\u0997\u09c7 \u09ad\u09cd\u09af\u09be\u09b2\u09c1 \u09ac\u09c1\u099d\u09c1\u09a8, \u09a4\u09be\u09b0\u09aa\u09b0 \u09b8\u09bf\u09a6\u09cd\u09a7\u09be\u09a8\u09cd\u09a4 \u09a8\u09bf\u09a8\u0964'
            />
          </p>
        )}
      </form>
    </section>
  );
}

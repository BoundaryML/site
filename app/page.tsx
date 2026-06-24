export const metadata = {
  title: 'BAML — New paradigm, new language',
};

export default function Page() {
  const timeline = [
    { lang: 'assembly', who: 'for the machines' },
    { lang: 'c', who: 'for the humans' },
    { lang: 'java', who: 'for the OSs' },
    { lang: 'javascript', who: 'for the browsers' },
    { lang: 'python', who: 'for the newbies' },
    { lang: 'baml', who: 'for the agents' },
  ];

  return (
    <>
      {/* biome-ignore lint/security/noDangerouslySetInnerHTml: scoped style for temporary minimal page */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;700&display=swap');
            html, body { margin: 0; padding: 0; background: #ffffff; }
            .wrap {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 24px;
              box-sizing: border-box;
              font-family: 'Noto Sans Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
              color: #111111;
            }
            .card {
              width: 100%;
              max-width: 460px;
              font-size: 16px;
              line-height: 1.6;
            }
            .lede { color: #111111; margin: 0 0 28px; }
            .timeline { list-style: none; margin: 0 0 28px; padding: 0; }
            .timeline li {
              padding: 2px 0;
            }
            .timeline .who { color: #999999; }
            .timeline .lang { color: #111111; }
            .timeline li.now .who { color: #b794f4; }
            .timeline li.now .lang { color: #5b21b6; font-weight: 700; }
            .links { list-style: none; margin: 0; padding: 0; }
            .links li { padding: 2px 0; color: #999999; }
            .links li.spaced { margin-top: 18px; }
            .links a { color: #111111; text-decoration: none; border-bottom: 1px solid #dddddd; }
            .links a:hover { border-bottom-color: #111111; }
          `,
        }}
      />
      <div className="wrap">
        <div className="card">
          <p className="lede">New paradigm, new language</p>

          <ul className="timeline">
            {timeline.map((t) => (
              <li
                className={t.lang === 'baml' ? 'now' : undefined}
                key={t.lang}
              >
                <span className="who">{t.who},</span>{' '}
                <span className="lang">{t.lang}</span>
              </li>
            ))}
          </ul>

          <ul className="links">
            <li>
              Learn more about our new language:{' '}
              <a href="https://boundaryml.com/discord">boundaryml.com/discord</a>
            </li>
            <li className="spaced">
              Check out our github:{' '}
              <a href="https://github.com/BoundaryML/baml">
                github.com/BoundaryML/baml
              </a>
            </li>
            <li className="spaced">
              Looking to use baml for structured outputs (current users), click
              here: <a href="https://docs.boundaryml.com">docs.boundaryml.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

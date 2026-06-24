export const metadata = {
  title: 'BAML — New paradigm, new language',
};

export default function Page() {
  const timeline = [
    { lang: 'assembly', who: 'for the machines' },
    { lang: 'c', who: 'for the humans' },
    { lang: 'java', who: 'for the enterprises' },
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
            html, body { margin: 0; padding: 0; background: #ffffff; }
            .wrap {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 24px;
              box-sizing: border-box;
              font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
              color: #111111;
            }
            .card {
              width: 100%;
              max-width: 420px;
              font-size: 14px;
              line-height: 1.6;
            }
            .lede { color: #111111; margin: 0 0 28px; }
            .timeline { list-style: none; margin: 0 0 28px; padding: 0; }
            .timeline li {
              display: flex;
              gap: 10px;
              padding: 2px 0;
            }
            .timeline .lang { color: #111111; min-width: 96px; }
            .timeline .who { color: #999999; }
            .timeline li.now .lang { font-weight: 600; }
            .timeline li.now .who { color: #111111; }
            .links { list-style: none; margin: 0; padding: 0; }
            .links li { padding: 2px 0; color: #999999; }
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
                <span className="lang">{t.lang}</span>
                <span className="who">{t.who}</span>
              </li>
            ))}
          </ul>

          <ul className="links">
            <li>
              Old docs:{' '}
              <a href="https://docs.boundaryml.com">docs.boundaryml.com</a>
            </li>
            <li>
              Join our Discord:{' '}
              <a href="https://discord.gg/3MCYm3yQz">discord.gg/3MCYm3yQz</a>
            </li>
            <li>
              GitHub:{' '}
              <a href="https://github.com/BoundaryML/baml">
                github.com/BoundaryML/baml
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

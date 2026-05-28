import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logoUrl = useBaseUrl('/img/logo.svg');

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className={styles.logoMark} src={logoUrl} alt="" />
        <p className={styles.kicker}>Governed outpost for personal agents</p>
        <Heading as="h1" className="hero__title">
          Aphelion
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/install">
            Install Aphelion
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/examples/first-requests">
            See Examples
          </Link>
        </div>
        <div className={styles.commandStrip} aria-label="Aphelion setup example">
          <span>$ aphelion quickstart --detect-admin --install-service</span>
          <span>/status</span>
          <span>approval required: confirm before execution</span>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Aphelion installation and operator documentation.">
      <HomepageHeader />
      <main>
        <section className={styles.quickLinks}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <article className={styles.quickLink}>
                  <h2>Install</h2>
                  <p>Set up the release binary, Telegram bot, provider key, and user service.</p>
                  <Link to="/docs/getting-started/install">Read install guide</Link>
                </article>
              </div>
              <div className="col col--4">
                <article className={styles.quickLink}>
                  <h2>Operate</h2>
                  <p>Use Telegram commands, approvals, status views, side threads, and local checks.</p>
                  <Link to="/docs/operations/telegram">Open operations guide</Link>
                </article>
              </div>
              <div className="col col--4">
                <article className={styles.quickLink}>
                  <h2>Understand</h2>
                  <p>Learn the runtime, turn machine, conversational pipeline, and authority model.</p>
                  <Link to="/docs/concepts/architecture">Explore architecture</Link>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

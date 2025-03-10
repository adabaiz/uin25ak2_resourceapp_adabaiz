import React, { useState } from 'react';
import './styles.scss';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('html');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <main className="container">
      <nav className="tabs">
        <button
          className={`tab ${activeTab === 'html' ? 'active' : ''}`}
          onClick={() => handleTabChange('html')}
        >
          HTML
        </button>
        <button
          className={`tab ${activeTab === 'css' ? 'active' : ''}`}
          onClick={() => handleTabChange('css')}
        >
          CSS
        </button>
        <button
          className={`tab ${activeTab === 'javascript' ? 'active' : ''}`}
          onClick={() => handleTabChange('javascript')}
        >
          JavaScript
        </button>
        <button
          className={`tab ${activeTab === 'react' ? 'active' : ''}`}
          onClick={() => handleTabChange('react')}
        >
          React
        </button>
        <button
          className={`tab ${activeTab === 'sanity' ? 'active' : ''}`}
          onClick={() => handleTabChange('sanity')}
        >
          Sanity & Headless CMS
        </button>
      </nav>

      <article className="content-box">
        {activeTab === 'html' && (
          <section className="content active" id="html">
            <h2>HTML</h2>
            <p>
              HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.
            </p>
            <ul>
              <li><a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">W3Schools</a></li>
              <li><a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">HTML Living Standard</a></li>
              <li><a href="https://html.com/" target="_blank" rel="noopener noreferrer">HTML.com Tutorials</a></li>
            </ul>
          </section>
        )}

        {activeTab === 'css' && (
          <section className="content active" id="css">
            <h2>CSS</h2>
            <p>CSS (Cascading Style Sheets) brukes til å beskrive utseendet og formatet på en nettside.</p>
          </section>
        )}

        {activeTab === 'javascript' && (
          <section className="content active" id="javascript">
            <h2>JavaScript</h2>
            <p>JavaScript er et programmeringsspråk som brukes for å legge til interaktivitet på nettsider.</p>
          </section>
        )}

        {activeTab === 'react' && (
          <section className="content active" id="react">
            <h2>React</h2>
            <p>React er et JavaScript-bibliotek for å bygge brukergrensesnitt.</p>
          </section>
        )}

        {activeTab === 'sanity' && (
          <section className="content active" id="sanity">
            <h2>Sanity & Headless CMS</h2>
            <p>Sanity er en plattform for strukturert innhold som brukes til headless CMS-løsninger.</p>
          </section>
        )}
      </article>
    </main>
  );

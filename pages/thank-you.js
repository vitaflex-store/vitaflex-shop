import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ThankYouPage() {
  const translations = {
    de: [
      "Danke für deine Nachricht!",
      "Wir haben deine Anfrage erhalten und melden uns so schnell wie möglich bei dir.",
      "Zurück zur Startseite"
    ],
    es: [
      "¡Gracias por tu mensaje!",
      "Hemos recibido tu consulta y te responderemos lo antes posible.",
      "Volver al inicio"
    ],
    en: [
      "Thank you for your message!",
      "We have received your request and will get back to you as soon as possible.",
      "Back to homepage"
    ]
  };

  const [lang, setLang] = useState("de");
  const [title, text, linkText] = translations[lang];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        <select className="language-select" value={lang} onChange={e => setLang(e.target.value)}>
          <option value="de">Deutsch</option>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>

        <div className="message-box">
          <h1>{title}</h1>
          <p>{text}</p>
          <Link href="/"><a>{linkText}</a></Link>
        </div>
      </div>

      <style jsx>{`
        .container {
          font-family: 'Inter', sans-serif;
          background: #f4f4f4;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          position: relative;
          margin: 0;
        }
        .message-box {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          text-align: center;
          max-width: 500px;
        }
        h1 {
          font-size: 2rem;
          color: #00c853;
          margin-bottom: 20px;
        }
        p {
          font-size: 1rem;
          color: #333;
        }
        a {
          display: inline-block;
          margin-top: 30px;
          padding: 10px 20px;
          background-color: #00c853;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
        }
        a:hover {
          background-color: #00b342;
        }
        .language-select {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 6px 10px;
          border-radius: 6px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

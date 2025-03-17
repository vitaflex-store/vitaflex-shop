import { useState } from 'react';

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

export default function ThankYou() {
  const [lang, setLang] = useState("de");
  const [title, text, link] = translations[lang];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', padding: '4rem' }}>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        style={{ position: 'absolute', top: 20, right: 20, padding: '0.5rem' }}
      >
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', maxWidth: '600px', margin: 'auto' }}>
        <h1 style={{ color: '#00c853' }}>{title}</h1>
        <p>{text}</p>
        <a href="/" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#00c853', color: 'white', textDecoration: 'none', borderRadius: '6px' }}>{link}</a>
      </div>
    </div>
  );
}
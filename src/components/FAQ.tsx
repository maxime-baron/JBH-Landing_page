'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  faqData?: FAQItem[];
}

const defaultFAQData: FAQItem[] = [
  {
    id: 1,
    question: "Comment puis-je m'inscrire ?",
    answer: "Vous pouvez vous inscrire en cliquant sur le bouton \"S'inscrire\" en haut de la page et en remplissant le formulaire avec vos informations."
  },
  {
    id: 2,
    question: "Quels sont les modes de jeu disponibles ?",
    answer: "Nous proposons plusieurs modes de jeu incluant des défis journaliers, des jeux de rapidité, le mode Karakaku et des compétitions en ligne."
  },
  {
    id: 3,
    question: "Puis-je ajouter ma propre musique ?",
    answer: "Oui, cette fonctionnalité est disponible avec l'abonnement Premium. Vous pouvez importer vos propres pistes et créer des défis personnalisés."
  },
  {
    id: 4,
    question: "Y a-t-il une version mobile disponible ?",
    answer: "Oui, Just Beat Hit est disponible sur mobile et tablette via votre navigateur web. Une application native est en cours de développement."
  },
  {
    id: 5,
    question: "Comment fonctionne le système de scoring ?",
    answer: "Le score est basé sur votre précision, vitesse de frappe et constance. Plus vous êtes rapide et précis, plus votre score augmente!"
  }
];

export default function FAQ({ faqData = defaultFAQData }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleFAQ = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq">
      <h2>F.A.Q</h2>
      <div className='stripes'>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
      </div>
            <div>
        {faqData.map((item) => (
          <div key={item.id}>
            <div>
              <p className="question">{item.question}</p>
              <button 
                className="faqBut" 
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={openItems.includes(item.id)}
                aria-label={`Toggle answer for: ${item.question}`}
              >
                {openItems.includes(item.id) ? '−' : '+'}
              </button>
            </div>
            <p 
              className="reponse" 
              style={{ 
                display: openItems.includes(item.id) ? 'block' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

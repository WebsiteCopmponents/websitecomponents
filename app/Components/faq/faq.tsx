"use client";
import { useState } from "react";

import "./fastyles.css";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "What are web components and how do they differ from website components?",
      answer:
        "Web components are modular, reusable UI building blocks, while website components refer to the implementation of these blocks on a complete website or page.",
    },
    {
      question:
        "Can I use your web components in WordPress/Elementor templates?",
      answer:
        "Yes! Our web components and website components seamlessly integrate into WordPress/Elementor templates to build pages quickly.",
    },
    {
      question:
        "Do you offer custom code templates for dashboards and UI elements?",
      answer:
        "Absolutely—our collection includes custom code templates for fully functional dashboards, landing pages, and UI components.",
    },
    {
      question: "Are your dashboards mobile-responsive?",
      answer:
        "Yes, all dashboards, landing pages, and UI elements are fully responsive and work flawlessly on desktop and mobile.",
    },
    {
      question: "What landing pages do you provide?",
      answer:
        "We offer a variety of landing pages built with web components, website components, and UI code templates to suit different niches.",
    },
    {
      question: "Can I mix web components with custom code templates?",
      answer:
        "Definitely! You can mix web components and custom code templates to build cohesive dashboards, landing pages, and UI designs.",
    },
    {
      question:
        "Do your WordPress/Elementor templates support dynamic content?",
      answer:
        "Yes, our WordPress/Elementor templates include dynamic sections via web components and custom code templates.",
    },
    {
      question: "What UI components are included?",
      answer:
        "We include headers, footers, hero sections, buttons, cards, tables (for dashboards), modals, forms, and more UI components.",
    },
    {
      question: "Is the code optimized for performance?",
      answer:
        "Yes, our web components, custom code templates, and UI elements are optimized for speed, accessibility, and SEO.",
    },
    {
      question: "Can I customize the styles of web components or UI templates?",
      answer:
        "Absolutely—our website components and custom code templates are fully customizable using CSS or Tailwind classes.",
    },
    {
      question:
        "Do you provide support for WordPress/Elementor template integration?",
      answer:
        "Yes, we offer documentation and support for integrating our web components and UI templates into WordPress/Elementor setups.",
    },
    {
      question: "Are the dashboards built on modern technologies?",
      answer:
        "Yes, our dashboards are built with React-based web components and custom code templates for maximum flexibility.",
    },
    {
      question: "Can I buy individual website components or UI blocks?",
      answer:
        "Yes, we allow purchase of individual website components, landing pages, dashboards, or UI blocks.",
    },
    {
      question: "Will I get updates to landing pages and UI templates?",
      answer:
        "Yes, purchasing our dashboards, WordPress/Elementor templates, and web components includes lifetime updates.",
    },
    {
      question: "Do you offer a commercial license?",
      answer:
        "All web components, website components, custom code templates, dashboards, landing pages, and UI elements come with a commercial license.",
    },
    {
      question: "Can I preview the web components before purchase?",
      answer:
        "Yes, we offer live previews of all website components, dashboard templates, landing pages, and UI code templates.",
    },
    {
      question: "Are your templates RTL-compatible?",
      answer:
        "Our WordPress/Elementor templates, web components, and UI code templates support RTL languages out of the box.",
    },
    {
      question: "How are custom code templates delivered?",
      answer:
        "Custom code templates are delivered as ZIP files with clean CSS, HTML, JS, and React-based web components.",
    },
    {
      question: "What support is included for dashboards and UI templates?",
      answer:
        "We include documentation, code samples, and email support for all web components, dashboards, and website components.",
    },
    {
      question: "Can I request new templates or components?",
      answer:
        "Yes! We welcome requests for custom web components, WordPress/Elementor templates, dashboards, landing pages, and UI blocks.",
    },
  ];

  return (
    <section className="faqs_section pt-20 pb-20 md:pt-32 md:pb-32">
      <>
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl mb-10">
          FAQ’s (Frequently Asked Questions)
        </h2>
        <div className={`faq_wrapper inner_section "fade-in" : "opacity-0"}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {/* Accordion Header */}
              <div className="accordion_head">
                <span>{faq.question}</span>
                <p className={`icon ${activeIndex === index ? "rotate" : ""}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path stroke="currentColor" d="M13.5 5.5 8 11 2.5 5.5" />
                  </svg>
                </p>
              </div>

              {/* Accordion Content */}
              <div
                className="accordion_content"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0px",
                  opacity: activeIndex === index ? 1 : 0,
                  transform:
                    activeIndex === index
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <p className="faq_answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    </section>
  );
}

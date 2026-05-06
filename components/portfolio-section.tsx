export function PortfolioSection() {
  const projects = [
    {
      title: "Healthcare Conversational Chatbot (Visualsoft)",
      description:
        "Built a domain-specific healthcare chatbot handling patient intake queries, symptom triage FAQs, and appointment information in Arabic and English. Designed intent classification and entity extraction pipelines tailored to medical terminology with safety guardrails. Delivered via versioned REST API for real-world clinical deployment.",
      tag: "Python · NLP · LangChain",
      bgColor: "bg-[#6366F1]",
    },
    {
      title: "Natural Language Database Query Chatbot (Visualsoft)",
      description:
        "Developed a conversational interface that translates plain natural language questions into safe, read-only SQL queries executed against live PostgreSQL databases. Built schema-awareness and query validation layers to prevent injection risks. Enabled non-technical business users to interrogate operational databases without SQL knowledge.",
      tag: "Python · Text-to-SQL · LangChain",
      bgColor: "bg-[#2F81F7]",
    },
    {
      title: "Secure Medical Document QA Chatbot (RAG)",
      description:
        "Built a fully local, privacy-first RAG chatbot over medical textbooks and clinical references with zero patient data leaving the server. FAISS vector indexing enables sub-second semantic retrieval across thousands of document chunks. Designed for offline clinical decision support environments.",
      tag: "LangChain · FAISS · Ollama",
      bgColor: "bg-[#FF6B7A]",
    },
    {
      title: "Laboratory Management Desktop Application",
      description:
        "Designed and built a desktop application for Al-Saeed University's laboratory to manage patient samples, test records, and result reporting — replacing a fully manual paper system. Implemented automated report generation, local database storage with search, filter, and export capabilities accessible to lab technicians.",
      tag: "Java · Python · SQL",
      bgColor: "bg-[#FFC224]",
    },
    {
      title: "Realistic Arabic Handwriting Generation",
      description:
        "Created a generative AI pipeline for personalised Arabic handwriting synthesis, handling all four positional character forms with dynamic image stitching for full-sentence output. Applied to educational and cultural-preservation use cases, demonstrating deep proficiency in Arabic NLP, typography, and morphological variation.",
      tag: "TensorFlow · Generative AI",
      bgColor: "bg-[#6366F1]",
    },
    {
      title: "Multi-Domain Web Platform (E-Commerce + LMS)",
      description:
        "Architected a unified full-stack platform combining e-commerce, LMS, and live dashboards as sole developer. Implemented JWT authentication, role-based access control, multilingual support, and Stripe payment integration with React, Node.js, and PostgreSQL.",
      tag: "Next.js · React · Stripe",
      bgColor: "bg-[#2F81F7]",
    },
    {
      title: "Yemen Apiaries — E-Commerce Website",
      description:
        "Built a live e-commerce store for a premium Yemeni honey brand in Australia. Created custom Shopify theme with product catalogue, blog, and mobile-first responsive design. Live at yemenapiaries.com.au with optimized SEO.",
      tag: "Shopify · Liquid · JavaScript",
      bgColor: "bg-[#FF6B7A]",
    },
    {
      title: "YouTalk Academy — English Language Institute Platform",
      description:
        "Built a full-featured LMS web platform for YouTalk Academy covering online tests, homework submission, and digital attendance tracking. Developed role-based dashboards for students, teachers, and administrators with automated grading and file upload capabilities.",
      tag: "Next.js · PostgreSQL · LMS",
      bgColor: "bg-[#FFC224]",
    },
    {
      title: "Syatibiy Academy — Arabic Language Teaching Platform",
      description:
        "Developed a dedicated online platform for Syatibiy Academy to deliver Arabic language courses with full RTL layout, Arabic typography, and bilingual support. Built course management, student progress tracking, and content delivery modules tailored to Arabic language pedagogy.",
      tag: "Next.js · RTL · Arabic",
      bgColor: "bg-[#6366F1]",
    },
  ]

  return (
    <section id="portfolio" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              Take a look at my <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">AI portfolio</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 border-[3px] border-black rounded-[28px] p-6 md:p-8 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className={`${project.bgColor} rounded-[16px] p-5 md:p-6 mb-6 inline-block`}>
                  <span className="inline-block bg-white text-[#0B0B0B] text-xs font-bold px-3 py-1.5 rounded-lg w-fit">
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-xl md:text-[22px] font-bold mb-4 leading-tight text-[#0B0B0B] group-hover:text-[#2F81F7] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-[#393939] leading-relaxed md:leading-[26px] font-medium">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

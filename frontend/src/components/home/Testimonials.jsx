import React from 'react';

const Testimonials = () => {
  return (
    <section className="container mx-auto px-6 py-20 font-mono">
      <h2 className="text-4xl font-bold mb-16 text-center text-white border-b-4 border-[#00FF9C] inline-block pb-2 px-8 uppercase tracking-widest bg-[#121212]">
        > Trusted_By
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            quote: "This tool helped us identify critical XSS vulnerabilities that we had missed in our manual testing.",
            author: "Sarah Chen",
            role: "Security Engineer, TechCorp"
          },
          {
            quote: "The detailed reports make it easy to understand and fix security issues. A must-have for any dev team.",
            author: "Michael Rodriguez",
            role: "Lead Developer, StartupX"
          },
          {
            quote: "We've integrated this scanner into our CI/CD pipeline. It's been a game-changer for our security posture.",
            author: "Jamie Wilson",
            role: "DevOps Lead, Enterprise Solutions"
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-[#121212] p-8 neo-card">
            <div className="mb-6 text-[#00FF9C]">
              <i className="fas fa-quote-left text-3xl"></i>
            </div>
            <p className="text-gray-300 mb-8 border-l-2 border-[#00FF9C] pl-4 font-bold h-24">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center pt-6 border-t-2 border-[#00FF9C]">
              <div className="w-12 h-12 bg-[#00FF9C] flex items-center justify-center mr-4 border-2 border-black">
                <i className="fas fa-user-secret text-[#121212] text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-white uppercase">{testimonial.author}</h4>
                <p className="text-sm text-[#00FF9C]">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

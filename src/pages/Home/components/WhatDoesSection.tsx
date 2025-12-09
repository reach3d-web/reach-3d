export const WhatDoesSection = () => {
  return (
    <section className="py-10 bg-white text-primary">
      <div className="container mx-auto px-4">
          <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        style={{ color: "#a61042" }}>
        What does REACH 3D do?
      </h2>

        
        <div className="max-w-4xl mx-auto space-y-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fashion is, by definition, a short lifecycle industry. What sells now many not sell a couple of months later.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fashion supply chain us hugely exploded and spans countries across many continents.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Effective collaboration between team members across design, product development, sampling, production, merchandising, and marketing in geographically distant locations is critical to getting fashion products to customers at the right time.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            REACH 3D enables Virtual, Digital Product Development and Visualization, drastically cutting down fashion product development cycle times and saving resources.
          </p>

        </div>
      </div>
    </section>
  );
};

export default WhatDoesSection;
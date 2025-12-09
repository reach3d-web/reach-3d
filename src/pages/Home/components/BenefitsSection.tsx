import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Compress Product Development Time",
      description: "Drive down product development time using intuitive tools to create 3D Digital Prototypes of apparel, garments and clothing  saving over 80 % time compared to physical prototypes."
    },
    {
      icon: Users,
      title: "Collaborate Easily",
      description: "Share the 3D Digital Products of apparel, garments, and clothing  with team members, customers, suppliers and partners, as required, easily and fast to arrive at decisions faster."
    },
    {
      icon: TrendingUp,
      title: "Accelerate Business Velocity",
      description: "Rev up your business engine and accelerate your business in the digital economy by combining easy collaboration, effective project management and by eliminating errors."
    },
    {
      icon: Star,
      title: "Save Resources",
      description: "Eliminate or minimize physical prototypes by creating realistic, life like 3D Digital Prototypes of apparel, garments, and clothing saving material resources."
    },
    {
      icon: Clock,
      title: "Easier Project Management",
      description: "Manage various projects easily by having all details of 3D Digital Products of different orders for apparel, garments,  and clothing  easily available for ready reference at any time."
    },
    {
      icon: Users,
      title: "Build a Strategic Competitive Advantage",
      description: "Returns On Investment is a function of Business Velocity and Margins. REACH 3D enables higher Margins while accelerating your Business Velocity and can help you build a long term, sustainable competitive advantage."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Benefits of REACH 3D
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          REACH 3D
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
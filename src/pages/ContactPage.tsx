
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Lightbulb } from "lucide-react";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Ready to discuss your next big idea?",
      action: "+91 9075078993",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your project details",
      action: "hello@shreejibapafoods.com",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick questions? Chat with us",
      action: "Message on WhatsApp",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const services = [
    { icon: Lightbulb, title: "Product Development", desc: "From concept to market-ready formulation" },
    { icon: Calendar, title: "Consultation", desc: "Strategic guidance for your food business" },
    { icon: Phone, title: "Lab Services", desc: "Testing, analysis, and quality assurance" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-stone-50 to-amber-50/20">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto text-center animate-cinematic-fade">
            <p className="body-text text-amber-700 font-medium tracking-wider uppercase text-sm mb-4">Let's Collaborate</p>
            <h1 className="hero-text text-6xl lg:text-7xl font-light text-stone-800 mb-8">
              What's Brewing?
            </h1>
            <p className="body-text text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              Every great product starts with a conversation. Whether you have a clear vision or just a spark of an idea, we're here to help transform it into something extraordinary.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className="group border-0 shadow-xl bg-white/90 backdrop-blur-sm premium-hover animate-cinematic-fade text-center overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 animate-soft-glow`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="hero-text text-xl font-medium text-stone-800 mb-2">
                      {method.title}
                    </CardTitle>
                    <p className="body-text text-stone-600 text-sm mb-6">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-stone-800 hover:bg-stone-900 text-stone-50 premium-hover">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="px-6 mb-24">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm animate-cinematic-fade" style={{ animationDelay: '0.6s' }}>
              <CardHeader className="text-center pb-8">
                <CardTitle className="hero-text text-3xl font-light text-stone-800 mb-4">
                  Tell Us About Your Vision
                </CardTitle>
                <p className="body-text text-stone-600">
                  Share your ideas and we'll craft a personalized approach for your project
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="body-text text-sm font-medium text-stone-800">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 bg-stone-50/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="body-text text-sm font-medium text-stone-800">Company</label>
                    <input 
                      type="text" 
                      placeholder="Your company name"
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 bg-stone-50/50"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="body-text text-sm font-medium text-stone-800">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 bg-stone-50/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="body-text text-sm font-medium text-stone-800">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+91 xxxxx xxxxx"
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 bg-stone-50/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="body-text text-sm font-medium text-stone-800">Project Type</label>
                  <select className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 bg-stone-50/50">
                    <option>Select service type</option>
                    <option>Beverage Development</option>
                    <option>Dairy Product Innovation</option>
                    <option>Food Safety Consultation</option>
                    <option>Product Launch Strategy</option>
                    <option>Custom Formulation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="body-text text-sm font-medium text-stone-800">Tell us about your project</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your vision, target market, specific requirements, or any questions you have..."
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 bg-stone-50/50 resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-stone-800 hover:bg-stone-900 text-stone-50 premium-hover animate-soft-glow py-4 text-lg">
                  Start Our Collaboration
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Quick Access */}
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-cinematic-fade" style={{ animationDelay: '0.8s' }}>
              <h2 className="hero-text text-3xl font-light text-stone-800 mb-4">How Can We Help?</h2>
              <p className="body-text text-stone-600">Choose the service that matches your needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm premium-hover animate-cinematic-fade text-center"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <service.icon className="h-12 w-12 text-amber-600 mx-auto mb-4 animate-ingredient-float" />
                    <h3 className="hero-text text-lg text-stone-800 mb-2">{service.title}</h3>
                    <p className="body-text text-stone-600 text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm animate-cinematic-fade" style={{ animationDelay: '1.2s' }}>
                <CardHeader>
                  <CardTitle className="hero-text text-2xl font-light text-stone-800 mb-6 flex items-center">
                    <MapPin className="h-6 w-6 text-amber-600 mr-3" />
                    Visit Our Lab
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="body-text text-stone-800 font-medium">Shreejibapa Foods R&D Center</p>
                    <p className="body-text text-stone-600 text-sm leading-relaxed">
                      123 Innovation Hub, Food Tech Park<br/>
                      Hinjewadi Phase 2, Pune 411057<br/>
                      Maharashtra, India
                    </p>
                  </div>
                  <div className="pt-4 border-t border-stone-200">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span className="body-text text-stone-800 font-medium text-sm">Laboratory Hours</span>
                    </div>
                    <div className="space-y-1 text-sm body-text text-stone-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="animate-cinematic-fade" style={{ animationDelay: '1.4s' }}>
                <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-stone-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-soft-glow">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="hero-text text-2xl text-stone-800 mb-4">Ready to Visit?</h3>
                    <p className="body-text text-stone-600 mb-6">
                      Schedule a tour of our state-of-the-art laboratory and see innovation in action.
                    </p>
                    <Button className="bg-stone-800 hover:bg-stone-900 text-stone-50 premium-hover">
                      Schedule Lab Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

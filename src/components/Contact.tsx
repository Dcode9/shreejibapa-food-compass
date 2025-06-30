
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Linkedin, Coffee, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Let's Talk",
      content: ["+91 9075078993", "+91 7029052441"],
      description: "Ready for a conversation about your next innovation?",
      gradient: "from-blue-50 to-cyan-50",
      iconBg: "from-blue-500 to-cyan-600"
    },
    {
      icon: Mail,
      title: "Drop Us a Line",
      content: ["info.shreejibapafoods@gmail.com"],
      description: "Share your vision with us",
      gradient: "from-emerald-50 to-teal-50",
      iconBg: "from-emerald-500 to-teal-600"
    },
    {
      icon: MapPin,
      title: "Visit Our Lab",
      content: [
        "511, GRAND CASA, PAWAR NAGAR",
        "THERGAON LINK ROAD",
        "NEAR VARDHMAN VATIKA",
        "BESIDE SUKHAWANI KINGSLEY",
        "CHICNHWAD, PUNE- 411033"
      ],
      description: "Experience innovation firsthand",
      gradient: "from-amber-50 to-orange-50",
      iconBg: "from-amber-500 to-orange-600",
      span: true
    },
    {
      icon: Linkedin,
      title: "Connect & Collaborate",
      content: ["Follow our journey of innovation"],
      description: "Join our professional community",
      gradient: "from-purple-50 to-violet-50",
      iconBg: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl animate-liquid-flow"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-stone-300/20 rounded-full blur-2xl animate-ingredient-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-cinematic-fade">
          <p className="body-text text-amber-700 font-medium tracking-wider uppercase text-sm mb-4">Let's Collaborate</p>
          <h2 className="hero-text text-5xl lg:text-6xl font-light text-stone-800 mb-8">
            What's Brewing in
            <span className="block font-medium">Your Lab?</span>
          </h2>
          <p className="body-text text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            Every great innovation starts with a conversation. Let's explore how we can transform your culinary vision into market-ready excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactMethods.map((contact, index) => (
                <Card 
                  key={index}
                  className={`group border-0 shadow-lg bg-gradient-to-br ${contact.gradient} premium-hover cursor-pointer animate-cinematic-fade overflow-hidden ${contact.span ? 'md:col-span-2' : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader className="pb-4 relative">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${contact.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 animate-soft-glow`}>
                          <contact.icon className="h-7 w-7 text-white transition-transform duration-500 group-hover:rotate-12" />
                        </div>
                        <div>
                          <CardTitle className="hero-text text-xl font-medium text-stone-800 group-hover:text-stone-900 transition-colors duration-300 mb-1">
                            {contact.title}
                          </CardTitle>
                          <p className="body-text text-sm text-stone-600">{contact.description}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-stone-400 group-hover:text-stone-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {contact.content.map((line, i) => (
                        <p key={i} className="body-text text-stone-700 group-hover:text-stone-900 transition-colors duration-300">{line}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm premium-hover animate-cinematic-fade overflow-hidden" style={{ animationDelay: '0.6s' }}>
            <CardHeader className="relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center animate-soft-glow">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="hero-text text-2xl font-medium text-stone-800">Start the Conversation</CardTitle>
                  <p className="body-text text-sm text-stone-600">Tell us about your project</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 w-20 h-20 bg-amber-100/30 rounded-full blur-xl animate-parallax-slow"></div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="body-text text-sm font-medium text-stone-700">Your Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 bg-white/80 backdrop-blur-sm transition-colors duration-300" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="body-text text-sm font-medium text-stone-700">Email Address</label>
                  <Input 
                    placeholder="john@company.com" 
                    type="email" 
                    className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 bg-white/80 backdrop-blur-sm transition-colors duration-300" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="body-text text-sm font-medium text-stone-700">Company</label>
                  <Input 
                    placeholder="Your Company" 
                    className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 bg-white/80 backdrop-blur-sm transition-colors duration-300" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="body-text text-sm font-medium text-stone-700">Phone</label>
                  <Input 
                    placeholder="+91 12345 67890" 
                    className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 bg-white/80 backdrop-blur-sm transition-colors duration-300" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="body-text text-sm font-medium text-stone-700">Project Vision</label>
                <Input 
                  placeholder="What innovation are you dreaming of?" 
                  className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 bg-white/80 backdrop-blur-sm transition-colors duration-300" 
                />
              </div>
              <div className="space-y-2">
                <label className="body-text text-sm font-medium text-stone-700">Tell Us More</label>
                <Textarea 
                  placeholder="Share your vision, challenges, or questions. We're here to help transform your ideas into reality..."
                  className="min-h-32 border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 bg-white/80 backdrop-blur-sm transition-colors duration-300 resize-none"
                />
              </div>
              <Button className="w-full bg-stone-800 hover:bg-stone-900 text-stone-50 py-6 text-lg premium-hover animate-soft-glow">
                Begin Our Journey Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-cinematic-fade" style={{ animationDelay: '1s' }}>
          <p className="body-text text-lg text-stone-600 mb-4">Ready to innovate?</p>
          <button className="soft-underline hero-text text-xl text-stone-800 hover:text-amber-700 transition-colors duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

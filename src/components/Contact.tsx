
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Any Questions? Feel Free to Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our expert consultants today. Let's discuss how we can help you achieve your food and beverage business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Phone, title: "Call Us", content: ["+91 9075078993", "+91 7029052441"] },
                { icon: Mail, title: "Email Us", content: ["info.shreejibapafoods@gmail.com"] },
                { icon: MapPin, title: "Visit Us", content: ["511, GRAND CASA, PAWAR NAGAR,", "THERGAON LINK ROAD,", "NEAR VARDHMAN VATIKA,", "BESIDE SUKHAWANI KINGSLEY,", "CHICNHWAD, PUNE- 411033"], span: true },
                { icon: Linkedin, title: "Connect With Us", content: ["Follow us on LinkedIn for updates and industry insights"] }
              ].map((contact, index) => (
                <Card 
                  key={index}
                  className={`border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in group ${contact.span ? 'sm:col-span-2' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-2 group-hover:bg-orange-700 transition-all duration-300 group-hover:scale-110">
                      <contact.icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-orange-600 transition-colors duration-300">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {contact.content.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="border-gray-300 focus:border-orange-600 transition-colors duration-300" />
                <Input placeholder="Your Email" type="email" className="border-gray-300 focus:border-orange-600 transition-colors duration-300" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Company Name" className="border-gray-300 focus:border-orange-600 transition-colors duration-300" />
                <Input placeholder="Phone Number" className="border-gray-300 focus:border-orange-600 transition-colors duration-300" />
              </div>
              <Input placeholder="Subject" className="border-gray-300 focus:border-orange-600 transition-colors duration-300" />
              <Textarea 
                placeholder="Tell us about your project and how we can help you..."
                className="min-h-32 border-gray-300 focus:border-orange-600 transition-colors duration-300"
              />
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

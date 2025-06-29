
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Food Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our expert consultants today. Let's discuss how we can help you achieve your food business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-2">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 87654 32109</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-2">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">info@shreejibapafoods.com</p>
                  <p className="text-gray-600">consult@shreejibapafoods.com</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    123 Food Street<br />
                    Business District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM<br />
                    Sun: Closed
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="border-gray-300" />
                <Input placeholder="Your Email" type="email" className="border-gray-300" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Company Name" className="border-gray-300" />
                <Input placeholder="Phone Number" className="border-gray-300" />
              </div>
              <Input placeholder="Subject" className="border-gray-300" />
              <Textarea 
                placeholder="Tell us about your project and how we can help you..."
                className="min-h-32 border-gray-300"
              />
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg">
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

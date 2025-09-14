import { MapPin, Clock, Phone } from "lucide-react";

const hours = [
  { day: "Monday - Friday", time: "07:00 - 19:00 " },
  { day: "Saturday - Sunday", time: "09:00 - 17:00" },
  // { day: "Sunday", time: "7:00 AM - 7:00 PM" },
];

export default function LocationHours() {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find us in the heart of the city, where great coffee and community
            come together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          {/* <div className="relative">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive Map Coming Soon
                </p>
              </div>
            </div>
          </div> */}
          <div className="relative">
            <div className="bg-muted rounded-lg h-96 overflow-hidden border border-border mb-4">
              <iframe
                src="https://maps.google.com/maps?q=Roots%2096%2C%20Bulevardul%20Carol%20I%201%2C%20Iași%20700028&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>

            <a
              href="https://maps.google.com/maps?q=Roots+96+Bulevardul+Carol+I+1+Iași+700028"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Get Directions
            </a>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Bulevardul Carol I 1,
                    <br />
                    Iași 700028
                    <br />
                    {/* City, State 1s2345 */}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    Hours
                  </h3>
                  <div className="space-y-2">
                    {hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">
                          {schedule.day}
                        </span>
                        <span className="text-card-foreground font-medium">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Contact
                  </h3>
                  <p className="text-muted-foreground">
                    Phone: 0755 170 093
                    <br />
                    {/* Email: hello@roots96.coffee */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

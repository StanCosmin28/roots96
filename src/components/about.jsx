import data from "../Model/data";

export default function About() {
  const { ourStory } = { ...data };
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              🌿 It takes a village to build Roots 96 🌿
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today you get to meet Elis and Bogdan, the two founders of Roots
              96.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              She is a fashion designer, he is a physiotherapist - two people
              from different fields, but with the same desire to bring something
              new and good to the city. This is how Roots 96 was born: a concept
              store where #healthyisthenewcool.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2025</div>
                <div className="text-sm text-muted-foreground">Since</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15k+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Sustainable Sourcing
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={ourStory}
              alt="Coffee roasting process"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-4 bg-card p-6 rounded-lg shadow-lg border border-border">
              <div className="text-2xl font-bold text-card-foreground italic">
                "It takes a village
              </div>
              <div className="text-2xl font-bold text-card-foreground italic">
                to build Roots 96"
              </div>
              {/* <div className="text-sm text-muted-foreground"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

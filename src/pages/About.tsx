import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="section-container">
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">About</p>
      <h1 className="font-heading text-4xl md:text-5xl leading-tight max-w-[600px]">
        Designing with empathy, building with structure
      </h1>

      <div className="mt-10 max-w-[650px] space-y-5 text-muted-foreground leading-relaxed">
        <p>
          I'm Ava Thompson, a UX designer based in Portland, Oregon. I specialize in turning complex workflows
          into intuitive digital experiences — with a focus on healthcare, fintech, and consumer products.
        </p>
        <p>
          With four years of experience across startups and agencies, I've developed a practice rooted in
          research rigor, design systems thinking, and close collaboration with engineering teams. I believe
          the best interfaces feel invisible.
        </p>
        <p>
          When I'm not designing, I'm usually sketching at a coffee shop, experimenting with ceramic glazes,
          or mentoring junior designers through local meetups.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-[650px]">
        {[
          { label: "Approach", value: "Research-driven, systems-oriented" },
          { label: "Focus areas", value: "Healthcare, Fintech, Consumer" },
          { label: "Currently", value: "Open to new opportunities" },
        ].map((item) => (
          <div key={item.label} className="border-t border-border pt-4">
            <p className="text-xs tracking-widest uppercase text-muted-foreground">{item.label}</p>
            <p className="mt-1 text-sm text-foreground">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default About;

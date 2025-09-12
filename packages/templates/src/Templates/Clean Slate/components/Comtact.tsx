"use client"
import AnimatedSection from './AnimatedSection';

export default function Contact({link}:{link:string}) {
  return (
    <section className="space-y-6 px-6">
      <AnimatedSection>
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-foreground text-xl md:text-xl font-semibold leading-relaxed">
            Get in touch
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-normal leading-relaxed">
            Building something that needs to convert? Need a design engineer who actually ships products that make money? I&apos;m down to work on projects that solve real problems. Hit me up if you&apos;re serious about results.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="flex md:flex-row flex-col justify-center md:justify-start items-center gap-3">
          <a target="_blank" className="w-full md:w-auto" href={link}>
            <button
              className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-foreground text-background hover:bg-foreground/90 focus:ring-foreground px-5 py-3 text-sm rounded-xl w-full md:w-auto"
              type="button"
            >
              Send Message
            </button>
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}

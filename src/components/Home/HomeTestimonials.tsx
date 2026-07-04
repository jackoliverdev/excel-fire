"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  title: string;
  quote: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    title: "Thorough & Professional",
    quote: "Excel Fire are both thorough and professional. I would highly recommend their service.",
    author: "Pat Mangan",
    role: "United Living",
  },
  {
    title: "Amazing at his job",
    quote:
      "The operative was very friendly and took his time. The quality and finish were excellent from start to finish.",
    author: "Council Tenant",
    role: "Gilmartins",
  },
  {
    title: "Tidiest fire stopping ever seen",
    quote:
      "Thank you to your team. We have received positive comments on execution and quality of works throughout.",
    author: "Amanda Holland",
    role: "McConnell",
  },
  {
    title: "Mega positive",
    quote: "Your team has shown great feedback and our clients are mega positive. Please pass on the message.",
    author: "The Team",
    role: "Hill Homes",
  },
  {
    title: "Performed beyond expectations",
    quote:
      "They delivered quality and performed beyond expectation, with strong communication from start to finish.",
    author: "Jake Bates",
    role: "Engie",
  },
  {
    title: "Very happy",
    quote:
      "Everyone was very happy with the workmanship. Feedback from directors and project managers has been excellent.",
    author: "IPB Ltd",
    role: "Client Team",
  },
  {
    title: "Just great",
    quote:
      "Very knowledgeable and approachable throughout. Great service, great people, and we look forward to continued work together.",
    author: "Senior Site Manager",
    role: "United Living",
  },
  {
    title: "Made so simple",
    quote:
      "Thank you for your patience and support. You made a complex process feel straightforward for our team.",
    author: "Megan O'Flynn",
    role: "K10 FM",
  },
  {
    title: "Very professional",
    quote: "Very professional from start to finish. We look forward to seeing you much more in the near future.",
    author: "Dave Clay",
    role: "Axis Europe",
  },
  {
    title: "Extremely helpful",
    quote:
      "Excel Fire have been extremely helpful on a challenging project, consistently responsive and reliable.",
    author: "Lewis Melsi",
    role: "Operations Manager, United Living",
  },
  {
    title: "Stand-up work",
    quote:
      "If you are looking for stand-up work from contractors, these guys deliver. One of the best teams we have worked with.",
    author: "Michelle Forsyth",
    role: "A2Dominion Property & Block Management",
  },
  {
    title: "High standard of workmanship",
    quote: "The HIBC approved every one of your firestoppers and remarked on the high standard of workmanship.",
    author: "DC",
    role: "Weston Group Plc",
  },
  {
    title: "Great service, great people",
    quote: "Excel Fire have been a valued addition to our supply chain. Great service, great people.",
    author: "Dan Read",
    role: "Boom Construction Ltd",
  },
  {
    title: "Proactive and innovative",
    quote:
      "They have been proactive and innovative where others struggled, delivering practical solutions in difficult locations.",
    author: "Dave Fogarty",
    role: "TSB Contractors",
  },
  {
    title: "Knowledgeable and reassuring",
    quote: "Excel Fire were a credit to us and our client, knowledgeable and reassuring throughout delivery.",
    author: "Alexander Charter",
    role: "TTL",
  },
  {
    title: "Joy to work with",
    quote:
      "Excel Fire Ltd were a joy to work with. They were approachable, in-depth, and left me fully confident in compliance.",
    author: "Maria Sojilane",
    role: "Client",
  },
  {
    title: "Must give praise",
    quote:
      "The works were carried out to a high standard and people were trained with care. Please pass on my thanks.",
    author: "N. S. Durkan",
    role: "Client Feedback",
  },
  {
    title: "Above and beyond",
    quote:
      "Working with Excel Fire, I found them extremely professional and helpful at all times. They have gone above and beyond.",
    author: "Ashleigh Wallis",
    role: "United Living",
  },
  {
    title: "Thank you for your exceptional work",
    quote:
      "The quality of the works has been highlighted by our client, and your team have proven to be a great asset.",
    author: "R. Lacatis",
    role: "Company Manager, IPB Limited",
  },
];

export function HomeTestimonials() {
  const ROTATE_MS = 3000;
  const TICK_MS = 60;
  const circleRadius = 7;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = testimonials[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    let elapsed = 0;
    const intervalId = window.setInterval(() => {
      elapsed += TICK_MS;
      if (elapsed >= ROTATE_MS) {
        elapsed = 0;
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setProgress(0);
        return;
      }
      setProgress(elapsed / ROTATE_MS);
    }, TICK_MS);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, isPaused]);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-5">
          <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">Core testimonials</p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            What clients say about Excel Fire
          </h2>
        </div>

        <article
          className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-4 md:p-5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-accent">{active.title}</p>
              <p className="mt-2 line-clamp-3 text-base leading-7 text-foreground">&ldquo;{active.quote}&rdquo;</p>
              <div className="mt-3">
                <p className="text-xs font-semibold text-foreground">{active.author}</p>
                <p className="text-xs text-[var(--text-muted)]">{active.role}</p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goToIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-foreground transition hover:border-brand-accent hover:text-brand-accent"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goToIndex((activeIndex + 1) % testimonials.length)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-foreground transition hover:border-brand-accent hover:text-brand-accent"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const strokeOffset = circleCircumference - progress * circleCircumference;

              return (
                <button
                  key={`${testimonial.title}-${testimonial.author}`}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => goToIndex(index)}
                  className="relative inline-flex h-5 w-5 items-center justify-center rounded-full"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition ${
                      isActive ? "bg-brand-accent" : "bg-[var(--text-muted)]/50 hover:bg-brand-accent"
                    }`}
                  />
                  {isActive ? (
                    <svg
                      viewBox="0 0 20 20"
                      className="pointer-events-none absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-90"
                      aria-hidden="true"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r={circleRadius}
                        fill="none"
                        stroke="var(--border)"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r={circleRadius}
                        fill="none"
                        stroke="var(--brand-accent)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeOffset}
                      />
                    </svg>
                  ) : null}
                </button>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}


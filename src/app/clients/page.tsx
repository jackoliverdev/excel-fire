import { HomeClientsCarousel } from "@/components/Home/HomeClientsCarousel";

export default function ClientsPage() {
  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-5">
          <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">Clients</p>
          <h1 className="text-foreground mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Trusted by teams across England
          </h1>
          <p className="mt-3 max-w-[66ch] text-sm leading-7 text-[var(--text-muted)] md:text-base">
            Excel Fire supports housing providers, principal contractors and public-sector organisations with
            practical fire safety delivery.
          </p>
        </div>
      </div>
      <HomeClientsCarousel />
    </section>
  );
}


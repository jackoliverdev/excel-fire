import { LogoVideo } from "@/components/Brand/LogoVideo";

export function ComingSoonScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#03060a] px-6 text-center">
      <div className="space-y-6">
        <div className="mx-auto h-16 w-[220px] overflow-hidden">
          <LogoVideo className="h-full w-full scale-[1.05] object-cover object-center" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 md:text-base">
          Coming Soon
        </p>
      </div>
    </main>
  );
}

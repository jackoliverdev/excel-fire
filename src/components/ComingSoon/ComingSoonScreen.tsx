import { LogoVideo } from "@/components/Brand/LogoVideo";

export function ComingSoonScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#03060a] px-6 text-center">
      <div className="space-y-6">
        <LogoVideo className="mx-auto w-[300px]" priority plays={3} />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 md:text-base">
          Coming Soon
        </p>
      </div>
    </main>
  );
}

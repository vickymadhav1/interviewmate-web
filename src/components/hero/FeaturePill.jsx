export default function FeaturePill({ children }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-md transition hover:border-violet-500 hover:bg-violet-500/10">
      {children}
    </div>
  );
}
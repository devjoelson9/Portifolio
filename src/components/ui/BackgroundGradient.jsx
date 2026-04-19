export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Light mode gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl dark:hidden"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl dark:hidden"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl dark:hidden"></div>
      
      {/* Dark mode gradients */}
      <div className="hidden dark:block absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="hidden dark:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="hidden dark:block absolute top-1/2 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>
  );
}
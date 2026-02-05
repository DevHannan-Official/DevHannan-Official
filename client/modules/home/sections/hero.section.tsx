import ActionButtons from "@/components/ui/action-buttons";

const HeroSection = () => {
  return (
    <section
      id="hero about"
      className="w-screen min-h-dvh pt-20 flex flex-col  items-center justify-center gap-4 px-4"
      style={{
        backgroundColor: "#111111",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='0.64' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-3xl flex flex-col gap-4 bg-background p-8 rounded-lg">
        <div className="flex items-center justify-between">
          <p className="text-foreground/80 text-lg font-medium">
            <span className="text-primary">➜ ~</span> whoami{" "}
            <span className="text-terminal-cyan animate-blink text-primary font-bold">
              _
            </span>
          </p>
          <ActionButtons />
        </div>
        <h2 className="text-foreground text-6xl font-bold flex">
          Hannan Dev<span className="text-primary">|</span>
        </h2>
        <h3 className="text-foreground/65 text-xl font-semibold">
          &gt; Full Stack Developer
        </h3>
        <div
          contentEditable={false}
          className="bg-card hover:bg-primary/5 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap border border-foreground/20 transition-colors duration-150 ease-linear"
        >
          <span className="text-foreground/60 mb-4 mt-6">// About me</span>
          <br />
          I build accessible, pixel-perfect, performant web experiences.
          Obsessed with clean code and command-line interfaces.
          <br />
          <br />
          <span className="text-foreground/60 mb-4 mt-6">
            // Current Status
          </span>
          <br />
          <span className="text-primary">✓</span> Open to new opportunities
          <br />
          <span className="text-primary">✓</span> Shipping code daily
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

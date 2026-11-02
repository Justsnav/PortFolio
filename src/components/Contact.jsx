export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
      <div className="hard-border hard-shadow-lg rounded-[2.5rem] bg-white p-6 sm:p-10">
        <div className="flex items-center justify-between border-b-[3px] border-ink pb-4">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Let's Connect
          </h2>
          <span className="hard-border rounded-full bg-teal px-3 py-1 text-xs font-bold">
            ● Available for work
          </span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="hard-border rounded-xl bg-cream px-4 py-3 font-semibold placeholder:text-ink/40 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="hard-border rounded-xl bg-cream px-4 py-3 font-semibold placeholder:text-ink/40 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="hard-border rounded-xl bg-cream px-4 py-3 font-semibold placeholder:text-ink/40 focus:outline-none"
            />
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="hard-border hard-shadow-sm press-effect rounded-full bg-coral px-6 py-2.5 font-bold"
              >
                Send
              </button>
              <button
                type="reset"
                className="hard-border hard-shadow-sm press-effect rounded-full bg-white px-6 py-2.5 font-bold"
              >
                Reset
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-4">
            <div className="hard-border rounded-2xl bg-forest p-5 text-cream">
              <p className="text-xs font-bold uppercase tracking-wide text-cream/60">
                Connect
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <div className="h-2 w-full rounded-full bg-gradient-to-r from-coral to-gold" />
                <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-teal to-forest-light" />
              </div>
            </div>

            <a
              href="003abhinavkumar@gmail.com"
              className="hard-border hard-shadow-sm press-effect rounded-full bg-gold px-5 py-3 text-center font-bold"
            >
              Email
            </a>
            <a
              href="https://github.com/justsnav"
              target="_blank"
              rel="noreferrer"
              className="hard-border hard-shadow-sm press-effect rounded-full bg-white px-5 py-3 text-center font-bold"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kumar-abhi-nav/"
              target="_blank"
              rel="noreferrer"
              className="hard-border hard-shadow-sm press-effect rounded-full bg-white px-5 py-3 text-center font-bold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

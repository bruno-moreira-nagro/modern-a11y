export default function SemanticPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <header className="bg-indigo-700 text-white px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-100 block mb-0.5">
            &lt;header&gt;
          </span>
          <a href="/" className="text-xl font-bold hover:underline">
            A11y Blog
          </a>
        </div>

        <nav aria-label="Main navigation">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-100 block mb-1">
            &lt;nav&gt;
          </span>
          <ul className="flex gap-6 list-none m-0 p-0">
            <li><a href="#" className="hover:underline text-sm">Home</a></li>
            <li><a href="#" className="hover:underline text-sm">Articles</a></li>
            <li><a href="#" className="hover:underline text-sm">About</a></li>
          </ul>
        </nav>
      </header>

      {/* ── PAGE BODY ─────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex gap-8">

        {/* ── MAIN ──────────────────────────────────────────────── */}
        <main className="flex-1 min-w-0" aria-label="Article content">
          <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest">
            &lt;main&gt;
          </span>

          <h1 className="text-3xl font-bold mt-1 mb-6">
            Why Semantic HTML Matters for Accessibility
          </h1>

          {/* Section 1 */}
          <section aria-labelledby="intro-heading" className="mb-8">
            <span className="text-xs font-mono text-sky-700 uppercase tracking-widest">
              &lt;section&gt;
            </span>
            <h2 id="intro-heading" className="text-xl font-semibold mt-1 mb-3">
              Introduction
            </h2>
            <p className="leading-relaxed text-gray-700">
              Semantic HTML uses elements that carry meaning beyond presentation.
              Screen readers, search engines, and browser tools all rely on these
              signals to understand the structure of a page. When we write{' '}
              <code className="bg-gray-100 px-1 rounded text-sm">&lt;nav&gt;</code> instead
              of <code className="bg-gray-100 px-1 rounded text-sm">&lt;div class="nav"&gt;</code>,
              we communicate intent — not just appearance.
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="landmarks-heading" className="mb-8">
            <span className="text-xs font-mono text-sky-700 uppercase tracking-widest">
              &lt;section&gt;
            </span>
            <h2 id="landmarks-heading" className="text-xl font-semibold mt-1 mb-3">
              Landmark Regions
            </h2>
            <p className="leading-relaxed text-gray-700 mb-4">
              Landmarks let screen reader users jump directly to the part of the
              page they need. The most common landmark elements are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><code className="bg-gray-100 px-1 rounded text-sm">&lt;header&gt;</code> — site or section header</li>
              <li><code className="bg-gray-100 px-1 rounded text-sm">&lt;nav&gt;</code> — navigation links</li>
              <li><code className="bg-gray-100 px-1 rounded text-sm">&lt;main&gt;</code> — primary content (one per page)</li>
              <li><code className="bg-gray-100 px-1 rounded text-sm">&lt;aside&gt;</code> — complementary content</li>
              <li><code className="bg-gray-100 px-1 rounded text-sm">&lt;footer&gt;</code> — site or section footer</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="headings-heading" className="mb-8">
            <span className="text-xs font-mono text-sky-700 uppercase tracking-widest">
              &lt;section&gt;
            </span>
            <h2 id="headings-heading" className="text-xl font-semibold mt-1 mb-3">
              Heading Hierarchy
            </h2>
            <p className="leading-relaxed text-gray-700">
              Headings are the primary navigation tool for screen reader users.
              One <code className="bg-gray-100 px-1 rounded text-sm">&lt;h1&gt;</code> per page,
              then <code className="bg-gray-100 px-1 rounded text-sm">&lt;h2&gt;</code> for major
              sections, <code className="bg-gray-100 px-1 rounded text-sm">&lt;h3&gt;</code> for
              subsections — never skip levels just to change visual size. Use CSS
              for that instead.
            </p>
          </section>
        </main>

        {/* ── ASIDE ─────────────────────────────────────────────── */}
        <aside
          className="w-72 shrink-0"
          aria-label="Related resources"
        >
          <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">
            &lt;aside&gt;
          </span>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mt-1 mb-6">
            <h2 className="font-semibold text-base mb-3">Table of Contents</h2>
            <nav aria-label="Table of contents">
              <ol className="list-decimal list-inside space-y-1 text-sm text-indigo-700">
                <li><a href="#intro-heading" className="hover:underline">Introduction</a></li>
                <li><a href="#landmarks-heading" className="hover:underline">Landmark Regions</a></li>
                <li><a href="#headings-heading" className="hover:underline">Heading Hierarchy</a></li>
              </ol>
            </nav>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h2 className="font-semibold text-base mb-3">Related Articles</h2>
            <ul className="space-y-2 text-sm list-none p-0">
              <li>
                <a href="#" className="text-indigo-700 hover:underline">
                  ARIA Roles Explained
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 hover:underline">
                  Keyboard Navigation Patterns
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-700 hover:underline">
                  Color Contrast & WCAG 2.2
                </a>
              </li>
            </ul>
          </div>
        </aside>

      </div>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-gray-800 text-gray-300 px-6 py-8 mt-4">
        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-4">
          &lt;footer&gt;
        </span>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <p className="font-semibold text-white mb-1">A11y Blog</p>
            <p className="text-sm">Making the web accessible for everyone.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="font-semibold text-white mb-2 text-sm">Links</p>
            <ul className="space-y-1 text-sm list-none p-0">
              <li><a href="#" className="hover:text-white hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Accessibility Statement</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
        <p className="text-center text-xs text-gray-500 mt-8">
          © 2026 A11y Blog. Built with semantic HTML.
        </p>
      </footer>

    </div>
  );
}

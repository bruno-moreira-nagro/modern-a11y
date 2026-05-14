export default function NotSemanticPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* ── "HEADER" ──────────────────────────────────────────────── */}
      <div className="bg-indigo-700 text-white px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-300 block mb-0.5">
            &lt;div&gt;
          </span>
          <a href="/" className="text-xl font-bold hover:underline">
            A11y Blog
          </a>
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-300 block mb-1">
            &lt;div&gt;
          </span>
          <div className="flex gap-6">
            <div><a href="#" className="hover:underline text-sm">Home</a></div>
            <div><a href="#" className="hover:underline text-sm">Articles</a></div>
            <div><a href="#" className="hover:underline text-sm">About</a></div>
          </div>
        </div>
      </div>

      {/* ── PAGE BODY ─────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex gap-8">

        {/* ── "MAIN" ────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">
          <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">
            &lt;div&gt;
          </span>

          <div className="text-3xl font-bold mt-1 mb-6">
            Why Semantic HTML Matters for Accessibility
          </div>

          {/* "Section" 1 */}
          <div className="mb-8">
            <span className="text-xs font-mono text-sky-600 uppercase tracking-widest">
              &lt;div&gt;
            </span>
            <div className="text-xl font-semibold mt-1 mb-3">
              Introduction
            </div>
            <div className="leading-relaxed text-gray-700">
              Semantic HTML uses elements that carry meaning beyond presentation.
              Screen readers, search engines, and browser tools all rely on these
              signals to understand the structure of a page. When we write{' '}
              <span className="bg-gray-100 px-1 rounded text-sm">&lt;nav&gt;</span> instead
              of <span className="bg-gray-100 px-1 rounded text-sm">&lt;div class="nav"&gt;</span>,
              we communicate intent — not just appearance.
            </div>
          </div>

          {/* "Section" 2 */}
          <div className="mb-8">
            <span className="text-xs font-mono text-sky-600 uppercase tracking-widest">
              &lt;div&gt;
            </span>
            <div className="text-xl font-semibold mt-1 mb-3">
              Landmark Regions
            </div>
            <div className="leading-relaxed text-gray-700 mb-4">
              Landmarks let screen reader users jump directly to the part of the
              page they need. The most common landmark elements are:
            </div>
            <div className="text-gray-700">
              <div className="mb-2">— <span className="bg-gray-100 px-1 rounded text-sm">&lt;header&gt;</span> — site or section header</div>
              <div className="mb-2">— <span className="bg-gray-100 px-1 rounded text-sm">&lt;nav&gt;</span> — navigation links</div>
              <div className="mb-2">— <span className="bg-gray-100 px-1 rounded text-sm">&lt;main&gt;</span> — primary content (one per page)</div>
              <div className="mb-2">— <span className="bg-gray-100 px-1 rounded text-sm">&lt;aside&gt;</span> — complementary content</div>
              <div className="mb-2">— <span className="bg-gray-100 px-1 rounded text-sm">&lt;footer&gt;</span> — site or section footer</div>
            </div>
          </div>

          {/* "Section" 3 */}
          <div className="mb-8">
            <span className="text-xs font-mono text-sky-600 uppercase tracking-widest">
              &lt;div&gt;
            </span>
            <div className="text-xl font-semibold mt-1 mb-3">
              Heading Hierarchy
            </div>
            <div className="leading-relaxed text-gray-700">
              Headings are the primary navigation tool for screen reader users.
              One <span className="bg-gray-100 px-1 rounded text-sm">&lt;h1&gt;</span> per page,
              then <span className="bg-gray-100 px-1 rounded text-sm">&lt;h2&gt;</span> for major
              sections, <span className="bg-gray-100 px-1 rounded text-sm">&lt;h3&gt;</span> for
              subsections — never skip levels just to change visual size. Use CSS
              for that instead.
            </div>
          </div>
        </div>

        {/* ── "ASIDE" ───────────────────────────────────────────── */}
        <div className="w-72 shrink-0">
          <span className="text-xs font-mono text-amber-600 uppercase tracking-widest">
            &lt;div&gt;
          </span>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mt-1 mb-6">
            <div className="font-semibold text-base mb-3">Table of Contents</div>
            <div>
              <div className="mb-1 text-sm text-indigo-700">1. <a href="#" className="hover:underline">Introduction</a></div>
              <div className="mb-1 text-sm text-indigo-700">2. <a href="#" className="hover:underline">Landmark Regions</a></div>
              <div className="mb-1 text-sm text-indigo-700">3. <a href="#" className="hover:underline">Heading Hierarchy</a></div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="font-semibold text-base mb-3">Related Articles</div>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-indigo-700 hover:underline">ARIA Roles Explained</a></div>
              <div><a href="#" className="text-indigo-700 hover:underline">Keyboard Navigation Patterns</a></div>
              <div><a href="#" className="text-indigo-700 hover:underline">Color Contrast & WCAG 2.2</a></div>
            </div>
          </div>
        </div>

      </div>

      {/* ── "FOOTER" ──────────────────────────────────────────────── */}
      <div className="bg-gray-800 text-gray-300 px-6 py-8 mt-4">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">
          &lt;div&gt;
        </span>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <div className="font-semibold text-white mb-1">A11y Blog</div>
            <div className="text-sm">Making the web accessible for everyone.</div>
          </div>
          <div>
            <div className="font-semibold text-white mb-2 text-sm">Links</div>
            <div className="space-y-1 text-sm">
              <div><a href="#" className="hover:text-white hover:underline">Privacy Policy</a></div>
              <div><a href="#" className="hover:text-white hover:underline">Accessibility Statement</a></div>
              <div><a href="#" className="hover:text-white hover:underline">Contact</a></div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">
          © 2026 A11y Blog. Built with semantic HTML.
        </div>
      </div>

    </div>
  );
}

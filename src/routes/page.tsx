import { Helmet } from '@modern-js/runtime/head';
import { useNavigate } from '@modern-js/runtime/router';
import useVerticalNavigation from '../hooks/navigation/useVerticalNavigation';

const ROUTES = [
  {
    href: '/semantic',
    title: 'Semantic HTML',
    description:
      'A blog post built with proper semantic elements — header, nav, main, section, aside, and footer — with each landmark labeled inline.',
  },
  {
    href: '/not-semantic',
    title: 'Non-Semantic HTML',
    description:
      'The same page rebuilt with divs only. Compare how removing semantic elements strips structural meaning from the document.',
  },
  {
    href: '/interactive-list',
    title: 'Interactive List',
    description:
      "An accessible list with roving tabindex keyboard navigation. Use arrow keys to move between items and Tab to reach each item's action.",
  },
  {
    href: '/interactive-menu',
    title: 'Interactive Menu',
    description:
      'An ARIA-compliant dropdown menu. Open with Enter, Space, or ↓; navigate with arrow keys; close with Escape.',
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [ulRef, onKeyDown, focusIndex] = useVerticalNavigation(
    ROUTES.length - 1,
    index => navigate(ROUTES[index].href),
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Helmet>
        <title>A11y Blog</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>

      <header className="bg-indigo-700 text-white px-6 py-5">
        <h1 className="text-2xl font-bold">A11y Blog</h1>
        <p className="text-indigo-200 text-sm mt-1">
          Accessibility patterns and interactive examples
        </p>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-2">Explore the demos</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Hands-on examples covering semantic HTML, keyboard navigation, and
          ARIA patterns. Tab into the list, then use{' '}
          <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">
            ↑
          </kbd>{' '}
          and{' '}
          <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">
            ↓
          </kbd>{' '}
          to navigate, then{' '}
          <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">
            Enter
          </kbd>{' '}
          to open.
        </p>

        <nav aria-label="Demo pages">
          <ul
            ref={ulRef}
            onKeyDown={onKeyDown}
            className="space-y-4 list-none p-0 m-0 outline-none"
            aria-label="Demo pages list"
          >
            {ROUTES.map(({ href, title, description }, index) => {
              const isCurrent =
                focusIndex >= 0 ? focusIndex === index : index === 0;
              return (
                <li
                  key={href}
                  tabIndex={isCurrent ? 0 : -1}
                  onClick={() => navigate(href)}
                  className={[
                    'flex flex-col gap-1 px-5 py-4 rounded-xl border cursor-pointer outline-none transition-colors',
                    'focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',
                    'bg-white border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/40',
                  ].join(' ')}
                >
                  <a
                    href={href}
                    tabIndex={-1}
                    className="font-semibold text-indigo-700 no-underline focus:outline-none"
                    aria-hidden="false"
                  >
                    {title}
                  </a>
                  <span className="text-sm text-gray-600 leading-relaxed">
                    {description}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default Index;

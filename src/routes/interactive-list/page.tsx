import { useState } from 'react';
import useVerticalNavigation from '../../hooks/navigation/useVerticalNavigation';

const ITEMS = [
  { id: 1, label: 'Semantic HTML', description: 'Use the right element for the right purpose' },
  { id: 2, label: 'Keyboard Navigation', description: 'Every interaction must be reachable without a mouse' },
  { id: 3, label: 'Focus Management', description: 'Control where focus goes after dynamic changes' },
  { id: 4, label: 'ARIA Labels', description: 'Describe elements that have no visible text' },
  { id: 5, label: 'Color Contrast', description: 'Minimum 4.5:1 ratio for normal text (WCAG AA)' },
  { id: 6, label: 'Skip Links', description: 'Let keyboard users jump past repeated navigation' },
];

export default function InteractiveListPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [ulRef, onKeyDown, focusIndex] = useVerticalNavigation(
    ITEMS.length - 1,
    (index) => setSelectedId(ITEMS[index].id),
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      <header className="bg-indigo-700 text-white px-6 py-4">
        <a href="/" className="text-xl font-bold hover:underline">A11y Blog</a>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">Interactive List</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Tab into the list, then use <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">↑</kbd> and{' '}
          <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">↓</kbd> to navigate between items.
          Press <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">Tab</kbd> to move into the item's button,{' '}
          <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">Enter</kbd> or click to select.
        </p>

        <ul
          ref={ulRef}
          onKeyDown={onKeyDown}
          aria-label="Accessibility techniques"
          className="outline-none"
        >
          {ITEMS.map((item, index) => {
            const isCurrent = focusIndex >= 0 ? focusIndex === index : index === 0;
            return (
              <li
                key={item.id}
                id={`item-${item.id}`}
                aria-current={selectedId === item.id ? true : undefined}
                tabIndex={isCurrent ? 0 : -1}
                onClick={() => setSelectedId(item.id)}
                className={[
                  'flex items-center gap-4 px-4 py-3 mb-2 rounded-lg border cursor-pointer outline-none transition-colors',
                  'focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1',
                  selectedId === item.id
                    ? 'bg-indigo-50 border-indigo-400 text-indigo-900'
                    : 'bg-white border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/40',
                ].join(' ')}
              >
                <div className="flex-1">
                  <span className="font-semibold text-sm block">{item.label}</span>
                  <span className="text-gray-600 text-sm">{item.description}</span>
                </div>
                <button
                  tabIndex={isCurrent ? 0 : -1}
                  aria-label={`Bookmark ${item.label}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Bookmarked: ${item.label}`);
                  }}
                  className="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium border border-indigo-300 text-indigo-700 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 transition-colors"
                >
                  Bookmark
                </button>
              </li>
            );
          })}
        </ul>

        <p
          aria-live="polite"
          aria-atomic="true"
          className="mt-6 text-sm text-indigo-700 font-medium min-h-[1.25rem]"
        >
          {selectedId ? `Selected: ${ITEMS.find((i) => i.id === selectedId)?.label}` : ''}
        </p>
      </main>

    </div>
  );
}

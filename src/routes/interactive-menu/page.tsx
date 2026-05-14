import useMenu from '../../hooks/navigation/useMenu';

const ACTIONS = [
  { label: 'Edit', onSelect: () => alert('Edit') },
  { label: 'Duplicate', onSelect: () => alert('Duplicate') },
  { label: 'Archive', onSelect: () => alert('Archive') },
  { label: 'Delete', onSelect: () => alert('Delete') },
];

export default function InteractiveMenuPage() {
  const { isOpen, triggerRef, menuRef, triggerProps, menuProps, getItemProps } =
    useMenu(ACTIONS.length);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      <header className="bg-indigo-700 text-white px-6 py-4">
        <a href="/" className="text-xl font-bold hover:underline">A11y Blog</a>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">Interactive Menu</h1>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Press <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">Enter</kbd>,{' '}
          <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">Space</kbd>, or{' '}
          <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">↓</kbd> on the button to open.
          Use <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">↑</kbd>{' '}
          <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">↓</kbd> to navigate,{' '}
          <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-sm font-mono">Escape</kbd> to close.
        </p>

        {/* Card */}
        <article className="bg-white rounded-xl border border-gray-200 p-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-semibold text-base mb-1">Accessibility Guidelines v2.pdf</h2>
            <p className="text-sm text-gray-500">Updated 3 days ago · 1.4 MB</p>
          </div>

          {/* Menu trigger + dropdown */}
          <div className="relative shrink-0">
            <button
              ref={triggerRef}
              {...triggerProps}
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 transition-colors"
            >
              Actions
              <span aria-hidden="true" className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {isOpen && (
              <ul
                ref={menuRef}
                {...menuProps}
                className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10"
              >
                {ACTIONS.map((action, index) => (
                  <li key={action.label}>
                    <button
                      {...getItemProps(index, action.onSelect)}
                      className={[
                        'w-full text-left px-4 py-2 text-sm outline-none transition-colors',
                        action.label === 'Delete'
                          ? 'text-red-600 hover:bg-red-50 focus-visible:bg-red-50'
                          : 'text-gray-700 hover:bg-gray-50 focus-visible:bg-indigo-50 focus-visible:text-indigo-700',
                      ].join(' ')}
                    >
                      {action.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      </main>

    </div>
  );
}

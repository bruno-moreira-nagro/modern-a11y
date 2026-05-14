import { useState, useRef, useEffect } from 'react';
import type React from 'react';

const useVerticalNavigation = (listLength: number, onSelect?: (index: number) => void): [any, (ev: React.KeyboardEvent) => void, number] => {
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const ulRef = useRef<any>(null);

  useEffect(() => {
    if (focusIndex >= 0) {
      const ulChildren = ulRef?.current?.children;

      ulChildren?.[focusIndex]?.focus();
    }
  }, [focusIndex]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        setFocusIndex(focusIndex <= 0 ? listLength : focusIndex - 1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        setFocusIndex(focusIndex + 1 > listLength ? 0 : focusIndex + 1);
        break;
      case 'Home':
        event.preventDefault();
        setFocusIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setFocusIndex(listLength);
        break;
      case 'Enter':
      case ' ':
        if (focusIndex >= 0) {
          event.preventDefault();
          onSelect?.(focusIndex);
        }
        break;
      default:
        break;
    }
  };

  return [ulRef, onKeyDown, focusIndex];
};

export default useVerticalNavigation;

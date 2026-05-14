import { useState, useRef, useEffect, useId } from 'react';
import type React from 'react';

type ItemProps = {
  role: 'menuitem';
  tabIndex: number;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
};

type UseMenuReturn = {
  isOpen: boolean;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  menuRef: React.RefObject<HTMLUListElement | null>;
  triggerProps: {
    id: string;
    'aria-haspopup': 'menu';
    'aria-expanded': boolean;
    'aria-controls': string;
    onClick: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
  };
  menuProps: {
    id: string;
    role: 'menu';
    'aria-labelledby': string;
    tabIndex: number;
    onKeyDown: (e: React.KeyboardEvent) => void;
  };
  getItemProps: (index: number, onSelect?: () => void) => ItemProps;
};

const useMenu = (itemCount: number): UseMenuReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(0);

  const triggerId = useId();
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const close = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const open = (startIndex: number) => {
    setFocusIndex(startIndex);
    setIsOpen(true);
  };

  // move DOM focus to the active item whenever focusIndex or isOpen changes
  useEffect(() => {
    if (!isOpen) return;
    const items =
      menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]');
    items?.[focusIndex]?.focus();
  }, [isOpen, focusIndex]);

  // close on outside pointer interaction
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (
        !menuRef.current?.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isOpen]);

  const triggerProps = {
    id: triggerId,
    'aria-haspopup': 'menu' as const,
    'aria-expanded': isOpen,
    'aria-controls': menuId,
    onClick: () => (isOpen ? close() : open(0)),
    onKeyDown: (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          open(0);
          break;
        case 'ArrowUp':
          e.preventDefault();
          open(itemCount - 1);
          break;
        case 'Escape':
          close();
          break;
      }
    },
  };

  const menuProps = {
    id: menuId,
    role: 'menu' as const,
    'aria-labelledby': triggerId,
    tabIndex: -1,
    onKeyDown: (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusIndex(prev => (prev + 1 > itemCount - 1 ? 0 : prev + 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusIndex(prev => (prev - 1 < 0 ? itemCount - 1 : prev - 1));
          break;
        case 'Home':
          e.preventDefault();
          setFocusIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setFocusIndex(itemCount - 1);
          break;
        case 'Escape':
          e.preventDefault();
          close();
          break;
        case 'Tab':
          // let Tab exit naturally but clean up state
          close();
          break;
      }
    },
  };

  const getItemProps = (index: number, onSelect?: () => void): ItemProps => ({
    role: 'menuitem',
    tabIndex: focusIndex === index ? 0 : -1,
    onClick: () => {
      onSelect?.();
      close();
    },
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect?.();
        close();
      }
    },
  });

  return { isOpen, triggerRef, menuRef, triggerProps, menuProps, getItemProps };
};

export default useMenu;

"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "alphaje-desktop-pet";

export type PetPosition = { x: number; y: number };

type StoredPetState = {
  hidden: boolean;
  position: PetPosition;
};

const defaultState: StoredPetState = {
  hidden: false,
  position: { x: 0, y: 0 },
};

function clampPosition(position: PetPosition): PetPosition {
  if (typeof window === "undefined") return position;

  return {
    x: Math.min(0, Math.max(position.x, -(window.innerWidth - 120))),
    y: Math.min(0, Math.max(position.y, -(window.innerHeight - 180))),
  };
}

export function useDesktopPet() {
  const [hidden, setHiddenState] = useState(defaultState.hidden);
  const [position, setPositionState] = useState(defaultState.position);
  const [talking, setTalking] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let nextState = defaultState;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<StoredPetState>;
        nextState = {
          hidden: Boolean(parsed.hidden),
          position: parsed.position ? clampPosition(parsed.position) : defaultState.position,
        };
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    const frame = window.requestAnimationFrame(() => {
      setHiddenState(nextState.hidden);
      setPositionState(nextState.position);
      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const persist = useCallback((next: StoredPetState) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const setHidden = useCallback((nextHidden: boolean) => {
    setHiddenState(nextHidden);
    setTalking(false);
    setMenuOpen(false);
    persist({ hidden: nextHidden, position });
  }, [persist, position]);

  const savePosition = useCallback((nextPosition: PetPosition) => {
    const clamped = clampPosition(nextPosition);
    setPositionState(clamped);
    persist({ hidden, position: clamped });
  }, [hidden, persist]);

  return {
    hidden,
    menuOpen,
    position,
    ready,
    talking,
    savePosition,
    setHidden,
    setMenuOpen,
    setTalking,
  };
}

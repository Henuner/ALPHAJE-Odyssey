"use client";

import { useSyncExternalStore } from "react";
import { getPetVitalsServerSnapshot, getPetVitalsSnapshot, subscribeToPetVitals } from "@/lib/pet-vitals";

export function usePetVitals() {
  return useSyncExternalStore(subscribeToPetVitals, getPetVitalsSnapshot, getPetVitalsServerSnapshot);
}

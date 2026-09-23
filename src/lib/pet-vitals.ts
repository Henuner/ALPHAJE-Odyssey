export type PetVitals = {
  energy: number;
  mood: number;
  curiosity: number;
  bond: number;
  lastUpdated: number;
};

export type PetVitalDelta = Partial<Omit<PetVitals, "lastUpdated">>;

const STORAGE_KEY = "alphaje-pet-vitals";
const CHANGE_EVENT = "alphaje:pet-vitals";

export const defaultPetVitals: PetVitals = {
  energy: 82,
  mood: 76,
  curiosity: 68,
  bond: 12,
  lastUpdated: 0,
};

let cachedVitals = defaultPetVitals;
let hydrated = false;

function clamp(value: number) {
  return Math.min(100, Math.max(0, Math.round(value)));
}

function applyGentleDecay(vitals: PetVitals): PetVitals {
  if (!vitals.lastUpdated) return { ...vitals, lastUpdated: Date.now() };
  const elapsedHours = Math.floor((Date.now() - vitals.lastUpdated) / 3_600_000);
  if (elapsedHours < 12) return vitals;

  return {
    ...vitals,
    energy: clamp(vitals.energy - Math.min(8, Math.floor(elapsedHours / 12))),
    mood: clamp(vitals.mood - Math.min(4, Math.floor(elapsedHours / 24))),
    lastUpdated: Date.now(),
  };
}

export function getPetVitalsSnapshot(): PetVitals {
  if (typeof window === "undefined") return defaultPetVitals;
  if (!hydrated) {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      cachedVitals = stored ? applyGentleDecay({ ...defaultPetVitals, ...JSON.parse(stored) }) : { ...defaultPetVitals, lastUpdated: Date.now() };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cachedVitals));
    } catch {
      cachedVitals = { ...defaultPetVitals, lastUpdated: Date.now() };
    }
    hydrated = true;
  }
  return cachedVitals;
}

export function getPetVitalsServerSnapshot() {
  return defaultPetVitals;
}

export function subscribeToPetVitals(listener: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleChange() {
    hydrated = false;
    listener();
  }

  window.addEventListener(CHANGE_EVENT, handleChange);
  window.addEventListener("storage", handleChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, handleChange);
    window.removeEventListener("storage", handleChange);
  };
}

export function nudgePetVitals(delta: PetVitalDelta) {
  if (typeof window === "undefined") return;
  const current = getPetVitalsSnapshot();
  cachedVitals = {
    energy: clamp(current.energy + (delta.energy ?? 0)),
    mood: clamp(current.mood + (delta.mood ?? 0)),
    curiosity: clamp(current.curiosity + (delta.curiosity ?? 0)),
    bond: clamp(current.bond + (delta.bond ?? 0)),
    lastUpdated: Date.now(),
  };
  hydrated = true;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cachedVitals));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

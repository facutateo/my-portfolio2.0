import { useSyncExternalStore } from "react";

export const SECTIONS = ["home", "about", "skills", "projects", "contact"] as const;
export type SectionId = (typeof SECTIONS)[number];

// Un solo IntersectionObserver compartido por todos los componentes que leen la sección activa.
let active: SectionId = SECTIONS[0];
const visible: Partial<Record<SectionId, boolean>> = {};
const listeners = new Set<() => void>();
let observer: IntersectionObserver | null = null;

function start() {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                visible[entry.target.id as SectionId] = entry.isIntersecting;
            });
            const current = SECTIONS.find((id) => visible[id]);
            if (current && current !== active) {
                active = current;
                listeners.forEach((l) => l());
            }
        },
        { rootMargin: "-20% 0px -40% 0px", threshold: 0.1 }
    );
    SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer!.observe(el);
    });
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    if (!observer) start();
    return () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
            observer?.disconnect();
            observer = null;
        }
    };
}

export function useActiveSection() {
    return useSyncExternalStore(subscribe, () => active, () => SECTIONS[0]);
}

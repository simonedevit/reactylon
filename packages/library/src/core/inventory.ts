import { BabylonPackages } from '@dvmstudios/reactylon-common';

export const inventory = new Map<string, [unknown, BabylonPackages, boolean]>();

export function register(entries: Record<string, [unknown, BabylonPackages, boolean]>) {
    Object.entries(entries).forEach(([key, value]) => {
        inventory.set(key, value);
    });
}

import { WebPlugin } from '@capacitor/core';

import type { NfcPlugin } from './definitions';

export class NfcPluginWeb extends WebPlugin implements NfcPlugin {
  async isEnabled(): Promise<boolean> {
    const supported = 'NDEFReader' in window;
    return supported;
  }

  async enable(): Promise<void> {
    if (!('NDEFReader' in window)) {
      throw new Error('NDEFReader is not supported');
    }
    const reader = new (window as any).NDEFReader();
    await reader.scan();
  }

  async disable(): Promise<void> {
    if (!('NDEFReader' in window)) {
      throw new Error('NDEFReader is not supported');
    }
    const reader = new (window as any).NDEFReader();
    await reader.cancel();
  }
}

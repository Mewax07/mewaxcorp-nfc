import { registerPlugin } from '@capacitor/core';

import type { NfcPlugin } from './definitions';

const OriginalNfc  = registerPlugin<NfcPlugin>('NfcPlugin', {
  web: () => import('./web').then((m) => new m.NfcPluginWeb()),
});

class NfcWrapper implements NfcPlugin {
  private plugin: NfcPlugin;

  constructor(plugin: NfcPlugin) {
    this.plugin = plugin;
  }

  isEnabled(): Promise<boolean> {
    return this.plugin.isEnabled();
  }

  enable(): Promise<void> {
    return this.plugin.enable();
  }

  disable(): Promise<void> {
    return this.plugin.disable();
  }
}

const Nfc = new NfcWrapper(OriginalNfc);

export * from './definitions';
export { Nfc };


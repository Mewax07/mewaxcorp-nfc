import { registerPlugin } from '@capacitor/core';

import type { NfcPluginPlugin } from './definitions';

const NfcPlugin = registerPlugin<NfcPluginPlugin>('NfcPlugin', {
  web: () => import('./web').then((m) => new m.NfcPluginWeb()),
});

export * from './definitions';
export { NfcPlugin };

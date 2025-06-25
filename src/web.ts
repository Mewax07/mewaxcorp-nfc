import { WebPlugin } from '@capacitor/core';

import type { NfcPluginPlugin } from './definitions';

export class NfcPluginWeb extends WebPlugin implements NfcPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

export interface NfcPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

export interface NfcPlugin {
  isEnabled(): Promise<boolean>;

  enable(): Promise<void>;
  disable(): Promise<void>;
}

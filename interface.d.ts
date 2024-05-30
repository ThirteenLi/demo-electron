export interface IElectronAPI {
  versions: {
    chrome: string;
    node: string;
    electron: string;
  };
  myApi: {
    desktop: boolean;
  };
  func: {
    ping: () => void;
    close: () => void;
  };
}

declare global {
  interface Window extends IElectronAPI {}
}

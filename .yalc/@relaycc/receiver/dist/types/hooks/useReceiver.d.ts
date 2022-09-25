import { Signer } from '@ethersproject/abstract-signer';
import { ReceiverStore, ReceiverScreen } from './types';
export declare const useReceiver: import("zustand").UseBoundStore<import("zustand").StoreApi<ReceiverStore>>;
export declare const useSetWallet: () => (wallet: Signer | null) => void;
export declare const useIsOpen: () => boolean;
export declare const sameScreen: (screenA: ReceiverScreen, screenB: ReceiverScreen) => boolean;
export declare const currentScreen: ({ screenHistory, }: Pick<ReceiverStore, 'screenHistory'>) => ReceiverScreen;

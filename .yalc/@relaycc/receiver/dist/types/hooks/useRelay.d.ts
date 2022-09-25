import { Relay, Message, Channel } from './types';
export declare const useRelay: import("zustand").UseBoundStore<import("zustand").StoreApi<Relay>>;
export declare const validateMessage: (xmtpMessage: unknown) => xmtpMessage is Message;
export declare const byMostRecentMessage: (channel: Channel) => Message[];
export declare const pickPeerAddress: (clientAddress: string, message: Message) => string;
export declare const isEmpty: (channel: Channel) => boolean;

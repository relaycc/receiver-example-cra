import { EnsName, Address, EnsAvatar } from '../hooks/types';
export declare const setName: (address: string, name: EnsName) => void;
export declare const getName: (address?: string | null) => EnsName | undefined;
export declare const setAddress: (name: string, address: Address) => void;
export declare const getAddress: (name: string) => Address | undefined;
export declare const setEnsAvatar: (name: string, avatar: EnsAvatar) => void;
export declare const getEnsAvatar: (name: string) => EnsAvatar | undefined;

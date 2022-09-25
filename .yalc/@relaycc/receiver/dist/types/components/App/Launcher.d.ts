import { FunctionComponent } from 'react';
import { Signer } from '@ethersproject/abstract-signer';
import '../../styles/app.css';
export interface LauncherProps {
    peerAddress?: string | null;
    wallet?: Signer | null;
}
export declare const Launcher: FunctionComponent<LauncherProps>;

import { FunctionComponent } from 'react';
export interface AvatarProps {
    handle?: string | null;
    onClick: () => unknown;
    large?: boolean;
}
export declare const Avatar: FunctionComponent<AvatarProps>;

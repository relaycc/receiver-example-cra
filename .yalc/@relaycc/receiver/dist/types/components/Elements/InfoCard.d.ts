import { FunctionComponent } from 'react';
export interface InfoCardProps {
    variant: 'invalid ENS' | 'no peer' | 'no xmtp client' | 'waiting for signature' | 'signature denied' | 'no messages' | 'no wallet' | 'new conversation';
    peerName?: string;
}
export declare const InfoCard: FunctionComponent<InfoCardProps>;
export declare const BrandedFooter: () => JSX.Element;

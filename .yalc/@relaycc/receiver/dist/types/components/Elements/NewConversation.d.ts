import { FunctionComponent } from 'react';
export interface NewConversationProps {
    onClickCreate: (peerAddress: string) => unknown;
}
export declare const NewConversation: FunctionComponent<NewConversationProps>;

import { Message } from '../../hooks';
interface MessagesBucketProps {
    startDate: Date | undefined;
    messages: Message[];
    peerName?: string | undefined;
    sentByAddress: string;
    userPeerAddress: string;
}
export default function MessagesBucket({ startDate, messages, sentByAddress, userPeerAddress, }: MessagesBucketProps): JSX.Element | null;
export {};

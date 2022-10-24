import { XmtpWorkerClient } from "@relaycc/xmtp-worker";
export const XmtpClient = new XmtpWorkerClient(new Worker("/worker.js"));

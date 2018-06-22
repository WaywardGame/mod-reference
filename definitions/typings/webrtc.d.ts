type EventHandler = (event: Event) => void;

// https://www.w3.org/TR/webrtc/#idl-def-rtcdatachannelstate
type RTCDataChannelState = 'connecting' | 'open' | 'closing' | 'closed';

// https://www.w3.org/TR/websockets/#dom-websocket-binarytype
type RTCBinaryType = 'blob' | 'arraybuffer';

// https://www.w3.org/TR/webrtc/#idl-def-rtcdatachannel
interface RTCDataChannel extends EventTarget {
    readonly label: string;
    readonly ordered: boolean;
    readonly maxPacketLifeTime: number | null;
    readonly maxRetransmits: number | null;
    readonly protocol: string;
    readonly negotiated: boolean;
    readonly id: number;
    readonly readyState: RTCDataChannelState;
    readonly bufferedAmount: number;
    bufferedAmountLowThreshold: number;
    binaryType: RTCBinaryType;

    close(): void;
    send(data: string | Blob | ArrayBuffer | ArrayBufferView): void;

    onopen: EventHandler;
    onmessage: (event: MessageEvent) => void;
    onbufferedamountlow: EventHandler;
    onerror: (event: ErrorEvent) => void;
    onclose: EventHandler;
}

// https://www.w3.org/TR/webrtc/#h-rtcdatachannelevent
interface RTCDataChannelEvent {
    readonly channel: RTCDataChannel;
}

// https://www.w3.org/TR/webrtc/#idl-def-rtcdatachannelinit
interface RTCDataChannelInit {
    ordered?: boolean; // default = true
    maxPacketLifeTime?: number;
    maxRetransmits?: number;
    protocol?: string; // default = ''
    negotiated?: boolean; // default = false
    id?: number;
}

// https://www.w3.org/TR/webrtc/#idl-def-rtcpeerconnection
interface RTCPeerConnection extends EventTarget {
    createDataChannel(label: string | null, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
    ondatachannel: (event: RTCDataChannelEvent) => void;
}

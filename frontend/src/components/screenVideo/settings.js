import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "861ba7eec46741469da109ac50ef2a55";
const token =
  "006861ba7eec46741469da109ac50ef2a55IAAPFAnjNOHNjx5xNetjung70DIiVRpe4U2L916p3aLX0aj6x2QAAAAAEAASVDxDCfl+YgEAAQAJ+X5i";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "gameverse";
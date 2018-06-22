import { UiTranslation } from "language/ILanguage";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class ShowLoadingScreenPacket extends ClientPacket {
    title: UiTranslation;
    description: UiTranslation;
    process(): void;
}

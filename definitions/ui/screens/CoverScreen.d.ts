import BaseScreen from "ui/screens/BaseScreen";
export default class CoverScreen extends BaseScreen {
    private fadingOut;
    selector(): string;
    bindElements(): void;
    doShow(): void;
    onShow(): void;
    onHide(): void;
    private fadeOut();
    private createParticles();
}

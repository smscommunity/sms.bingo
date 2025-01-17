import BingosyncColors, { BingosyncColorStrings } from './BingosyncColors';

export default interface PlayerData {
    name: string;
    primaryColor: BingosyncColors | BingosyncColorStrings;
    secondaryColor: BingosyncColors | BingosyncColorStrings;
    country: string;
    division?: string;
    twitchName?: string;
    pronouns?: string;
    elo?: number;
    id?: string;
}

import { Dispatch, SetStateAction } from "react";

export interface classesName {
  className?: string;
}

export interface TypeMenu {
  menuMobile: boolean;
  setMenuMobile: Dispatch<SetStateAction<boolean>>;
}

export interface TypeHookAgentes {
  AllAgents: RootAgentes | undefined;
  ErrorFetchAgents: boolean;
  LoadingAgents: boolean;
}
export interface RootAgentes {
  status: number;
  data: DataApi[];
}

export interface DataApi {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags?: string[];
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait?: string;
  fullPortrait?: string;
  fullPortraitV2?: string;
  killfeedPortrait: string;
  background?: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role?: Role;
  abilities: Ability[];
  voiceLine: VoiceLine;
}

export interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

export interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon?: string;
}

export interface VoiceLine {
  minDuration: number;
  maxDuration: number;
  mediaList: MediaList[];
}

export interface MediaList {
  id: number;
  wwise: string;
  wave: string;
}

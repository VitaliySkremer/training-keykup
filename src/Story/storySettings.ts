import {makeAutoObservable} from "mobx";

export enum Languages {
  RU = 'Русский',
  EN = 'Английский'
}


class StorySettings {

  countParagraph = 1;
  language:Languages = Languages.RU

  constructor() {
    makeAutoObservable(this)
  }

  changeCountParagraph(count:number){
    this.countParagraph = count;
  }

  changeLanguage(language:Languages){
    this.language = language;
  }
}

export default new StorySettings()
import {makeAutoObservable} from "mobx";

class StoryKey {
	correctPressing = 0;
	errorPressing = 0;
	start = false;

	constructor() {
		makeAutoObservable(this)
	}

	addCorrectPressing(){
		this.correctPressing++;
	}

	addErrorPressing(){
		this.errorPressing++;
	}

	resetKey(){
		this.errorPressing = 0;
		this.correctPressing = 0;
	}

	startTimer(){
		this.start = true;
	}

	stopTimer(){
		this.start = false;
	}
}

export default new StoryKey();
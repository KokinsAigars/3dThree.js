
export {};

declare global {


	//add the names (and types) of all of the properties you intend to access on the window object.
  interface Window {

	// for window.showSaveFilePicker();
	showSaveFilePicker: any;

  }
}
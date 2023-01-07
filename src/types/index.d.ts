/*
* xml_Dictionary_of_Pali
* Version 1.0.0 Built on 2022.12.18
*
*	if "Property does not exist on type Window in TypeScrip" (FIX)
*
*
* Contributor(s): https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window
*/

export {};

declare global {


	//add the names (and types) of all of the properties you intend to access on the window object.
  interface Window {

	// for window.showSaveFilePicker();
	showSaveFilePicker: any;

  }
}
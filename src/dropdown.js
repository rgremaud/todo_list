export { Dropdown };

class Dropdown {
  constructor(dropItems, parentId, headerId, dropDownId) {
    this.dropItems = dropItems;
    this.parentDiv = document.getElementById(parentId);
    this.header = document.getElementById(headerId);
    this.dropDown = document.getElementById(dropDownId);
    this.counter = 0;
  }

  headerTextContent(textContent) {
    this.header.textContent = textContent;
  }

  parentDivClick() {
    this.parentDiv.addEventListener("click", () => {
      if (this.counter % 2 === 0) {
        this.hideDiv("dropDownHeader");
        this.viewDiv("dropDownItems");
        this.counter += 1;
      } else {
        this.viewDiv("dropDownHeader");
        this.hideDiv("dropDownItems");
        this.counter += 1;
      }
    });
  }

  buildDivs() {
    this.dropItems.forEach((item) => {
      const dropItem = document.createElement("div");
      dropItem.className = "dropItem";
      dropItem.textContent = item;

      this.dropDown.appendChild(dropItem);
    });
  }

  hideDiv(elementId) {
    document.getElementById(elementId).style.display = "none";
  }

  viewDiv(elementId) {
    document.getElementById(elementId).style.display = "";
  }

  initDivs() {
    this.buildDivs();
    this.hideDiv("dropDownItems");
  }
}

/*
build drop downs:
    Due in 7 days
    Due in 30 days
    Due in 90 days

    build dropdowns by clearing 
*/

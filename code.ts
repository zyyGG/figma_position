
figma.showUI(__html__, {
  width: 230,
  height: 150,
  title: "坐标",
  // position: { x: 0, y: 200 }  
});

figma.on("documentchange", () => {
  getSelect()
})
figma.on("selectionchange", () => {
  getSelect()
})
figma.on("run", () => {
  getSelect()
})
function getSelect() {
  let obj: objectData = {}
  if (figma.currentPage.selection.length == 1) {
    obj.x = figma.currentPage.selection[0].x
    obj.y = figma.currentPage.selection[0].y
    obj.w = figma.currentPage.selection[0].width
    obj.h = figma.currentPage.selection[0].height
  } else {
    obj.x = 0
    obj.y = 0
    obj.w = 0
    obj.h = 0
  }
  figma.ui.postMessage(obj)
}

interface objectData {
  x?: Number
  y?: Number
  w?: Number
  h?: Number
}





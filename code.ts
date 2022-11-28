
figma.showUI(__html__, {
  width: 230,
  height: 150,
  title: "坐标",
  // position: { x: 0, y: 200 }  
});

figma.on("selectionchange", () => {
  let obj: objectData = {}
  if (figma.currentPage.selection.length == 1) {
    let data = figma.currentPage.selection[0]
    obj.x = data.x
    obj.y = data.y
    obj.w = data.width
    obj.h = data.height
  } else {
    obj.x = 0
    obj.y = 0
    obj.w = 0
    obj.h = 0
  }
  figma.ui.postMessage(obj)
})

interface objectData {
  x?: Number
  y?: Number
  w?: Number
  h?: Number
}

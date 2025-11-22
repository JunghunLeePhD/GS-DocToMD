/**
 * Serves the HTML page when the web app is visited.
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index")
    .setTitle("Doc To Markdown")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

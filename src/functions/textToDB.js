function textToDB(content) {
  return content.replace(/(.+?)(?:\n\n|\n|$)/g, "<p>$1</p>");
}
export default textToDB;

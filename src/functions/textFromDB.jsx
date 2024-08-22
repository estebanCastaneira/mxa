import React from "react"

function textFromDB(content) {
  const paragraphs = content
    .split("\n")
    .map((paragraph, index) => (
      <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    ))
  return paragraphs
}

export default textFromDB

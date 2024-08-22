import React from "react"
import tax from "/img/home/tax.png"
import accounting from "/img/home/accounting.png"
import legal from "/img/home/legal.png"
import notary from "/img/home/notary.png"
import Service from "./Service"

function ServiceContainer() {
  return (
    <div className="flex flex-col mx-2">
      <Service image={tax} title={"tax"} />
      <Service image={accounting} title={"accounting"} even={true} />
      <Service image={legal} title={"legal"} />
      <Service image={notary} title={"notary"} even={true} />
    </div>
  )
}

export default ServiceContainer

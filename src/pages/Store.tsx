import React from "react"
import storeItemsData from "../data/items.json"
import {Row, Col} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
export  function Store() {
  return (
  <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
      {storeItemsData.map(item => (
        <Col key={item.id} ><StoreItem {...item} /></Col>
        /*  Maps through the StoreItemData that returns StoreItem components
        list of items are passed as props to StoreItem components which in turn returns a Card with item info  
        */
      ))}
    </Row>
  </>
  )
}

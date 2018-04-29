import { mount } from "enzyme"
import React from "react"
import App from "../../pages/Index.js"

it("App renders", () => {
  const app = mount(<App />)
  const text = app.text()

  expect(text.includes("hello")).toBe(true)
})

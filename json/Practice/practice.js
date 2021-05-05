function simpleFunction() {
  console.log(this)
}

const o = {
  sayThis() {
    simpleFunction()
  }
}

simpleFunction() // Window
o.sayThis() // Window
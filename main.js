import { add } from './add.js'
import { multiply } from './multi.js'
import { divide } from './div.js'

const x = 1
const y = 2

let z = add(x, y)
z = multiply(z, 10)
z = divide(z, 2)

const rootDOM = document.getElementById('root')
const node = document.createElement('code')
node.innerText = z
rootDOM.appendChild(node)

import '../../lib/rem.js'
import '../css/index.scss'
import img from '../images/pkq.jpeg';
console.log(img)
let image = new Image()
image.src = img
document.body.append(image)
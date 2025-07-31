import './Hello.css'
import wp from './whatsapp.png'
function Home(){
    var a=10
    var b=20
    var mycolor={color: 'white', backgroundColor: 'green'}
    return(
        <div>
        <h1>Home</h1>
        A value is {a} <br />
        B value is {b}
        <p style={{color: 'red', backgroundColor: 'black'}}>Hello I am P Tag</p>
        <p style={{color: 'red', backgroundColor: 'black'}}>Hello I am P Tag</p>
        <p style={mycolor}>I am p tag again</p>
        <p style={mycolor}>I am p tag again</p>
        <p style={mycolor}>I am p tag again</p>
        <img src={wp}/>
        </div>
    )
}
export default Home
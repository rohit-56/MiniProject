import myPic from './myPic.jpg';
import './App.css';

function App(props) {
  return (
    <>
         
        
        <div className={`card mx-${props.mx} my-${props.my}`} style={{"width": "18rem"}}>
        <img src={myPic} className="card-img-top" alt='myPics'/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="/" className="btn btn-primary">Go somewhere</a>
         </div>
         </div>
        
      
    
    </>
  );
}

export default App;

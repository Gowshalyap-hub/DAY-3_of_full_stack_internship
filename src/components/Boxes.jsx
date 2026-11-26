//******props******

// function Boxes(props) {
//   return (
//     <div className="box" style={{ background: props.bg }}>

//       <div className="box-top">
//         <span>{props.number}</span>
//         <span>↗</span>
//       </div>

//       <img src={props.image} alt={props.title} />

//       <div className="box-content">
//         <span className="category">{props.category}</span>

//         <h2>{props.title}</h2>

//         <p>{props.description}</p>

//         <button style={{ background: props.buttonColor }}>
//           {props.buttonText} →
//         </button>
//       </div>

//     </div>
//   );
// }

// export default Boxes;


// destructuring 

function Boxes({ number, category, title, description, image, bg, buttonColor, buttonText }) { 
  return (
    <div className="box" style={{ background: bg }}>

      <div className="box-top">
        <span>{number}</span>
        <span>↗</span>
      </div>

      <img src={image} alt={title} />

      <div className="box-content">
        <span className="category">{category}</span>

        <h2>{title}</h2>

        <p>{description}</p>

        <button style={{ background: buttonColor }}>
          {buttonText} →
        </button>
      </div>

    </div>
  );
}

export default Boxes;

import React, {useState, useEffect} from 'react';

class OverviewStyles extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const styleChanges = this.props.handleStyleChange;
    return (
      <div className="po-styles">
        {
          this.props.variations.map((variation, index) => {
            return (<OverviewStyle key={variation.style_id} variation={variation} index={index} styleChanges={styleChanges} />);
          })
        }
      </div>
    );
  }
}

class OverviewStyle extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    let styling = {
      'background': 'url(' + this.props.variation.photos[0].thumbnail_url + ')',
      'backgroundSize': 'cover',
      'backgroundPosition': 'center'
    };
    let checkmark = 'po-style-check active';
    this.props.variation.selected ? checkmark = 'po-style-check active' : checkmark = 'po-style-check';

    return (
      <div className="po-style" style={styling} onClick={this.styleChanges} >
        <div className={checkmark}><i className="fas fa-check"></i></div>
      </div>
    );
  }
}
// const OverviewStyles = (props) => {
//   const initial = props.fashion || [];
//   if (initial) {
//     for (let i = 0; i < initial.length; i++) {
//       initial[i].selected = false;
//       if (i === 1) {
//         initial[i].selected = true;
//       }
//     }
//     // initial[0].selected = false;
//   }
//   const [fashion, setFashion] = useState(initial);
//   useEffect(() => {
//     setFashion(initial);
//   });

//   const handleReset = (index) => {
//     console.log('eresting');
//     const newNew = initial.slice();
//     for (let i = 0; i < newNew.length; i++) {
//       newNew[i].selected = true;
//     }
//     setFashion(newNew);
//   };

//   return (

//   );
// };

// const OverviewStyle = (props) => {


//   const [check, setCheck] = useState(checking);

//   // if (props.fashion.selected) {
//   //   setCheck('po-style-check active');
//   // }

//   // if (props.chosen === 'true') {
//   //   setCheck('po-style-check active');
//   // } else {
//   //   setCheck('po-style-check');
//   // }


//   const toggleCheck = () => {
//     console.log('hello')
//     props.handleReset(2);
//     // if (check === 'po-style-check') {
//     //   setCheck('po-style-check active');
//     // } else {
//     //   setCheck('po-style-check');
//     // }
//   };


//   return (

//   );
// };

export default OverviewStyles;
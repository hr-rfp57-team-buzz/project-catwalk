import React, { useState, useEffect } from 'react';

let AddAReviewCharacteristics = ({sizeRating, widthRating, comfortRating, qualityRating, lengthRating, fitRating, reviewMeta, scrape}) => {

  let [sizeTableRowGen, setSizeTableRowGen] = useState(<></>);
  let [widthTableRowGen, setWidthTableRowGen] = useState(<></>);
  let [comfortTableRowGen, setComfortTableRowGen] = useState(<></>);
  let [qualityTableRowGen, setQualityTableRowGen] = useState(<></>);
  let [lengthTableRowGen, setLengthTableRowGen] = useState(<></>);
  let [fitTableRowGen, setFitTableRowGen] = useState(<></>);

  let sizeTableRow = <tr onChange={sizeRating}>
    <td><b>Size</b></td>
    <td>
      <input type="radio" id="sizeAdd1" name="sizeReview" value="1"></input>
      <p>A size too small</p>
    </td>
    <td>
      <input type="radio" id="sizeAdd2" name="sizeReview" value="2"></input>
      <p>1/2 size too small</p>
    </td>
    <td>
      <input type="radio" id="sizeAdd3" name="sizeReview" value="3"></input>
      <p>Perfect</p>
    </td>
    <td>
      <input type="radio" id="sizeAdd4" name="sizeReview" value="4"></input>
      <p>1/2 size too big</p>
    </td>
    <td>
      <input type="radio" id="sizeAdd5" name="sizeReview" value="5"></input>
      <p>A size too wide</p>
    </td>
  </tr>;

  let widthTableRow = <tr onChange={widthRating}>
    <td><b>Width</b></td>
    <td>
      <input type="radio" id="widthAdd1" name="widthReview" value="1"></input>
      <p>Too narrow</p>
    </td>
    <td>
      <input type="radio" id="widthAdd2" name="widthReview" value="2"></input>
      <p>Slightly narrow</p>
    </td>
    <td>
      <input type="radio" id="widthAdd3" name="widthReview" value="3"></input>
      <p>Perfect</p>
    </td>
    <td>
      <input type="radio" id="widthAdd4" name="widthReview" value="4"></input>
      <p>Slightly wide</p>
    </td>
    <td>
      <input type="radio" id="widthAdd5" name="widthReview" value="5"></input>
      <p>Too wide</p>
    </td>
  </tr>;

  let comfortTableRow = <tr onChange={comfortRating}>
    <td><b>Comfort</b></td>
    <td>
      <input type="radio" id="comfortAdd1" name="comfortReview" value="1"></input>
      <p>Uncomfortable</p>
    </td>
    <td>
      <input type="radio" id="comfortAdd2" name="comfortReview" value="2"></input>
      <p>Slightly uncomfortable</p>
    </td>
    <td>
      <input type="radio" id="comfortAdd3" name="comfortReview" value="3"></input>
      <p>Ok</p>
    </td>
    <td>
      <input type="radio" id="comfortAdd4" name="comfortReview" value="4"></input>
      <p>Comfortable</p>
    </td>
    <td>
      <input type="radio" id="comfortAdd5" name="comfortReview" value="5"></input>
      <p>Perfect</p>
    </td>
  </tr>;

  let qualityTableRow = <tr onChange={qualityRating}>
    <td><b>Quality</b></td>
    <td>
      <input type="radio" id="qualityAdd1" name="qualityReview" value="1"></input>
      <p>Poor</p>
    </td>
    <td>
      <input type="radio" id="qualityAdd2" name="qualityReview" value="2"></input>
      <p>Below Average</p>
    </td>
    <td>
      <input type="radio" id="qualityAdd3" name="qualityReview" value="3"></input>
      <p>What I expected</p>
    </td>
    <td>
      <input type="radio" id="qualityAdd4" name="qualityReview" value="4"></input>
      <p>Pretty great</p>
    </td>
    <td>
      <input type="radio" id="qualityAdd5" name="qualityReview" value="5"></input>
      <p>Perfect</p>
    </td>
  </tr>;

  let lengthTableRow = <tr onChange={lengthRating}>
    <td><b>Length</b></td>
    <td>
      <input type="radio" id="lengthAdd1" name="lengthReview" value="1"></input>
      <p>Runs Short</p>
    </td>
    <td>
      <input type="radio" id="lengthAdd2" name="lengthReview" value="2"></input>
      <p>Runs slightly short</p>
    </td>
    <td>
      <input type="radio" id="lengthAdd3" name="lengthReview" value="3"></input>
      <p>Perfect</p>
    </td>
    <td>
      <input type="radio" id="lengthAdd4" name="lengthReview" value="4"></input>
      <p>Runs slightly long</p>
    </td>
    <td>
      <input type="radio" id="lengthAdd5" name="lengthReview" value="5"></input>
      <p>Runs long</p>
    </td>
  </tr>;

  let fitTableRow = <tr onChange={fitRating}>
    <td><b>Fit</b></td>
    <td>
      <input type="radio" id="fitAdd1" name="fitReview" value="1"></input>
      <p>Runs tight</p>
    </td>
    <td>
      <input type="radio" id="fitAdd2" name="fitReview" value="2"></input>
      <p>Runs slightly tight</p>
    </td>
    <td>
      <input type="radio" id="fitAdd3" name="fitReview" value="3"></input>
      <p>Perfect</p>
    </td>
    <td>
      <input type="radio" id="fitAdd4" name="fitReview" value="4"></input>
      <p>Runs slightly long</p>
    </td>
    <td>
      <input type="radio" id="fitAdd5" name="fitReview" value="5"></input>
      <p>Runs long</p>
    </td>
  </tr>;

  let buildAddAReviewRatingTable = () => {
    setSizeTableRowGen(<></>);
    setWidthTableRowGen(<></>);
    setComfortTableRowGen(<></>);
    setQualityTableRowGen(<></>);
    setLengthTableRowGen(<></>);
    setFitTableRowGen(<></>);
    if (!scrape) {
      return;
    } else {
      // console.log(reviewMeta.characteristics);
      for (var key in reviewMeta.characteristics) {
        if (key === 'Size') {
          setSizeTableRowGen(sizeTableRow);
        }
        if (key === 'Width') {
          setWidthTableRowGen(widthTableRow);
        }
        if (key === 'Comfort') {
          setComfortTableRowGen(comfortTableRow);
        }
        if (key === 'Quality') {
          setQualityTableRowGen(qualityTableRow);
        }
        if (key === 'Length') {
          setLengthTableRowGen(lengthTableRow);
        }
        if (key === 'Fit') {
          setFitTableRowGen(fitTableRow);
        }
      }
    }
  };

  useEffect (() => {
    buildAddAReviewRatingTable();
  }, [scrape]);

  return (
    <>
      <table className="reviewAddTable">
        <tbody>
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
          <>{sizeTableRowGen}</>
          <>{widthTableRowGen}</>
          <>{comfortTableRowGen}</>
          <>{qualityTableRowGen}</>
          <>{lengthTableRowGen}</>
          <>{fitTableRowGen}</>
        </tbody>
      </table>
    </>

  );
};






export default AddAReviewCharacteristics;
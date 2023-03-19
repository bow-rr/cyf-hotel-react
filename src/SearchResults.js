import React, { useState, useEffect } from "react";
import SearchRow from "./SearchRow";
/**
 * "id": 1,
    "title": "Mr",
    "firstName": "John",
    "surname": "Doe",
    "email": "johndoe@doe.com",
    "roomId": 2,
    "checkInDate": "2017-11-21",
    "checkOutDate": "2017-11-23"
 */

//will receive props.results which is an array above
//TODO <<< POPULATE the 

// const SearchResults = (props) => {
//     return (
//       <table>
//             Search Results
//        <thead>
//           <tr>
//               {Object.keys(props.results[0]).map((colHeading) => (
//              <th key={colHeading}>{colHeading}</th>
//           ))}
//           </tr>
//         </thead>
//       </table>
//      );
//     };

function SearchResults(props) {
  const tr = props.results.map((element) => (
    <>
      <SearchRow key={element.id} guest={element} />
    </>
  ));
  return (
    <>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>{tr}</tbody>
      </table>
    </>
  );
}

export default SearchResults;
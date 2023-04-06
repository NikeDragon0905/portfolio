import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Kevin" },
  { meta: "last name", metaInfo: "Harris" },
  { meta: "Age", metaInfo: "27" },
  // { meta: "Nationality", metaInfo: "US" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Brentwood, Texas, US" },
  { meta: "phone", metaInfo: "+832-699-0288" },
  { meta: "Email", metaInfo: "nike.dragon0905@gmail.com" },
  { meta: "Skype", metaInfo: "live:.cid.db7376c3cccdf9af" },
  { meta: "Discord", metaInfo: "NikeDragon#9783" },
  { meta: "languages", metaInfo: "English, Chinese" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;

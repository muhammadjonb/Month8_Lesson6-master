import React from "react";

const CountryDetailsPage = ({
  params,
}: {
  params: {
    countryId: string;
  };
}) => {
  const { countryId } = params;

  return (
    <div>
      <h1>CountryDetailsPage {countryId}</h1>
    </div>
  );
};

export default CountryDetailsPage;

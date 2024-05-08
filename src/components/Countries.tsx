"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { CountryTypes } from "@/types/Country.types";
import Link from "next/link";
import Image from "next/image";

const Countries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [countryData, setCountryData] = useState<CountryTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountryData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };

  const filteredCountries = countryData.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRegion === "all" ||
        country.region.toLowerCase() === selectedRegion)
  );

  return (
    <div className="container mx-auto mt-28 xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2">
      <div className="flex flex-wrap justify-between items-baseline mb-11">
        <input
          type="search"
          placeholder="Search for a country..."
          className="transition w-80  md:w-96 p-4 rounded-lg bg-slate-50 dark:text-white dark:bg-slate-700 border-slate-500 border-2 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          name="region"
          id="region"
          className="transition mt-5 p-3 rounded-lg border-slate-500 bg-slate-50 dark:bg-slate-700 dark:text-white border-2 outline-none"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="all">All countries</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-16 justify-center border-spacing-1">
        {filteredCountries.map((country: any, index) => (
          <div
            key={index}
            className="dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl dark:hover:shadow-slate-600 border-2 dark:border-none w-64 h-96"
            // style={{ width: "18em", height: "22em" }}
          >
            <div style={{ width: "280px", height: "160px" }}>
              <img
                className="transition duration-300 ease-in-out hover:scale-110 "
                src={country.flags.png}
                alt={country.name?.common}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="texts p-5">
              <p className="font-bold text-xl">{country.name?.common}</p>
              <p className="pt-5 flex">
                <p className="font-semibold pr-1">Population:</p>{" "}
                {country.population}
              </p>
              <p className="flex">
                <p className="font-semibold pr-1">Region:</p> {country.region}
              </p>
              <p className="flex mb-8">
                <p className="font-semibold pr-1">Region:</p> {country.capital}
              </p>
              <Link href={`/${country.id}`}>
                <button>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;

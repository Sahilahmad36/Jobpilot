import React, { useState } from "react";
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import Select from "react-select"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const languageOptions = [
  { label: "English", value: "en", icon: "images/english.png" },
  { label: "French", value: "fr", icon: "images/france.png" },
  { label: "German", value: "de", icon: "images/german.png" },
  { label: "Spanish", value: "es", icon: "images/spanish.jpg" },
  { label: "Chinese", value: "zh", icon: "images/chinese.png" },
  { label: "Hindi", value: "hi", icon: "images/india.png" }
];

const countryOptions = [
  { label: "India", value: "in", icon: "images/india.png" },
  { label: "USA", value: "us", icon: "images/english.png" },
  { label: "Germany", value: "de", icon: "images/german.png" },
];

const CustomSelectOption = (props) => {
  return (
    <div className="language-option" {...props.innerProps}>
      <img src={props.data.icon} alt={props.data.label} className="language-flag" />
      <span className="language-label">{props.data.label}</span>
    </div>
  );
};

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]); 
  const [searchInput, setSearchInput] = useState("");

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption); 
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption); 
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value); 
  };

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="menu">
            <li><a href="/" className="menu-link"><Text size="textxs" className="menu-text">Home</Text></a></li>
            <li><a href="/" className="menu-link"><Text size="textxs" className="menu-text">Find Job</Text></a></li>
            <li><a href="/" className="menu-link"><Text size="textxs" className="menu-text">Employers</Text></a></li>
            <li><a href="/" className="menu-link"><Text size="textxs" className="menu-text">Candidates</Text></a></li>
            <li><a href="/" className="menu-link"><Text size="textxs" className="menu-text">Pricing Plans</Text></a></li>
            <li><a href="/" className="menu-link"><Text size="textxs" className="menu-text">Customer Support</Text></a></li>
          </ul> 

          <div className="contact">
            <a href="/"><FontAwesomeIcon icon={faPhone} className="contact-icon" /></a>
            <Text size="textxs" as="p" className="contact-text">+1-202-555-0178</Text>
            
            <div className="language-dropdown">
            <a href="/">
                  <Img src={selectedLanguage.icon} alt="language Icon" className="country-icon" /> 
                </a>
              <Select
                options={languageOptions}
                className="language-select"
                components={{ Option: CustomSelectOption }}
                value={selectedLanguage} 
                onChange={handleLanguageChange} 
                placeholder={(
                  <span>
                    <img src={selectedLanguage.icon} alt={selectedLanguage.label} className="select-flag" /> 
                    {selectedLanguage.label}
                  </span>
                )}
                isSearchable={false} 
                isClearable={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="logo-search">
            <Img src="images/logo.png" alt="Header Logo" className="logo" />
            <div className="search-box">
              <div className="search-content">
                <a href="/">
                  <Img src={selectedCountry.icon} alt="Country Icon" className="country-icon" /> 
                </a>
                <Select
                  components={{ Option: CustomSelectOption }}
                  options={countryOptions}
                  className="country-select"
                  value={selectedCountry} 
                  onChange={handleCountryChange} 
                  placeholder={<span><img src={selectedCountry.icon} alt={selectedCountry.label} className="select-flag" /> {selectedCountry.label}</span>}
                  isSearchable={false}
                />
              </div>
              <div className="search-input">
                <input 
                  type="text" 
                  value={searchInput} 
                  onChange={handleSearchInputChange} 
                  placeholder="Job title, keyword, company" 
                  className="search-input-field"
                />
                <a href="/">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="header-buttons">
            <Button className="btn btn-outline">Sign in</Button>
            <Button className="btn btn-primary">Post a Job</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

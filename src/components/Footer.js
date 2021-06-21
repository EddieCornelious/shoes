import "../styles/Footer.scss";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <ul>
          <li className="link__heading">
            <a>shop</a>
          </li>
          <li>
            <a>sneakers</a>
          </li>
          <li>
            <a>womens apparel</a>
          </li>
          <li>
            <a>mens apparel</a>
          </li>
          <li>
            <a>soccer</a>
          </li>
          <li>
            <a>flats</a>
          </li>
        </ul>

        <ul>
          <li className="link__heading">
            <a>retailers</a>
          </li>
          <li>
            <a>flagships</a>
          </li>
          <li>
            <a>affiliates</a>
          </li>
          <li>
            <a>publishers</a>
          </li>
          <li>
            <a>brands</a>
          </li>
          <li>
            <a>careers</a>
          </li>
        </ul>

        <ul>
          <li className="link__heading">
            <a>on the map</a>
          </li>
          <li>
            <a>events</a>
          </li>
          <li>
            <a>visit us</a>
          </li>
          <li>
            <a>store locator</a>
          </li>
          <li>
            <a>restrictions</a>
          </li>
          <li>
            <a>maunfacturing</a>
          </li>
        </ul>

        <ul>
          <li className="link__heading">
            <a>help</a>
          </li>
          <li>
            <a>return policy</a>
          </li>
          <li>
            <a>faq</a>
          </li>
          <li>
            <a>privacy policy</a>
          </li>
          <li>
            <a>money back guareentee</a>
          </li>
          <li>
            <a>outfitters</a>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">&nbsp;</div>
    </div>
  );
};

export default Footer;

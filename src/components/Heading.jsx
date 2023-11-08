import React from "react";
import BrandImg from "./BrandImg";
import Icon from './Icons';

function Heading() {
  return (
    <nav role="navigation">
    <BrandImg/>
      <ul class="ulFi">
        <li role="listitem"><a href="#">Shop</a></li>
        <li role="listitem"><a href="#">Blog</a></li>
        <li role="listitem"><a href="#">About</a></li>
        <li role="listitem"><a href="#">Contact</a></li>
      </ul>
      <ul class="ulSec" role="list">
      <button>&nbsp;<Icon/> Sign in &nbsp;</button>
      </ul>
    </nav>
  );
}

export default Heading;
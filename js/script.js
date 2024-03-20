// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: Mar 2024
// This file contains the JS functions for index.html

/**
 * This function gets users street number and street name and shows it back to user.
 */
function enterClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = parseInt(document.getElementById("street-name").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + streetNumber + ", " + streetName + "."
}

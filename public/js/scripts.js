"use strict";

$(document).ready(function () {
  /**
   * Initialize the bxslider and configure the options
   */
  $(".dashboard_slider").bxSlider({
    auto: true,
    autoStart: true,
    mode: "fade",
    speed: 350,
    preloadImages: "all",
    controls: false,
  });

  if ($("#errors").is(":visible")) {
    $("html, body").animate({ scrollTop: 550 }, "slow");
  }

  if ($("#validation_errors").is(":visible")) {
    $("html, body").animate({ scrollTop: 1700 }, "slow");
  }

  const selectedUserType = $("#userType").attr("value");
  if (selectedUserType) {
    $("#userType").val(selectedUserType);
  }
});

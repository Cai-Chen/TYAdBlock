setInterval(() => {
  var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
  if (skipButton && skipButton.length > 0) {
    console.log("Ad detected");
    skipButton[0].click();
  }

  var closeAdButton = document.getElementsByClassName("ytp-ad-overlay-close-button");
  if (closeAdButton && closeAdButton.length > 0) {
    console.log("Ad popup detected");
    Array.from(closeAdButton).forEach(e => {
      e.click();
    });
  }
}, 1000);
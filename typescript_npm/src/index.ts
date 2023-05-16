enum MediaTypes {
    JSON = "application/json",
    XML = "application/xml",
  }
  
  fetch("https://example.com/api/endpoint", {
    headers: {
      Accept: MediaTypes.JSON,
    },
  }).then(response => {
    console.log(`OK !`)
  });
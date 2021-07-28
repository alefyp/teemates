export const handleResponse = (response) => {
  if (response.status === 200) {
    return response;
  }

  throw new Error("Network response was not Ok");
};

export const handleError = (error) => {
  if (error.response) {
    console.error(
      "The request was made and the server responded with a status code " +
        error.response.status
    );
  } else if (error.request) {
    console.error(error.request);
  } else {
    console.error(error.message);
  }
  throw error;
};

export const getDataFromURL = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

import axios from 'axios';

const FORM_URL = 'https://api.web3forms.com/submit';

export const sendMessage = async (formData: FormData) => {
  try {
    console.log('Sending request to:', FORM_URL);
    
    // Convert FormData to regular object for URL-encoded format
    const formDataObj: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value.toString();
    });
    
    console.log('Form data being sent:', formDataObj);
    
    const response = await axios.post(FORM_URL, formDataObj, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    
    console.log('Web3forms response status:', response.status);
    console.log('Web3forms response data:', response.data);
    
    const status = response?.status;

    if (status >= 400) {
      console.error('Web3forms error response:', response.statusText);
      throw new Error(`HTTP ${status}: ${response.statusText}`);
    }

    const data = response.data;

    return {
      status,
      data,
    };
  } catch (error) {
    console.error('Error in sendMessage:', error);
    
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
      });
      
      throw new Error(
        `Failed to send message: ${error.response?.data?.message || error.message}`
      );
    }
    
    throw error;
  }
};


exports.handler = async function(event, context) {
    const url = `https://script.google.com/macros/s/AKfycbxuIoJMc79TD6c8h7Nbmrif-8PPTLkMKtf1rMatHVYnQ7tod2uI5YF8kGNW6b3ac_Aa/exec?path=Complaints&action=write&num=${event.queryStringParameters.num}&product=${event.queryStringParameters.product}&dateOrdered=${event.queryStringParameters.dateOrdered}&dateComplaint=${event.queryStringParameters.dateComplaint}&complaint=${event.queryStringParameters.complaint}`; // Corrected queryStringParameters
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch data', details: error.message }),
      };
    }
  };
  
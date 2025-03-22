import followRedirects from "follow-redirects";
export default (request, context) => {
  try {
    const url = new URL(request.url)
    const num = url.searchParams.get('num') || '9136641620'
    followRedirects.https.get(`https://script.google.com/macros/s/AKfycbxuIoJMc79TD6c8h7Nbmrif-8PPTLkMKtf1rMatHVYnQ7tod2uI5YF8kGNW6b3ac_Aa/exec?path=Orders&action=readOne&num=${num}` , resp => {
        let data ="";
        resp.on('data', chunk => data+=chunk);
        resp.on('end', () => {
            let finalData = JSON.parse(data);
            return new Response(`${finalData}`)
        })
    })
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}

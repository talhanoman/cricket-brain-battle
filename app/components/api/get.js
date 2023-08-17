

// Fetch Cricket Live Score Data

const APIkey = '8f866d3ecfmsh55ab909d55ca687p1dfa8cjsn50f18f641018';
const APIhost = 'unofficial-cricbuzz.p.rapidapi.com'
const apiUrl = `https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState=live`;

const getLiveScore = () => {
    let liveDataPromise = new Promise((resolve, reject) => {
        let myData = fetch(apiUrl, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key" : APIkey,
            "X-RapidAPI-Host": APIhost,
          },
        }).then((data) => {
          if (data.status == 200) {
            return data.json();
          } else {
            return 404;
          }
        });
        resolve(myData);
      });
      return liveDataPromise.then((data) => {
        return data;
    });
}


export { getLiveScore }
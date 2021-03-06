const getData = async function () {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=fQOSbqi5qRX4mfdYZdAhmaUzLIgXcUsttYeNeoaQ`
    );
    const data = await response.json();
    console.log(data);
    document.querySelector(".hdimage").src = data.url;

    document.querySelector(".news").innerHTML = data.explanation;
    document.querySelector(".ntitle").innerHTML = data.title;
    document.querySelector(".ndate").innerHTML = data.date;
    if (data.copyright == undefined) {
      document.querySelector(".copyrights").innerHTML = "No Author";
    } else {
      document.querySelector(".copyrights").innerHTML = data.copyright;
    }
  } catch (err) {
    alert("failed to fetch data");
  }
};

getData();

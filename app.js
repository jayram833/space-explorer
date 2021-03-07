const getData = async function () {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=fQOSbqi5qRX4mfdYZdAhmaUzLIgXcUsttYeNeoaQ`
    );
    const data = await response.json();
    console.log(data);

    const { date, explanation, title, url, copyright } = data;
    console.log(date, explanation, title, url);

    document.querySelector(".hdimage").src = url;

    document.querySelector(".news").innerHTML = explanation;
    document.querySelector(".ntitle").innerHTML = title;
    document.querySelector(".ndate").innerHTML = date;
    if (!copyright) return;
    else document.querySelector(".copyrights").innerHTML = copyright;
  } catch (err) {
    alert("failed to fetch data");
  }
};

getData();

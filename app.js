const getData = async function () {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=fQOSbqi5qRX4mfdYZdAhmaUzLIgXcUsttYeNeoaQ`
  );
  const data = await response.json();
  console.log(data);
  //   document.querySelector(".news").innerHTML = data.explanation;
  //   document.querySelector(".hdimage").src = data.url;

  document.querySelector(".news").innerHTML = data.explanation;
  document.querySelector(".ntitle").innerHTML = data.title;
  document.querySelector(".ndate").innerHTML = data.date;
};

getData();

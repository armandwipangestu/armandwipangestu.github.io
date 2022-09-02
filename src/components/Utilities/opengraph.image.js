import React, { useState, useEffect } from "react";
import { Axios } from "axios";

const OpenGraphImage = (name) => {
  const [datas, setDatas] = useState();
  const key = "3fe266f9-a6f8-4484-a8cf-eda88fe9495e";
  const encodeUrl = encodeURIComponent(`https://github.com/${name}`);

  useEffect(() => {
    Axios({
      method: "GET",
      url: `https://opengraph.io/api/1.1/site/${encodeUrl}?app_id=${key}`,
    })
      .then((result) => setDatas(result))
      .catch((err) => console.log(err));
  }, []);

  if (datas) {
    return datas;
  }
};

export default OpenGraphImage;

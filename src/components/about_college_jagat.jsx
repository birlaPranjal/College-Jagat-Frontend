import React, { useState, useEffect } from 'react'
import '../style/about_college_jagat.scss'

const about_college_jagat = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("/json_data_file/landing_site_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myjson) => {
        setData(myjson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <div className="about-cj">
    <div className="about-cj-heading">
        <div className="cj-line"></div>
        <div className="cj-head">About College Jagat</div>
    </div>
    <div className="about-cj-content">
        <div className="cj-left">
           {data &&
              data.length > 0 &&
              data.map((val) => {
                return <p key={val.id}>{val.about_clg_jagat.p}</p>;
              })}
        </div>
        <div className="cj-right">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2bd6sFfIt4I?si=TNq9c9DHB892hvBp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
    </div>
    </>
  )
}

export default about_college_jagat

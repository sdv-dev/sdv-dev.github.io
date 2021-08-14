import React, { useState, useEffect } from "react";
import { Article } from "../components/common";
import Features from "../components/home/features";
import Hero from "../components/home/hero";
import Join from "../components/home/join";
import OpenSource from "../components/home/open-source";
import ProtectEnhance from "../components/home/protect-enhance";
import TryIt from "../components/home/try-it";
import config from "../utils/siteConfig";
import Seo from "../components/Seo";

export default function HomePage() {
  const [downloads, setDownloads] = useState("");
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //Get the total number of downloads for a single release, using its tag name.

  function getDownloadsCount() {
    var project = "ctgan";

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
      var data = JSON.parse(this.responseText);
      var number = numberWithCommas(data.total_downloads);
      var numberK = number.split(",")[0];
      console.log(" - COUNT - ", number);
      setDownloads(numberK);
      return numberK;
    });
    xhr.open("GET", "https://api.pepy.tech/api/projects/" + project);
    xhr.send();
  }

  useEffect(() => {
    getDownloadsCount();
    return () => {};
  }, []);

  return (
    <Article>
      <Seo
        title={config.siteTitleMeta}
        description={config.siteDescriptionMeta}
        type="website"
        image={`/sdv-home.jpg`}
        canonical={`https://sdv.dev/`}
      />

      <div className="mx-auto" style={{ maxWidth: "1680px"}}>
        <Hero downloads={downloads} />
        <Features />
        <ProtectEnhance />
        <OpenSource />
        <TryIt />
        <Join downloads={downloads} />
      </div>
    </Article>
  );
}

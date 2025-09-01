import "/src/styles/fonts.css";
import "/src/styles/global.css";
import "/src/styles/navbar.scss";
import "/src/styles/post.scss";
require("prismjs/themes/prism-solarizedlight.css");
require("prismjs/themes/prism-okaidia.css");

export const onClientEntry = () => {
  (function (squid) {
    window.$quid || (window.$quid = {});
    const script = document.createElement("script");
    script.src = "https://app.asksquid.ai/tfs/" + squid + "/sdk";
    script.async = true;
    document.head.appendChild(script);
  })("68b5735afd7af275ceff56a9");
};

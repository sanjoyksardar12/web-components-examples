class PopUpInfo extends HTMLElement {
  constructor() {
    super();
    //create shadow root
    const shadow = this.attachShadow({ mode: "open" });

    //create spans
    var wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    var icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    var info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    var text = this.getAttribute("data-text");
    info.textContent = text;

    //Inset Icon
    var imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }
    var img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    //create some css to apply shadow dom
    // var style = document.createElement('style');
    // console.log("style.isConnected before connected", style.isConnected);
    // style.textContent = `
    //   .wrapper {
    //     position: relative;
    //   }

    //   .info {
    //     font-size: 0.8rem;
    //     width: 200px;
    //     display: inline-block;
    //     border: 1px solid black;
    //     padding: 10px;
    //     background: white;
    //     border-radius: 10px;
    //     opacity: 0;
    //     transition: 0.6s all;
    //     position: absolute;
    //     bottom: 20px;
    //     left: 10px;
    //     z-index: 3;
    //   }

    //   img {
    //     width: 1.2rem;
    //   }

    //   .icon:hover + .info, .icon:focus + .info {
    //     opacity: 1;
    //   }
    // `;
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    // shadow.appendChild(style);
    shadow.appendChild(linkElem);

    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

customElements.define("popup-info", PopUpInfo);
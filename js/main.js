function h(tag, attributes, ...children) {
  const element = document.createElement(tag);
  if (attributes) {
    Object.entries(attributes).forEach((entry) => {
      element.setAttribute(entry[0], entry[1]);
    });
  }
  element.append(...children);
  return element;
}

window.sendMsg = () => {
  let msg = document.getElementById("input").value;
  let info = window.webxdc.selfName + ": " + msg;
  document.getElementById("input").value = "";

  // send new updates
  window.webxdc.sendUpdate(
    {
      payload: {
        name: window.webxdc.selfName,
        msg,
      },
      info,
    },
    info,
  );
};

window.onload = () => {
  // handle past and future state updates
  window.webxdc.setUpdateListener(function (update) {
    const chat = document.getElementById("chat-area");
    chat.append(
      h(
        "p",
        { class: "msg" },
        h("span", { class: "nick" }, update.payload.name, ": "),
        update.payload.msg,
      ),
    );
  });

  window.deviceName.innerHTML = "You are: " + window.webxdc.selfName;
};

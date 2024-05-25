document
  .getElementById("whatsAppButton")
  .addEventListener("click", function () {
    const phoneNumber = "+543407416422";
    const message = "Hola, me gustaría obtener más información.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  });

const paymentActionsData = [
    {
      eventKey: "0",
      header: "AuthCard",
      body: "  Initiate a payment authorization request for a card payment."
    },
    {
      eventKey: "1",
      header: "ReadCard",
      body: "Generate a payment token via EMV, NFC, or MSR"
    },
    {
        eventKey: "2",
        header: "ReadManual",
        body: "Generate a payment token via manually-keyed card data"
    },
    {
        eventKey: "3",
        header: "Tips",
        body: "Prompt for a tip amount for a payment"
    }
    // Add more items as needed
  ];
  export default paymentActionsData;
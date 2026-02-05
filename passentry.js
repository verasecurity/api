export default function handler(req, res) {
  const now = new Date().toISOString();

  res.status(200).json({
    serialNumber: req.query.serialNumber,
    barcode: {
      format: "PKBarcodeFormatQR",
      message: `USER123|${now}`,
      messageEncoding: "iso-8859-1"
    },
    secondaryFields: [
      {
        key: "last_update",
        label: "Last Refresh",
        value: now
      }
    ]
  });
}

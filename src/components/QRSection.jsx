const QRSection = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Scan Me!</h2>
      <p className="mb-8 text-gray-700 dark:text-gray-300 max-w-md mx-auto">
        Scan this QR code on my resume to visit my portfolio online instantly.
      </p>
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://your-portfolio-url.vercel.app"
        alt="Portfolio QR Code"
        className="mx-auto rounded-lg shadow-lg"
      />
    </section>
  );
};

export default QRSection;

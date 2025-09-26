function Product() {
  return (
    <>
      <div className="min-h-screen w-full relative">
        {/* Radial Gradient Background from Top */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #fff 40%, #475569 100%)",
          }}
        />
        {/* Your Content/Components */}
      </div>
    </>
  );
}

export default Product;

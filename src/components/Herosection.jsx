const Herosection = () => {
  return (
    <main className='hero container '>
      <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className='hero-btn'>
          <button>Shop Now</button>
          <button className='secondary-btn'>Category</button>
        </div>
        <div className='shopping'>
          <p> Aslo Available On </p>
        </div>
        <div className='brand-icons'>
          <img src='/image/flipkart.png' alt='icon' />
          <img src='/image/amazon.png' alt='icon' />
        </div>
      </div>

      <div className='hero-image'>
        <img src='/image/shoe_image.png' alt='random' />
      </div>
    </main>
  );
};
export default Herosection;

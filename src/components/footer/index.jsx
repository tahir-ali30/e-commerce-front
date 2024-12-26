import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full p-10 pb-0 border-t bg-blue-500 text-white [&_a]:block">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-2 pb-8">
        <div className="md:col-span-2 border-r">
          <p className="mb-8 font-semibold text-xl">Contact Us</p>
          <p>
            Demo Store <br />
            42 Puffin Street 12345 <br />
            Puffinvile <br />
            France, <br />
            United States <br />
          </p>
          <p className="my-2">0123-456-789</p>
          <p>demo@demo.com</p>
        </div>
        <div className="md:col-span-7">
          <div className="md:px-16">
            <ul className="flex justify-between flex-wrap gap-4 [&_li]:space-y-1.5">
              <li>
                <p className="md:mb-8 font-semibold md:text-xl underline">
                  Products
                </p>
                <p>Prices Drop</p>
                <p>New Products</p>
                <p>Best Sales</p>
              </li>
              <li>
                <p className="md:mb-8 font-semibold md:text-xl underline">
                  Our Company
                </p>
                <p>Delivery</p>
                <p>Legal Notice</p>
                <p>Terms and Conditions</p>
                <Link to={"about"}>About Us</Link>
              </li>
              <li>
                <p className="md:mb-8 font-semibold md:text-xl underline">
                  Information
                </p>
                <p>Delivery</p>
                <p>Legal Notice</p>
                <p>Terms and Conditions</p>
                <p>About Us</p>
              </li>
              <li>
                <p className="md:mb-8 font-semibold md:text-xl underline">
                  Trending Category
                </p>
                <p>Camera Accessories</p>
                <p>Gaming & Accessories</p>
                <p>Headphone Cushions</p>
                <p>Home Theatres</p>
                <p>Microwave Ovens</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t flex items-center justify-center py-3">
        <p>© 2024 - Ecommerce software by Tahir Ali</p>
      </div>
    </footer>
  );
}

export default Footer;

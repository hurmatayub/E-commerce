import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#3A3845] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h2 className="text-lg font-semibold mb-4">CeramiLine</h2>
          <p className="text-gray-400">
            Your one-stop shop for all your needs. We bring the best quality
            products to your doorstep.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li>Email: hurmatayub64@gmail.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: Pakistan, Karachi</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="w-[344px] h-[52px]">
            <div className=" flex space-x-4">
              <a href="#">
                <Image
                  src="/Facebook.png"
                  alt="Facebook"
                  width={10}
                  height={18}
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Image
                  src="/Twitter.png"
                  alt="Twitter"
                  width={20}
                  height={18}
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Image
                  src="/Instagram.png"
                  alt="Instagram"
                  width={20}
                  height={18}
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Image
                  src="/Linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={18}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500">
        &copy; 2024 CeramiLine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

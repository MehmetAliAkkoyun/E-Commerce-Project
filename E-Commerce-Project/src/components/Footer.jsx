export default function Footer() {
  const linkTitle = "text-[#252B42] font-bold text-sm mb-5";
  const linkItem =
    "text-[#737373] text-sm font-bold leading-8 hover:text-[#23A6F0] cursor-pointer";

  return (
    <footer className="w-full bg-white">

      <div className="bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>

          <div className="flex items-center gap-5 text-[#23A6F0]">
        
            <a href="#!" aria-label="facebook" className="text-xl">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.88h-2.3v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            <a href="#!" aria-label="instagram" className="text-xl">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 12 5.51 5.51 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 10.5zM18 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
              </svg>
            </a>
         
            <a href="#!" aria-label="twitter" className="text-xl">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.8-2.4.9a3.7 3.7 0 0 0-6.4 2.5c0 .3 0 .6.1.8A10.5 10.5 0 0 1 3.1 4.8a3.7 3.7 0 0 0 1.1 5c-.6 0-1.1-.2-1.6-.4v.1a3.7 3.7 0 0 0 3 3.6c-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1a3.7 3.7 0 0 0 3.4 2.6 7.4 7.4 0 0 1-4.6 1.6H2a10.5 10.5 0 0 0 5.7 1.7c6.9 0 10.7-5.7 10.7-10.7v-.5c.7-.5 1.3-1.2 1.8-1.9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
         
          <div>
            <h4 className={linkTitle}>Company Info</h4>
            <ul className="space-y-2">
              <li className={linkItem}>About Us</li>
              <li className={linkItem}>Carrier</li>
              <li className={linkItem}>We are hiring</li>
              <li className={linkItem}>Blog</li>
            </ul>
          </div>

         
          <div>
            <h4 className={linkTitle}>Legal</h4>
            <ul className="space-y-2">
              <li className={linkItem}>About Us</li>
              <li className={linkItem}>Carrier</li>
              <li className={linkItem}>We are hiring</li>
              <li className={linkItem}>Blog</li>
            </ul>
          </div>

       
          <div>
            <h4 className={linkTitle}>Features</h4>
            <ul className="space-y-2">
              <li className={linkItem}>Business Marketing</li>
              <li className={linkItem}>User Analytic</li>
              <li className={linkItem}>Live Chat</li>
              <li className={linkItem}>Unlimited Support</li>
            </ul>
          </div>

      
          <div>
            <h4 className={linkTitle}>Resources</h4>
            <ul className="space-y-2">
              <li className={linkItem}>IOS &amp; Android</li>
              <li className={linkItem}>Watch a Demo</li>
              <li className={linkItem}>Customers</li>
              <li className={linkItem}>API</li>
            </ul>
          </div>

        
       <div>
  <h4 className={linkTitle}>Get In Touch</h4>

  <div className="mt-0 flex w-full max-w-[360px] sm:max-w-none">
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="flex-1 h-[58px] border border-[#E6E6E6] bg-[#F9F9F9] px-5 text-sm outline-none
                 text-[#737373] placeholder:font-medium placeholder:text-[#737373]"
    />

    <button
      type="button"
      className="h-[58px] min-w-[120px] px-6 bg-[#23A6F0] text-white text-sm font-medium
                 border border-[#23A6F0]"
    >
      Subscribe
    </button>
  </div>

  <p className="mt-3 text-xs text-[#737373] font-medium">
    Lore imp sum dolor Amit
  </p>
</div>

        </div>
      </div>

  
      <div className="bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-sm font-bold text-[#737373]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

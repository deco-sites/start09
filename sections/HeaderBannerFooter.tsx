import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  // @format rich-text
  logoText?: string;
  // @format textarea
  menuItems?: string;
  bannerImage?: ImageWidget;
  // @format rich-text
  bannerText?: string;
  // @format textarea
  copyrightText?: string;
  // @format textarea
  socialLinks?: string;
}

export default function HeaderBannerFooter({
  logoText = "Your Logo",
  menuItems = "Home\nAbout\nContact",
  bannerImage,
  bannerText = "Welcome to our website!",
  copyrightText = "© 2023 Your Company. All rights reserved.",
  socialLinks = "Facebook\nTwitter\nInstagram",
}: Props) {
  return (
    <div>
      <header class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">{logoText}</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            {menuItems.split("\n").map((item) => (
              <li>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div class="hero min-h-screen" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">{bannerText}</h1>
          </div>
        </div>
      </div>

      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>{copyrightText}</p>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4">
            {socialLinks.split("\n").map((link) => (
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
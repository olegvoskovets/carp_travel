import React from "react";

const SocialCommunities = () => {
  return (
    <div className="flex gap-5 justify-end">
      <div>
        <span className="text-[12px] font-thin">Follow us</span>
      </div>
      <ul className="w-[81px] cursor-pointer font-fontWeight400">
        <li className="hover:underline">facebook</li>
        <li className="hover:underline">instagram</li>
        <li className="hover:underline">youtube</li>
        <li className="hover:underline">tiktok</li>
      </ul>
    </div>
  );
};

export default SocialCommunities;

import React from "react";

function card({ username = "Your name", text = "your age" }) {
  return (
    <div
      className="flex flex-col rounded-xl  p-4 m-4"
      style={{
        border: "0.88px solid",

        backdropFilter: "saturate(180%) blur(14px)",
        background: " #ffffff0d",
      }}
    >
      <div>
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="400"
          height="400"
          className="rounded-xl"
        />
        <div class="flex items-center justify-between mt-4">
          <h3 class="text-xl font-bold bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-500 text-transparent bg-clip-text">
            {username}
          </h3>
          <p class="text-xl font-semibold">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default card;

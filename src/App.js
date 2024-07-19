import { useState } from "react";
import Pricing from "./components/pricing"
import WaitList from "./components/waitlist"
import Content from "./components/content"
import "./App.css"
function App() {
  const [videoURL, setVideoURL] = useState("https://www.youtube.com/embed/lPrjP4A_X4s?si=bSY7qw8u_iXuRFKj")
  const [pricings, setPricings] = useState([
    {
      "Title": "Basic",
      "Price": "$5/Month",
      "Features": [
        {
          "Name": "1 Team Member",
          "IsOffer": true
        },
        {
          "Name": "2GB Storage",
          "IsOffer": true
        },
        {
          "Name": "Add Custom Domain",
          "IsOffer": false
        },
        {
          "Name": "24 hour Support",
          "IsOffer": false
        }
      ],
      "IsRecommended": false
    },
    {
      "Title": "Standard",
      "Price": "$10/Month",
      "Features": [
        {
          "Name": "3 Team Member",
          "IsOffer": true
        },
        {
          "Name": "5GB Storage",
          "IsOffer": true
        },
        {
          "Name": "Add Custom Domain",
          "IsOffer": true
        },
        {
          "Name": "24 hour Support",
          "IsOffer": false
        }
      ],
      "IsRecommended": true
    },
    {
      "Title": "Premium",
      "Price": "$25/Month",
      "Features": [
        {
          "Name": "10 Team Member",
          "IsOffer": true
        },
        {
          "Name": "10GB Storage",
          "IsOffer": true
        },
        {
          "Name": "Add Custom Domain",
          "IsOffer": true
        },
        {
          "Name": "24 hour Support",
          "IsOffer": true
        }
      ],
      "IsRecommended": false
    },
  ])

  const AddPricing = (pric) => {

  }

  return (
    <div className="wavy-background">
      {/* Header */}
      <header class="text-black" >
        <div class="container mx-auto flex justify-between items-center py-4 px-2">
          <div class="text-xl font-bold">
            <a href="#">QuickValide</a>
          </div>
          <nav class="flex space-x-4">
            <a href="#home" class="hover:text-gray-400">Home</a>
            <a href="#pricing" class="hover:text-gray-400">Pricing</a>
            <a href="mailto:owais@mailinator.com" class="hover:text-gray-400">Contact Us</a>
          </nav>
        </div>
      </header>

      <div className="min-h-screen">
        {/* Content */}
        <Content />

        {/* Wish List */}
        <WaitList />
      </div>

      {/* Video */}
      <div className="flex justify-center min-h-screen">
        <iframe width="1000" height="500" src={videoURL} title="YouTube video player" frameborder="0" allow="" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>

      {/* Pricing */}
      <div>
        <Pricing pricings={pricings} />
      </div>
    </div>
  );
}

export default App;
